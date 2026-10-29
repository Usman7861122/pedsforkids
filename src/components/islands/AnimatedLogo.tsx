import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

// "peds / for / kids" with the brand colors. One word at a time, each with its own bar on the left.
const words = [
  { text: 'peds', colors: ['#29a0dd', '#7dbd32', '#f5912b', '#f5912b'] },
  { text: 'for', colors: ['#2a2a2e', '#2a2a2e', '#2a2a2e'] },
  { text: 'kids', colors: ['#f4801d', '#6a2c91', '#7dbd32', '#29a0dd'] },
];
const STEP_MS = 1500;

function Word({ i }: { i: number }) {
  const w = words[i];
  return (
    <>
      {w.text.split('').map((ch, k) => (
        <span key={k} style={{ color: w.colors[k] }}>{ch}</span>
      ))}
    </>
  );
}

export default function AnimatedLogo({ size = 'md' }: { size?: 'md' | 'lg' }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % words.length), STEP_MS);
    return () => clearInterval(t);
  }, [reduce]);

  const text = size === 'lg' ? 'text-[3.4rem]' : 'text-[2.7rem] sm:text-[3.2rem]';
  const box = size === 'lg' ? 'h-[4.2rem] w-[10.5rem]' : 'h-[3.4rem] w-[8.6rem] sm:h-[4rem] sm:w-[10rem]';

  // Reduced motion: show the whole logo, stacked and still.
  if (reduce) {
    return (
      <span role="img" aria-label="Peds for Kids" className="flex items-stretch gap-2 font-display font-light leading-[0.95]" style={{ fontSize: size === 'lg' ? '1.9rem' : '1.6rem' }}>
        <span className="w-[3px] rounded-full bg-ink" aria-hidden="true" />
        <span className="flex flex-col"><Word i={0} /><Word i={1} /><Word i={2} /></span>
      </span>
    );
  }

  return (
    <span role="img" aria-label="Peds for Kids" className={`relative flex items-center ${box}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={i}
          aria-hidden="true"
          className="absolute inset-0 flex items-center gap-2.5"
          exit={{ opacity: 0, y: -10, transition: { duration: 0.22 } }}
        >
          <motion.span
            className="h-[78%] w-[3px] origin-top rounded-full bg-ink"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          />
          <span className={`flex font-display font-light leading-none tracking-tight ${text}`}>
            {words[i].text.split('').map((ch, k) => (
              <motion.span
                key={k}
                style={{ color: words[i].colors[k] }}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 380, damping: 20, delay: 0.1 + k * 0.07 }}
              >
                {ch}
              </motion.span>
            ))}
          </span>
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
