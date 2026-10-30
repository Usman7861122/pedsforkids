import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { practice } from '../../data/site';
import { Plane } from '../art/Art';

const SLIDE_MS = 7000;

type Slide = {
  id: string;
  tab: string;
  lead: string; // first part of the headline (white)
  mark: string; // last part of the headline (yellow, underlined)
  text: string;
  src: string;
  alt: string;
  pos: string;
};

const slides: Slide[] = [
  {
    id: 'play',
    tab: 'Happy visits',
    lead: 'Healthy kids start with a',
    mark: 'happy visit.',
    text: 'Pediatric and adolescent care in Rego Park, Queens. Walk-in care is here when your child feels unwell.',
    src: '/images/hero-play.jpg',
    alt: 'Two children playing with a wooden fishing game on a colorful mat',
    pos: '62% 60%',
  },
  {
    id: 'toys',
    tab: 'Gentle check-ups',
    lead: 'Check-ups that',
    mark: 'feel like play.',
    text: 'Well-child exams, vaccines and growth checks with a gentle team that never rushes you.',
    src: '/images/hero-toys.jpg',
    alt: 'A little girl with pigtail buns playing with wooden toys on a soft rug',
    pos: '60% 40%',
  },
  {
    id: 'park',
    tab: 'Your language',
    lead: 'Care in the language',
    mark: 'you speak.',
    text: 'Dr. Daniela speaks five languages. Video visits are open to families all across the US.',
    src: '/images/hero-park.jpg',
    alt: 'A smiling toddler running on a playground holding a green ball',
    pos: '60% 40%',
  },
];

const CSS = `
.hs2{position:relative;height:100svh;min-height:640px;width:100%;overflow:hidden;background:#2a2250}
.hs2-layer{position:absolute;inset:0}
.hs2-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.hs2-shade{position:absolute;inset:0;z-index:1;pointer-events:none;background:linear-gradient(to top,rgba(26,20,60,.82) 0%,rgba(26,20,60,.55) 28%,rgba(26,20,60,.12) 52%,rgba(26,20,60,0) 66%)}
.hs2-plane{position:absolute;left:0;top:0;z-index:20;width:clamp(60px,7vw,110px);pointer-events:none}
.hs2-plane svg{display:block;width:100%;height:auto}
.hs2-copy{position:relative;z-index:10;display:flex;height:100%;align-items:flex-end;padding-bottom:16vh}
.hs2-box{max-width:44rem;color:#fff}
.hs2-pill{display:inline-flex;align-items:center;gap:.5rem;margin:0 0 1rem;border-radius:999px;background:#ffe88f;padding:.375rem 1rem;font-family:var(--font-display);font-weight:700;font-size:1.0625rem;line-height:1.3;color:#2a2250;box-shadow:0 4px 0 rgba(42,34,80,.3)}
.hs2-pill svg{width:1rem;height:1rem;flex:none}
.hs2-h1{margin:0;font-family:var(--font-display);font-weight:800;line-height:1.02;letter-spacing:-.01em;color:#fff;font-size:clamp(2.4rem,5.2vw,4.6rem);text-shadow:0 2px 18px rgba(20,14,50,.45);text-wrap:balance}
.hs2-word{display:inline-block;overflow:hidden;padding-bottom:.14em;margin-bottom:-.14em;margin-right:.24em;vertical-align:top}
.hs2-word>span{display:inline-block;transform-origin:bottom left}
.hs2-p{margin:1rem 0 0;max-width:34rem;font-size:clamp(1.1rem,1.6vw,1.25rem);line-height:1.6;color:rgba(255,255,255,.95);text-shadow:0 1px 10px rgba(20,14,50,.5)}
.hs2-cta{margin-top:1.5rem;display:flex;flex-wrap:wrap;gap:.75rem}
.hs2-bar{position:absolute;left:0;right:0;bottom:2.25rem;z-index:20}
.hs2-barin{display:flex;align-items:flex-end;justify-content:space-between;gap:1.5rem}
.hs2-tabs{display:flex;flex:1;gap:1.25rem;max-width:36rem;margin:0;padding:0;list-style:none}
.hs2-tabs li{flex:1}
.hs2-tab{display:block;width:100%;padding:0;border:0;background:none;text-align:left;cursor:pointer}
.hs2-tabl{display:block;font-weight:700;font-size:1rem;color:rgba(255,255,255,.65);transition:color .2s}
.hs2-tab:hover .hs2-tabl,.hs2-tabl.on{color:#fff}
.hs2-num{margin-right:.4rem;font-family:var(--font-display)}
.hs2-track{display:block;margin-top:.5rem;height:6px;overflow:hidden;border-radius:999px;background:rgba(255,255,255,.3)}
.hs2-fill{display:block;height:100%;transform-origin:left;border-radius:999px;background:#ffd23f}
.hs2-btns{display:flex;gap:.625rem}
.hs2-round{display:grid;place-items:center;width:2.75rem;height:2.75rem;padding:0;border:0;border-radius:999px;background:rgba(255,255,255,.92);cursor:pointer;box-shadow:0 4px 0 rgba(42,34,80,.25)}
.hs2-round svg{width:1.25rem;height:1.25rem}
@media (max-width:767px){.hs2-copy{padding-bottom:19vh}.hs2-bar{bottom:1.5rem}.hs2-tabs{gap:.75rem}}
@media (max-width:639px){.hs2-name,.hs2-pause{display:none}}
`;

/* ---------- Animated headline ---------- */

function Headline({ lead, mark, reduce }: { lead: string; mark: string; reduce: boolean | null }) {
  const words = [...lead.split(' ').map((w) => ({ w, m: false })), ...mark.split(' ').map((w) => ({ w, m: true }))];
  return (
    <h1 className="hs2-h1" aria-label={`${lead} ${mark}`}>
      {words.map((o, i) => (
        <span key={i} aria-hidden="true" className="hs2-word">
          <motion.span
            style={o.m ? { color: '#ffd23f' } : undefined}
            initial={reduce ? { opacity: 0 } : { y: '115%', rotate: 7, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { y: '0%', rotate: 0, opacity: 1 }}
            transition={reduce ? { duration: 0.3 } : { type: 'spring', stiffness: 220, damping: 20, delay: 0.25 + i * 0.07 }}
          >
            {o.w}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

/* ---------- Slider ---------- */

export default function HeroSlider2() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hover, setHover] = useState(false);
  const slide = slides[index];
  const running = !paused && !hover && !reduce;

  useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [index, running]);

  const go = (n: number) => setIndex((n + slides.length) % slides.length);
  return (
    <section
      aria-roledescription="carousel"
      aria-label="Welcome to Peds For Kids"
      className="hs2"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <style>{CSS}</style>

      {/* Full-screen photo */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.id}
          className="hs2-layer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.9 }}
          aria-hidden="true"
        >
          <motion.img
            src={slide.src}
            alt={slide.alt}
            width={1600}
            height={1066}
            className="hs2-img"
            style={{ objectPosition: slide.pos }}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: 'easeOut' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Light shade only at the bottom, so faces stay clean */}
      <div className="hs2-shade" aria-hidden="true" />

      {/* Paper plane glides across on every change */}
      {!reduce && (
        <motion.div
          key={`flight-${index}`}
          aria-hidden="true"
          className="hs2-plane"
          initial={{ x: '-14vw', y: '72vh', rotate: -6, opacity: 0 }}
          animate={{ x: '112vw', y: ['72vh', '38vh', '14vh'], rotate: [-6, -14, -22], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.8, ease: 'easeInOut', delay: index === 0 ? 0.6 : 0.1 }}
        >
          <Plane />
        </motion.div>
      )}

      {/* Copy: bottom left */}
      <div className="container-x hs2-copy">
        <div className="hs2-box" aria-live={running ? 'off' : 'polite'}>
          <AnimatePresence mode="wait">
            <motion.div key={slide.id} exit={{ opacity: 0, y: reduce ? 0 : -12, transition: { duration: 0.22 } }}>
              <motion.p
                className="hs2-pill"
                initial={{ opacity: 0, y: reduce ? 0 : -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduce ? 0 : 0.1, duration: 0.4 }}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-4.6-9.3-9.2C1 8.2 3 4.5 6.6 4.5c2 0 3.7 1.2 4.6 2.8h1.6c.9-1.6 2.6-2.8 4.6-2.8 3.6 0 5.6 3.7 3.9 7.3C19 16.4 12 21 12 21Z" fill="#ff7a66" /></svg>
                {practice.slogan}
              </motion.p>
              <Headline lead={slide.lead} mark={slide.mark} reduce={reduce} />
              <motion.p
                className="hs2-p"
                initial={{ opacity: 0, y: reduce ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduce ? 0 : 0.95, duration: 0.5 }}
              >
                {slide.text}
              </motion.p>
              <motion.div
                className="hs2-cta"
                initial={{ opacity: 0, scale: reduce ? 1 : 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={reduce ? { duration: 0.3 } : { type: 'spring', stiffness: 300, damping: 18, delay: 1.15 }}
              >
                <a href={practice.bookUrl} className="btn">Book a visit</a>
                <a href={practice.phoneHref} className="btn btn-paper">Call {practice.phone}</a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom bar: numbered tabs + arrows */}
      <div className="hs2-bar">
        <div className="container-x hs2-barin">
          <ol className="hs2-tabs">
            {slides.map((s, i) => (
              <li key={s.id}>
                <button type="button" onClick={() => go(i)} aria-label={`Go to slide ${i + 1} of ${slides.length}: ${s.tab}`} aria-current={i === index} className="hs2-tab">
                  <span className={`hs2-tabl${i === index ? ' on' : ''}`}>
                    <span className="hs2-num">0{i + 1}</span>
                    <span className="hs2-name">{s.tab}</span>
                  </span>
                  <span className="hs2-track">
                    {i === index && (
                      <span
                        key={`${index}-${running}`}
                        className="hs2-fill"
                        style={{ animation: running ? `progress ${SLIDE_MS}ms linear forwards` : undefined, transform: running ? undefined : 'scaleX(1)' }}
                      />
                    )}
                  </span>
                </button>
              </li>
            ))}
          </ol>
          <div className="hs2-btns">
            <button type="button" onClick={() => go(index - 1)} aria-label="Previous slide" className="hs2-round">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="#2a2250" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button type="button" onClick={() => go(index + 1)} aria-label="Next slide" className="hs2-round">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="#2a2250" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            {!reduce && (
              <button type="button" onClick={() => setPaused((p) => !p)} aria-label={paused ? 'Play slideshow' : 'Pause slideshow'} className="hs2-round hs2-pause">
                {paused ? (
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5l11 7-11 7z" fill="#2a2250" /></svg>
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="#2a2250" /></svg>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
