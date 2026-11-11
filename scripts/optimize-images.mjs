// Makes small AVIF and WebP copies of every JPG/PNG in public/images, in several widths,
// and writes src/data/imageManifest.json so the <Pic> component can build srcset lists.
// Runs before every build (see package.json). Output goes to public/images/_opt (not committed).
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC = path.join(ROOT, 'public/images');
const OUT = path.join(SRC, '_opt');
const MANIFEST = path.join(ROOT, 'src/data/imageManifest.json');
const WIDTHS = [240, 480, 800, 1200, 1600];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return e.name === '_opt' ? [] : walk(p);
    return /\.(jpe?g|png)$/i.test(e.name) ? [p] : [];
  });
}

const files = walk(SRC);
const manifest = {};
const jobs = [];

for (const file of files) {
  const rel = path.relative(SRC, file).split(path.sep).join('/');
  const key = `/images/${rel}`;
  const base = rel.replace(/\.[^.]+$/, '');
  const { width: w, height: h } = await sharp(file).metadata();
  if (!w || !h) continue;
  const widths = [...WIDTHS.filter((x) => x < w), w];
  manifest[key] = { w, h, base, widths };
  const srcTime = fs.statSync(file).mtimeMs;
  for (const width of widths) {
    for (const fmt of ['avif', 'webp']) {
      const out = path.join(OUT, `${base}-${width}.${fmt}`);
      if (fs.existsSync(out) && fs.statSync(out).mtimeMs > srcTime) continue; // already up to date
      jobs.push({ file, out, width, fmt });
    }
  }
}

let done = 0;
const run = async ({ file, out, width, fmt }) => {
  fs.mkdirSync(path.dirname(out), { recursive: true });
  let img = sharp(file).rotate().resize({ width, withoutEnlargement: true });
  img = fmt === 'avif' ? img.avif({ quality: 50, effort: 3 }) : img.webp({ quality: 78 });
  await img.toFile(out);
  done++;
};
const queue = [...jobs];
await Promise.all(Array.from({ length: 4 }, async () => { while (queue.length) await run(queue.shift()); }));

fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 1) + '\n');
console.log(`[images] ${files.length} images, ${done} files written, ${jobs.length - done} skipped`);
