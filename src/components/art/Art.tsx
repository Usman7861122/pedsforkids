import type { SVGProps } from 'react';

/**
 * Paper-craft illustrations. Flat shapes + an offset darker copy underneath
 * so every piece looks like cut paper. All are decorative (aria-hidden).
 */
type P = SVGProps<SVGSVGElement>;
const base = { 'aria-hidden': true, focusable: false } as const;

export function Cloud(p: P) {
  return (
    <svg viewBox="0 0 200 100" {...base} {...p}>
      <g fill="#a9d9ee" transform="translate(0 6)">
        <circle cx="60" cy="62" r="30" /><circle cx="102" cy="44" r="38" /><circle cx="148" cy="60" r="32" />
        <rect x="34" y="60" width="146" height="34" rx="17" />
      </g>
      <g fill="#fff">
        <circle cx="60" cy="62" r="30" /><circle cx="102" cy="44" r="38" /><circle cx="148" cy="60" r="32" />
        <rect x="34" y="60" width="146" height="34" rx="17" />
      </g>
    </svg>
  );
}

export function Plane({ color = '#ff7a66', light = '#ff9d8e', dark = '#d9503c', ...p }: P & { color?: string; light?: string; dark?: string }) {
  return (
    <svg viewBox="0 0 120 80" {...base} {...p}>
      <polygon points="4,40 116,6 70,74" fill={color} />
      <polygon points="4,40 116,6 54,46" fill={light} />
      <polygon points="54,46 116,6 70,74" fill={dark} />
    </svg>
  );
}

export function Sun(p: P) {
  const rays = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <svg viewBox="0 0 200 200" {...base} {...p}>
      {rays.map((r) => (
        <polygon key={r} points="100,6 112,34 88,34" fill="#ffb81f" transform={`rotate(${r} 100 100)`} />
      ))}
      <circle cx="100" cy="106" r="54" fill="#e0a800" />
      <circle cx="100" cy="100" r="54" fill="#ffd23f" />
      <circle cx="82" cy="94" r="5" fill="#2a2250" />
      <circle cx="118" cy="94" r="5" fill="#2a2250" />
      <path d="M80 114 Q100 134 120 114" fill="none" stroke="#2a2250" strokeWidth="5" strokeLinecap="round" />
      <circle cx="68" cy="112" r="8" fill="#ff7a66" opacity=".6" />
      <circle cx="132" cy="112" r="8" fill="#ff7a66" opacity=".6" />
    </svg>
  );
}

export function Daisy(p: P) {
  return (
    <svg viewBox="0 0 60 90" {...base} {...p}>
      <rect x="28" y="40" width="5" height="50" rx="2.5" fill="#25995a" />
      {Array.from({ length: 8 }, (_, i) => (
        <ellipse key={i} cx="30" cy="12" rx="7" ry="13" fill="#fff" transform={`rotate(${i * 45} 30 30)`} />
      ))}
      <circle cx="30" cy="30" r="9" fill="#ffd23f" />
    </svg>
  );
}

export function Tree(p: P) {
  return (
    <svg viewBox="0 0 60 100" {...base} {...p}>
      <rect x="27" y="50" width="7" height="50" rx="3" fill="#a46a3c" />
      <ellipse cx="30" cy="36" rx="22" ry="32" fill="#25995a" transform="translate(0 4)" />
      <ellipse cx="30" cy="36" rx="22" ry="32" fill="#43c37a" />
    </svg>
  );
}

export function Balloon({ color = '#ff7a66', shade = '#d9503c', ...p }: P & { color?: string; shade?: string }) {
  return (
    <svg viewBox="0 0 60 120" {...base} {...p}>
      <path d="M30 78 C30 96 26 104 24 118" fill="none" stroke="#2a2250" strokeWidth="2" opacity=".5" />
      <ellipse cx="30" cy="34" rx="25" ry="31" fill={shade} transform="translate(0 4)" />
      <ellipse cx="30" cy="34" rx="25" ry="31" fill={color} />
      <polygon points="24,68 36,68 30,78" fill={color} />
      <ellipse cx="20" cy="22" rx="5" ry="9" fill="#fff" opacity=".45" transform="rotate(20 20 22)" />
    </svg>
  );
}

export function Star({ color = '#ffd23f', ...p }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 60 60" {...base} {...p}>
      <polygon points="30,3 38,22 58,23 43,36 48,56 30,45 12,56 17,36 2,23 22,22" fill={color} />
    </svg>
  );
}

export function Fish({ color = '#ffd23f', shade = '#e0a800', ...p }: P & { color?: string; shade?: string }) {
  return (
    <svg viewBox="0 0 90 56" {...base} {...p}>
      <polygon points="60,28 88,8 88,48" fill={shade} />
      <ellipse cx="38" cy="32" rx="34" ry="21" fill={shade} />
      <ellipse cx="38" cy="28" rx="34" ry="21" fill={color} />
      <circle cx="22" cy="23" r="4" fill="#2a2250" />
      <path d="M44 14 Q54 28 44 42" fill="none" stroke={shade} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Whale(p: P) {
  return (
    <svg viewBox="0 0 280 170" {...base} {...p}>
      <path d="M126 36 C126 22 112 14 104 6 M126 36 C126 22 140 14 148 6" fill="none" stroke="#bfe8f8" strokeWidth="6" strokeLinecap="round" />
      <g transform="translate(0 7)">
        <path d="M18 104 C18 62 70 40 128 44 C184 48 212 82 236 62 L268 40 L260 104 L236 96 C216 132 170 148 112 146 C58 144 18 136 18 104Z" fill="#1d6a96" />
      </g>
      <path d="M18 104 C18 62 70 40 128 44 C184 48 212 82 236 62 L268 40 L260 104 L236 96 C216 132 170 148 112 146 C58 144 18 136 18 104Z" fill="#2c8fc2" />
      <path d="M30 112 C60 134 150 142 214 108 C180 126 90 128 30 112Z" fill="#bfe8f8" />
      <circle cx="64" cy="86" r="6" fill="#2a2250" />
      <circle cx="46" cy="104" r="9" fill="#ff7a66" opacity=".55" />
      <path d="M62 112 Q76 122 92 114" fill="none" stroke="#2a2250" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

type AnimalProps = P & { stetho?: boolean };

function Stetho() {
  return (
    <g fill="none" strokeLinecap="round">
      <path d="M72 168 C70 196 130 196 128 168" stroke="#2a2250" strokeWidth="5" />
      <circle cx="100" cy="196" r="8" fill="#ffd23f" stroke="#2a2250" strokeWidth="4" />
    </g>
  );
}

export function Bear({ stetho, ...p }: AnimalProps) {
  return (
    <svg viewBox="0 0 200 210" {...base} {...p}>
      <g fill="#a46a3c" transform="translate(0 6)">
        <circle cx="52" cy="54" r="24" /><circle cx="148" cy="54" r="24" /><circle cx="100" cy="112" r="64" />
      </g>
      <g fill="#c98b57">
        <circle cx="52" cy="54" r="24" /><circle cx="148" cy="54" r="24" /><circle cx="100" cy="112" r="64" />
      </g>
      <circle cx="52" cy="54" r="12" fill="#f0c9a0" /><circle cx="148" cy="54" r="12" fill="#f0c9a0" />
      <ellipse cx="100" cy="134" rx="30" ry="23" fill="#f0c9a0" />
      <ellipse cx="100" cy="122" rx="10" ry="7" fill="#2a2250" />
      <path d="M100 129 V138 M88 142 Q100 152 112 142" fill="none" stroke="#2a2250" strokeWidth="4" strokeLinecap="round" />
      <circle cx="76" cy="98" r="6" fill="#2a2250" /><circle cx="124" cy="98" r="6" fill="#2a2250" />
      <circle cx="62" cy="122" r="9" fill="#ff7a66" opacity=".5" /><circle cx="138" cy="122" r="9" fill="#ff7a66" opacity=".5" />
      {stetho && <Stetho />}
    </svg>
  );
}

export function Bunny({ stetho, ...p }: AnimalProps) {
  return (
    <svg viewBox="0 0 200 210" {...base} {...p}>
      <g fill="#d9d2e8" transform="translate(0 6)">
        <ellipse cx="72" cy="52" rx="19" ry="50" /><ellipse cx="128" cy="52" rx="19" ry="50" /><circle cx="100" cy="126" r="58" />
      </g>
      <g fill="#fff">
        <ellipse cx="72" cy="52" rx="19" ry="50" /><ellipse cx="128" cy="52" rx="19" ry="50" /><circle cx="100" cy="126" r="58" />
      </g>
      <ellipse cx="72" cy="56" rx="9" ry="34" fill="#ffb8c6" /><ellipse cx="128" cy="56" rx="9" ry="34" fill="#ffb8c6" />
      <polygon points="92,122 108,122 100,132" fill="#ff7a66" />
      <path d="M100 132 V140 M88 144 Q100 154 112 144" fill="none" stroke="#2a2250" strokeWidth="4" strokeLinecap="round" />
      <circle cx="76" cy="110" r="6" fill="#2a2250" /><circle cx="124" cy="110" r="6" fill="#2a2250" />
      <circle cx="62" cy="130" r="9" fill="#ffb8c6" /><circle cx="138" cy="130" r="9" fill="#ffb8c6" />
      {stetho && <Stetho />}
    </svg>
  );
}

export function Owl({ stetho, ...p }: AnimalProps) {
  return (
    <svg viewBox="0 0 200 210" {...base} {...p}>
      <g fill="#6b47bd" transform="translate(0 6)">
        <polygon points="40,30 78,52 46,84" /><polygon points="160,30 122,52 154,84" />
        <ellipse cx="100" cy="116" rx="66" ry="76" />
      </g>
      <g fill="#8f6be0">
        <polygon points="40,30 78,52 46,84" /><polygon points="160,30 122,52 154,84" />
        <ellipse cx="100" cy="116" rx="66" ry="76" />
      </g>
      <ellipse cx="100" cy="146" rx="42" ry="48" fill="#e4dbfa" />
      <circle cx="72" cy="92" r="25" fill="#fffdf7" /><circle cx="128" cy="92" r="25" fill="#fffdf7" />
      <circle cx="74" cy="94" r="11" fill="#2a2250" /><circle cx="126" cy="94" r="11" fill="#2a2250" />
      <circle cx="78" cy="90" r="3.5" fill="#fff" /><circle cx="130" cy="90" r="3.5" fill="#fff" />
      <polygon points="90,108 110,108 100,126" fill="#ffd23f" />
      <path d="M52 146 Q40 170 56 184 M148 146 Q160 170 144 184" fill="none" stroke="#6b47bd" strokeWidth="9" strokeLinecap="round" />
      {stetho && <Stetho />}
    </svg>
  );
}

export function Fox({ stetho, ...p }: AnimalProps) {
  return (
    <svg viewBox="0 0 200 210" {...base} {...p}>
      <g fill="#d9772b" transform="translate(0 6)">
        <polygon points="34,22 84,62 30,100" /><polygon points="166,22 116,62 170,100" /><circle cx="100" cy="122" r="60" />
      </g>
      <g fill="#ff9a4d">
        <polygon points="34,22 84,62 30,100" /><polygon points="166,22 116,62 170,100" /><circle cx="100" cy="122" r="60" />
      </g>
      <polygon points="44,44 68,62 44,82" fill="#2a2250" opacity=".8" /><polygon points="156,44 132,62 156,82" fill="#2a2250" opacity=".8" />
      <path d="M44 130 Q70 118 100 150 Q130 118 156 130 Q150 176 100 180 Q50 176 44 130Z" fill="#fffdf7" />
      <ellipse cx="100" cy="134" rx="9" ry="7" fill="#2a2250" />
      <circle cx="74" cy="110" r="6" fill="#2a2250" /><circle cx="126" cy="110" r="6" fill="#2a2250" />
      <path d="M100 141 V148 M90 152 Q100 160 110 152" fill="none" stroke="#2a2250" strokeWidth="4" strokeLinecap="round" />
      {stetho && <Stetho />}
    </svg>
  );
}

export type AnimalName = 'bear' | 'bunny' | 'owl' | 'fox';
export function Animal({ name, ...p }: AnimalProps & { name: AnimalName }) {
  if (name === 'bear') return <Bear {...p} />;
  if (name === 'bunny') return <Bunny {...p} />;
  if (name === 'owl') return <Owl {...p} />;
  return <Fox {...p} />;
}

/** Layered hills for the bottom of scenes and the footer. */
export function Hills({ colors = ['#7fdc9d', '#43c37a', '#25995a'], ...p }: P & { colors?: string[] }) {
  return (
    <svg viewBox="0 0 1440 260" preserveAspectRatio="none" {...base} {...p}>
      <path d="M0 120 C180 40 360 40 560 110 C760 180 960 60 1160 70 C1300 78 1380 110 1440 130 V260 H0Z" fill={colors[0]} />
      <path d="M0 170 C220 100 420 110 640 160 C860 210 1100 120 1440 170 V260 H0Z" fill={colors[1]} />
      <path d="M0 214 C260 170 520 190 760 214 C1000 238 1220 180 1440 210 V260 H0Z" fill={colors[2]} />
    </svg>
  );
}

export function Bubbles(p: P) {
  return (
    <svg viewBox="0 0 80 160" {...base} {...p}>
      <g fill="none" stroke="#fff" strokeWidth="3" opacity=".7">
        <circle cx="30" cy="128" r="14" /><circle cx="54" cy="84" r="9" /><circle cx="28" cy="52" r="6" /><circle cx="46" cy="18" r="4" />
      </g>
    </svg>
  );
}

/** Crayon-style drawings for the gallery. */
export function Crayon({ kind, ...p }: P & { kind: 'house' | 'rainbow' | 'rocket' | 'cat' | 'flower' | 'fish' }) {
  const s = { fill: 'none', strokeWidth: 6, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
  return (
    <svg viewBox="0 0 200 160" role="img" {...p}>
      <rect width="200" height="160" fill="#fffdf7" />
      {kind === 'house' && (
        <g {...s}>
          <circle cx="160" cy="34" r="16" stroke="#ffb81f" /><path d="M160 6v-4M160 66v-4M132 34h-4M192 34h4" stroke="#ffb81f" />
          <path d="M50 136V80h70v56z" stroke="#ff7a66" /><path d="M42 82l43-38 43 38" stroke="#8f6be0" />
          <path d="M76 136v-26h18v26" stroke="#2c8fc2" /><path d="M10 140h180" stroke="#43c37a" />
        </g>
      )}
      {kind === 'rainbow' && (
        <g {...s}>
          <path d="M30 124a70 70 0 0 1 140 0" stroke="#ff7a66" /><path d="M46 124a54 54 0 0 1 108 0" stroke="#ffb81f" />
          <path d="M62 124a38 38 0 0 1 76 0" stroke="#43c37a" /><path d="M78 124a22 22 0 0 1 44 0" stroke="#2c8fc2" />
          <path d="M14 126c8-10 20-10 28 0M158 126c8-10 20-10 28 0" stroke="#bfe8f8" />
        </g>
      )}
      {kind === 'rocket' && (
        <g {...s}>
          <path d="M100 18c24 22 28 60 20 92H80c-8-32-4-70 20-92z" stroke="#ff7a66" /><circle cx="100" cy="66" r="10" stroke="#2c8fc2" />
          <path d="M80 92l-20 24 20-4M120 92l20 24-20-4" stroke="#8f6be0" /><path d="M92 126l8 22 8-22" stroke="#ffb81f" />
          <path d="M30 40l2 8M170 70l2 8M36 120l2 8" stroke="#43c37a" />
        </g>
      )}
      {kind === 'cat' && (
        <g {...s}>
          <path d="M50 52l4-34 28 22q18-6 36 0l28-22 4 34q10 40-32 56-12 4-24 0C44 92 40 92 50 52z" stroke="#ff9a4d" />
          <circle cx="82" cy="64" r="3" stroke="#2a2250" /><circle cx="118" cy="64" r="3" stroke="#2a2250" />
          <path d="M94 80h12M100 80v6M90 90q10 6 20 0M60 76h-22M60 88l-20 6M140 76h22M140 88l20 6" stroke="#2a2250" strokeWidth="4" />
        </g>
      )}
      {kind === 'flower' && (
        <g {...s}>
          <path d="M100 148V86" stroke="#43c37a" /><path d="M100 124q-26-4-30-26 24 0 30 26zM100 112q26-4 30-26-24 0-30 26z" stroke="#43c37a" />
          <circle cx="100" cy="56" r="14" stroke="#ffb81f" />
          <circle cx="100" cy="28" r="14" stroke="#ff7a66" /><circle cx="128" cy="56" r="14" stroke="#ff7a66" />
          <circle cx="100" cy="84" r="14" stroke="#ff7a66" /><circle cx="72" cy="56" r="14" stroke="#ff7a66" />
        </g>
      )}
      {kind === 'fish' && (
        <g {...s}>
          <path d="M40 80q36-44 84 0-48 44-84 0zM124 80l34-26v52z" stroke="#2c8fc2" /><circle cx="68" cy="74" r="3" stroke="#2a2250" />
          <circle cx="40" cy="30" r="7" stroke="#bfe8f8" /><circle cx="64" cy="18" r="4" stroke="#bfe8f8" />
          <path d="M20 140q20-14 40 0t40 0 40 0 40 0" stroke="#8f6be0" />
        </g>
      )}
    </svg>
  );
}

/** Small service glyphs, drawn on a colored sheet. */
export type GlyphName = 'heart' | 'thermo' | 'shield' | 'cloud' | 'flower' | 'screen' | 'apple' | 'star';
export function Glyph({ name, ...p }: P & { name: GlyphName }) {
  return (
    <svg viewBox="0 0 64 64" {...base} {...p}>
      {name === 'heart' && <path d="M32 54C8 38 6 20 18 14c7-3 12 1 14 6 2-5 7-9 14-6 12 6 10 24-14 40z" fill="#fffdf7" />}
      {name === 'thermo' && (
        <g>
          <rect x="26" y="8" width="12" height="36" rx="6" fill="#fffdf7" />
          <circle cx="32" cy="46" r="11" fill="#fffdf7" /><circle cx="32" cy="46" r="6" fill="#d9503c" />
          <rect x="30" y="20" width="4" height="26" rx="2" fill="#d9503c" />
        </g>
      )}
      {name === 'shield' && (
        <g>
          <path d="M32 6l20 8v16c0 14-9 22-20 28C21 52 12 44 12 30V14z" fill="#fffdf7" />
          <path d="M32 22v20M22 32h20" stroke="#2c8fc2" strokeWidth="5" strokeLinecap="round" />
        </g>
      )}
      {name === 'cloud' && (
        <g>
          <path d="M18 44a11 11 0 0 1 1-22 14 14 0 0 1 27 3 9.5 9.5 0 0 1 0 19z" fill="#fffdf7" />
          <path d="M22 52l-3 6M34 52l-3 6M46 52l-3 6" stroke="#fffdf7" strokeWidth="4" strokeLinecap="round" />
        </g>
      )}
      {name === 'flower' && (
        <g>
          {[0, 72, 144, 216, 288].map((r) => <circle key={r} cx="32" cy="16" r="10" fill="#fffdf7" transform={`rotate(${r} 32 30)`} />)}
          <circle cx="32" cy="30" r="8" fill="#ffd23f" /><path d="M32 40v18" stroke="#fffdf7" strokeWidth="4" strokeLinecap="round" />
        </g>
      )}
      {name === 'screen' && (
        <g>
          <rect x="6" y="12" width="52" height="34" rx="7" fill="#fffdf7" />
          <polygon points="28,21 28,37 42,29" fill="#2c8fc2" /><rect x="22" y="50" width="20" height="5" rx="2.5" fill="#fffdf7" />
        </g>
      )}
      {name === 'apple' && (
        <g>
          <path d="M32 18c-6-6-20-4-20 12 0 14 10 26 20 26s20-12 20-26c0-16-14-18-20-12z" fill="#fffdf7" />
          <path d="M32 18c0-6 3-10 8-12" stroke="#fffdf7" strokeWidth="4" strokeLinecap="round" fill="none" />
        </g>
      )}
      {name === 'star' && <polygon points="32,5 40,24 60,25 45,38 50,58 32,47 14,58 19,38 4,25 24,24" fill="#fffdf7" />}
    </svg>
  );
}

/** The logo mark: a little paper plane in a coral circle. */
export function LogoMark(p: P) {
  return (
    <svg viewBox="0 0 48 48" {...base} {...p}>
      <circle cx="24" cy="26" r="22" fill="#d9503c" />
      <circle cx="24" cy="23" r="22" fill="#ff7a66" />
      <polygon points="9,24 39,13 27,35" fill="#fffdf7" />
      <polygon points="9,24 39,13 22,26" fill="#ffe3dd" />
      <polygon points="22,26 39,13 27,35" fill="#e8c9c2" />
    </svg>
  );
}


/** Paper bunting across the top of a section. */
export function Bunting(p: P) {
  const colors = ['#ff7a66', '#ffd23f', '#59bfea', '#43c37a', '#8f6be0'];
  const flags = Array.from({ length: 16 }, (_, i) => {
    const t = (i + 0.5) / 16;
    const x = 1200 * t;
    const y = (1 - t) ** 2 * 6 + 2 * (1 - t) * t * 78 + t ** 2 * 6;
    const slope = (2 * (1 - t) * (78 - 6) + 2 * t * (6 - 78)) / 1200 * 1200; // dy/dt
    const ang = (Math.atan2(slope, 1200) * 180) / Math.PI;
    return { x, y, ang, c: colors[i % colors.length] };
  });
  return (
    <svg viewBox="0 0 1200 110" preserveAspectRatio="none" {...base} {...p}>
      <path d="M0 6 Q600 78 1200 6" fill="none" stroke="#2a2250" strokeWidth="2" opacity=".45" />
      {flags.map((f, i) => (
        <g key={i} transform={`translate(${f.x} ${f.y}) rotate(${f.ang})`}>
          <polygon points="-28,0 28,0 0,52" fill="#2a2250" opacity=".15" transform="translate(2 4)" />
          <polygon points="-28,0 28,0 0,52" fill={f.c} />
        </g>
      ))}
    </svg>
  );
}

export function Butterfly({ color = '#ff7a66', ...p }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 80 60" {...base} {...p}>
      <ellipse cx="24" cy="22" rx="20" ry="16" fill={color} transform="rotate(-20 24 22)" />
      <ellipse cx="56" cy="22" rx="20" ry="16" fill={color} transform="rotate(20 56 22)" />
      <ellipse cx="28" cy="42" rx="13" ry="10" fill="#ffd23f" transform="rotate(20 28 42)" />
      <ellipse cx="52" cy="42" rx="13" ry="10" fill="#ffd23f" transform="rotate(-20 52 42)" />
      <rect x="37" y="14" width="6" height="38" rx="3" fill="#2a2250" />
    </svg>
  );
}

export function HotAirBalloon(p: P) {
  return (
    <svg viewBox="0 0 120 170" {...base} {...p}>
      <path d="M60 4C28 4 10 30 14 58c3 22 22 40 34 50h24c12-10 31-28 34-50C110 30 92 4 60 4z" fill="#d9503c" transform="translate(0 5)" />
      <path d="M60 4C28 4 10 30 14 58c3 22 22 40 34 50h24c12-10 31-28 34-50C110 30 92 4 60 4z" fill="#ff7a66" />
      <path d="M60 4C46 18 42 40 48 108h24C78 40 74 18 60 4z" fill="#ffd23f" />
      <path d="M60 4C54 22 56 60 60 108" fill="none" stroke="#e0a800" strokeWidth="3" />
      <path d="M48 108l6 30M72 108l-6 30M60 108v30" stroke="#2a2250" strokeWidth="2" opacity=".6" />
      <rect x="44" y="136" width="32" height="24" rx="5" fill="#a46a3c" />
      <rect x="44" y="136" width="32" height="8" rx="4" fill="#c98b57" />
    </svg>
  );
}
