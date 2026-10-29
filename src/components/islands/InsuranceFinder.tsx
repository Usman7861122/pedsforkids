import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useMemo, useState } from 'react';

type Props = { featured: string[]; more: string[]; phone: string; phoneHref: string };

const shades = ['#f0c200', '#ff9d8e', '#7fcf9f', '#9bd3ee', '#c9b8f2'];

export default function InsuranceFinder({ featured, more, phone, phoneHref }: Props) {
  const reduce = useReducedMotion();
  const [q, setQ] = useState('');
  const all = useMemo(() => Array.from(new Set([...featured, ...more])).sort((a, b) => a.localeCompare(b)), [featured, more]);
  const term = q.trim().toLowerCase();
  const results = term ? all.filter((n) => n.toLowerCase().includes(term)) : all;

  return (
    <div className="mt-10">
      <div className="sheet max-w-xl p-2" style={{ ['--sheet' as string]: '#e9f7fd', ['--sheet-shade' as string]: '#bfd9e6' }}>
        <label htmlFor="plan" className="sr-only">Type your insurance plan</label>
        <input
          id="plan"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Type your plan, like Aetna or Cigna"
          autoComplete="off"
          className="relative z-[1] w-full rounded-[1.25rem] bg-transparent px-5 py-4 font-display text-lg font-bold placeholder:font-body placeholder:font-normal placeholder:text-ink-soft/70 focus:outline-none"
        />
      </div>

      <p className="mt-5 min-h-7 font-bold" role="status" aria-live="polite">
        {term
          ? results.length
            ? `${results.length} ${results.length === 1 ? 'match' : 'matches'}. We take these plans.`
            : 'No match yet.'
          : `${all.length} plans and counting.`}
      </p>

      {term && results.length === 0 && (
        <p className="mt-2 max-w-[52ch]">
          Plans change often, so call us at <a href={phoneHref} className="font-bold underline decoration-coral decoration-[3px] underline-offset-4">{phone}</a> and we will check yours.
        </p>
      )}

      <ul className="mt-4 flex flex-wrap gap-2.5">
        <AnimatePresence mode="popLayout" initial={false}>
          {results.map((n, i) => (
            <motion.li
              key={n}
              layout={!reduce}
              initial={{ opacity: 0, scale: reduce ? 1 : 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: reduce ? 1 : 0.85 }}
              transition={{ duration: reduce ? 0 : 0.18 }}
              className="tag"
              style={{ ['--tag-shade' as string]: shades[i % shades.length] }}
            >
              {n}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      <p className="mt-8 max-w-[60ch] text-sm text-ink-soft">
        Coverage can change. Please call to confirm your plan before your visit.
      </p>
    </div>
  );
}
