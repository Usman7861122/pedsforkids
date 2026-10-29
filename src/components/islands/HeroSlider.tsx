import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState, type ReactNode } from 'react';
import { practice } from '../../data/site';
import { Balloon, Bear, Bubbles, Bunny, Cloud, Daisy, Fish, Fox, Hills, Plane, Star, Sun, Tree, Whale } from '../art/Art';

const SLIDE_MS = 7000;

type Slide = {
  id: string;
  title: string;
  text: string;
  tone: 'dark' | 'light';
  bg: string;
  scene: ReactNode;
};

/* ---------- Scenes: three paper worlds ---------- */

function SkyScene() {
  return (
    <>
      <Sun className="absolute right-[2%] top-[14%] w-[clamp(80px,10vw,150px)] bob" />
      <Cloud className="drift absolute left-[46%] top-[14%] hidden w-[clamp(110px,14vw,210px)] md:block" />
      <Cloud className="drift-slow absolute right-[30%] top-[8%] w-[clamp(80px,10vw,160px)] opacity-90" />
      <Cloud className="drift absolute right-[2%] top-[52%] hidden md:block w-[clamp(80px,10vw,150px)] opacity-90" />
      {/* Our two dragons, the clinic mascots */}
      <motion.img
        src="/images/dragon-big.png"
        alt=""
        width={800}
        height={514}
        className="bob absolute right-[-4%] top-[60%] w-[56vw] max-w-none md:right-[5%] md:top-[26%] md:w-[clamp(300px,36vw,600px)]"
        style={{ ['--r' as string]: '-3deg' }}
        initial={{ x: 140, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
      />
      <motion.img
        src="/images/dragon-small.png"
        alt=""
        width={597}
        height={516}
        className="bob absolute right-[40%] top-[56%] hidden w-[clamp(110px,15vw,230px)] md:block"
        style={{ ['--r' as string]: '4deg', animationDelay: '-2s' }}
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
      />
      <Hills className="absolute inset-x-0 bottom-0 h-[30vh] w-full" />
      <Tree className="absolute bottom-[14vh] right-[10%] hidden w-[clamp(36px,5vw,70px)] md:block" />
      <Tree className="absolute bottom-[15vh] right-[16%] hidden w-[clamp(28px,4vw,56px)] md:block" />
      <Daisy className="absolute bottom-[3vh] right-[28%] w-[clamp(28px,4vw,56px)]" />
      <Daisy className="absolute bottom-[1vh] right-[5%] w-[clamp(32px,4.5vw,64px)]" />
      <Daisy className="absolute bottom-[4vh] right-[45%] hidden w-[clamp(28px,4vw,56px)] md:block" />
    </>
  );
}

function MeadowScene() {
  return (
    <>
      <div className="absolute -right-[10vw] top-[8vh] size-[clamp(260px,42vw,620px)] rounded-full bg-sun-soft" />
      <Star className="bob absolute right-[46%] top-[22%] w-[clamp(24px,3vw,44px)]" color="#ff7a66" />
      <Star className="bob absolute right-[8%] top-[20%] w-[clamp(20px,2.5vw,36px)]" color="#8f6be0" style={{ animationDelay: '-2s' }} />
      <Balloon className="bob absolute right-[34%] top-[16%] w-[clamp(40px,5vw,72px)]" color="#8f6be0" shade="#6b47bd" />
      <Balloon className="bob absolute right-[12%] top-[34%] hidden w-[clamp(36px,4vw,60px)] md:block" color="#43c37a" shade="#25995a" style={{ animationDelay: '-3s' }} />
      <Cloud className="drift absolute left-[48%] top-[10%] hidden w-[clamp(100px,12vw,180px)] md:block" />
      <Hills className="absolute inset-x-0 bottom-0 h-[34vh] w-full" colors={['#a6e7bd', '#6bd195', '#3bb06c']} />
      <Bunny className="absolute bottom-[12vh] right-[44%] w-[clamp(100px,14vw,210px)]" />
      <Fox className="absolute bottom-[13vh] right-[6%] w-[clamp(110px,15vw,230px)]" />
      <Bear stetho className="absolute bottom-[6vh] right-[22%] w-[clamp(150px,22vw,340px)]" />
      <Daisy className="absolute bottom-[1vh] right-[40%] w-[clamp(28px,4vw,56px)]" />
      <Daisy className="absolute bottom-[2vh] right-[3%] w-[clamp(28px,4vw,56px)]" />
    </>
  );
}

function SeaScene() {
  return (
    <>
      <div className="absolute right-[10%] top-[14vh] size-[clamp(90px,11vw,170px)] rounded-full bg-sun/90" />
      <Cloud className="drift absolute right-[30%] top-[12vh] w-[clamp(100px,14vw,200px)] opacity-80" />
      <Whale className="bob absolute bottom-[22vh] right-[6%] w-[clamp(220px,36vw,540px)]" />
      <Fish className="bob absolute bottom-[32vh] right-[48%] w-[clamp(44px,6vw,90px)]" />
      <Fish className="bob absolute bottom-[22vh] right-[40%] w-[clamp(36px,5vw,72px)]" color="#ff7a66" shade="#d9503c" style={{ animationDelay: '-2s' }} />
      <Fish className="bob absolute bottom-[40vh] right-[38%] hidden w-[clamp(32px,4vw,60px)] md:block" color="#8f6be0" shade="#6b47bd" style={{ animationDelay: '-3s' }} />
      <Bubbles className="absolute bottom-[20vh] right-[56%] h-[clamp(70px,11vw,150px)]" />
      <Hills className="absolute inset-x-0 bottom-0 h-[30vh] w-full" colors={['#3b8ae0', '#2c73c4', '#1f5aa5']} />
    </>
  );
}

const slides: Slide[] = [
  {
    id: 'sky',
    title: 'Healthy kids start with a happy visit.',
    text: 'Pediatric and adolescent care in Rego Park, Queens. Walk-in care is here when your child feels unwell.',
    tone: 'dark',
    bg: '#9bdcf5',
    scene: <SkyScene />,
  },
  {
    id: 'meadow',
    title: 'Check-ups that feel like play.',
    text: 'Well-child exams, vaccines and growth checks with a gentle team that never rushes you.',
    tone: 'dark',
    bg: '#ffe27a',
    scene: <MeadowScene />,
  },
  {
    id: 'sea',
    title: 'Care in the language you speak.',
    text: 'Dr. Daniela speaks five languages. Video visits are open to families all across the US.',
    tone: 'light',
    bg: '#2670bd',
    scene: <SeaScene />,
  },
];

/* ---------- Animated headline ---------- */

function SplitWords({ text, reduce }: { text: string; reduce: boolean | null }) {
  const words = text.split(' ');
  return (
    <h1 className="h-display" aria-label={text}>
      {words.map((w, i) => (
        <span key={i} aria-hidden="true" className="mr-[0.26em] inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-top">
          <motion.span
            className="inline-block origin-bottom-left"
            initial={reduce ? { opacity: 0 } : { y: '115%', rotate: 7, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { y: '0%', rotate: 0, opacity: 1 }}
            transition={reduce ? { duration: 0.3 } : { type: 'spring', stiffness: 220, damping: 20, delay: 0.25 + i * 0.075 }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

/* ---------- Slider ---------- */

export default function HeroSlider() {
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
  const light = slide.tone === 'light';

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Welcome to Peds 4 Kids"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
      style={{ backgroundColor: slide.bg, transition: 'background-color .8s ease' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Scenes */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.9 }}
          aria-hidden="true"
        >
          {slide.scene}
        </motion.div>
      </AnimatePresence>

      {/* Paper plane glides across on every change: the one big moment */}
      {!reduce && (
        <motion.div
          key={`flight-${index}`}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-20 w-[clamp(60px,7vw,110px)]"
          initial={{ x: '-14vw', y: '72vh', rotate: -6, opacity: 0 }}
          animate={{ x: '112vw', y: ['72vh', '38vh', '14vh'], rotate: [-6, -14, -22], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.8, ease: 'easeInOut', delay: index === 0 ? 0.6 : 0.1 }}
        >
          <Plane />
        </motion.div>
      )}

      {/* Copy */}
      <div className="container-x relative z-10 flex h-full items-start pt-[22vh] md:items-center md:pt-0">
        <div className={`max-w-[36rem] ${light ? 'text-paper' : 'text-ink'}`} aria-live={running ? 'off' : 'polite'}>
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              exit={{ opacity: 0, y: reduce ? 0 : -12, transition: { duration: 0.22 } }}
            >
              <motion.p
                className="mb-4 inline-block rounded-full bg-paper px-4 py-1.5 font-display text-base font-bold shadow-[0_4px_0_rgba(42,34,80,0.18)] sm:text-lg"
                initial={{ opacity: 0, y: reduce ? 0 : -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduce ? 0 : 0.1, duration: 0.4 }}
              >
                {practice.slogan}
              </motion.p>
              <SplitWords text={slide.title} reduce={reduce} />
              <motion.p
                className="mt-5 max-w-[30rem] text-[1.2rem] leading-relaxed"
                initial={{ opacity: 0, y: reduce ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduce ? 0 : 0.95, duration: 0.5 }}
              >
                {slide.text}
              </motion.p>
              <motion.div
                className="mt-7 flex flex-wrap gap-3"
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

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-12 z-20 flex items-center justify-center gap-3 md:bottom-14">
        <button type="button" onClick={() => go(index - 1)} aria-label="Previous slide" className="grid size-11 place-items-center rounded-full bg-paper shadow-[0_4px_0_#cfc7ad]">
          <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="#2a2250" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div className="flex items-center gap-2 rounded-full bg-paper px-3 py-3 shadow-[0_4px_0_#cfc7ad]">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1} of ${slides.length}`}
              aria-current={i === index}
              className={`relative h-3 overflow-hidden rounded-full bg-sky-soft transition-all ${i === index ? 'w-12' : 'w-3'}`}
            >
              {i === index && (
                <span
                  key={`${index}-${running}`}
                  className="absolute inset-0 origin-left rounded-full bg-coral"
                  style={{ animation: running ? `progress ${SLIDE_MS}ms linear forwards` : undefined, transform: running ? undefined : 'scaleX(1)' }}
                />
              )}
            </button>
          ))}
        </div>
        <button type="button" onClick={() => go(index + 1)} aria-label="Next slide" className="grid size-11 place-items-center rounded-full bg-paper shadow-[0_4px_0_#cfc7ad]">
          <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="#2a2250" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        {!reduce && (
          <button type="button" onClick={() => setPaused((p) => !p)} aria-label={paused ? 'Play slideshow' : 'Pause slideshow'} className="grid size-11 place-items-center rounded-full bg-paper shadow-[0_4px_0_#cfc7ad]">
            {paused ? (
              <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true"><path d="M8 5l11 7-11 7z" fill="#2a2250" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true"><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="#2a2250" /></svg>
            )}
          </button>
        )}
      </div>
    </section>
  );
}
