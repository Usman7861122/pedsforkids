import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react';
import { nav, practice } from '../../data/site';
import { Bear, Glyph, type GlyphName } from '../art/Art';
import { services } from '../../data/site';

type MenuKey = 'about' | 'services' | 'families';
const order: MenuKey[] = ['about', 'services', 'families'];
const widths: Record<MenuKey, number> = { about: 400, services: 620, families: 400 };

const chip: Record<string, string> = {
  sun: 'bg-sun',
  coral: 'bg-coral',
  sky: 'bg-sky',
  meadow: 'bg-meadow',
  grape: 'bg-grape',
};

const glyphFor = (label: string): GlyphName => (services.find((s) => s.title === label)?.glyph ?? 'star') as GlyphName;

function MenuList({ menu }: { menu: MenuKey }) {
  const data = nav[menu];
  if (menu === 'services') {
    return (
      <div className="p-4">
        <ul className="grid grid-cols-2 gap-1">
          {data.items.map((it) => (
            <li key={it.href}>
              <a href={it.href} className="group flex items-center gap-3 rounded-2xl p-2.5 transition-colors hover:bg-cloud">
                <span className={`grid size-10 shrink-0 place-items-center rounded-xl ${chip[it.color]} transition-transform group-hover:-rotate-6 group-hover:scale-110`}>
                  <Glyph name={glyphFor(it.label)} className="size-6" />
                </span>
                <span className="font-display text-[1.05rem] font-bold leading-tight">{it.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <a href="/services" className="mt-2 flex items-center justify-between rounded-2xl bg-sun-soft px-4 py-3 font-display font-bold">
          See all services
          <span aria-hidden="true">→</span>
        </a>
      </div>
    );
  }
  return (
    <div className="relative p-4">
      <ul className="space-y-1">
        {data.items.map((it) => (
          <li key={it.href}>
            <a href={it.href} className="group flex items-center gap-3 rounded-2xl p-2.5 transition-colors hover:bg-cloud">
              <span className={`size-10 shrink-0 rounded-xl ${chip[it.color]} transition-transform group-hover:-rotate-6 group-hover:scale-110`} aria-hidden="true" />
              <span>
                <span className="block font-display text-[1.05rem] font-bold leading-tight">{it.label}</span>
                {it.text && <span className="block text-sm text-ink-soft">{it.text}</span>}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Caret({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 12 8" className={`size-3 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true">
      <path d="M1 1.5l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
    <path d="M6.6 3h3l1.4 4-2 1.4a11 11 0 0 0 6.6 6.6l1.4-2 4 1.4v3a2 2 0 0 1-2 2A16 16 0 0 1 4.6 5a2 2 0 0 1 2-2z" fill="currentColor" />
  </svg>
);

export default function SiteHeader() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<MenuKey | null>(null);
  const [drawer, setDrawer] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<MenuKey | null>(null);
  const [geo, setGeo] = useState({ x: 0, w: widths.about });
  const [height, setHeight] = useState(0);
  const dir = useRef(1);
  const prev = useRef<MenuKey | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const triggers = useRef<Partial<Record<MenuKey, HTMLButtonElement | null>>>({});
  const contentRef = useRef<HTMLDivElement>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(null), 160);
  };

  const openMenu = useCallback((key: MenuKey) => {
    cancelClose();
    if (prev.current) dir.current = order.indexOf(key) >= order.indexOf(prev.current) ? 1 : -1;
    const bar = barRef.current;
    const btn = triggers.current[key];
    if (bar && btn) {
      const b = bar.getBoundingClientRect();
      const t = btn.getBoundingClientRect();
      const w = Math.min(widths[key], b.width);
      const x = Math.max(0, Math.min(t.left - b.left + t.width / 2 - w / 2, b.width - w));
      setGeo({ x, w });
    }
    prev.current = key;
    setOpen(key);
  }, []);

  // Measure the active menu so the panel can animate its height smoothly.
  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    setHeight(el.offsetHeight);
    const ro = new ResizeObserver(() => setHeight(el.offsetHeight));
    ro.observe(el);
    return () => ro.disconnect();
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(null);
        setDrawer(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawer]);

  useEffect(() => {
    if (!open) prev.current = null;
  }, [open]);

  const spring = reduce ? { duration: 0 } : { type: 'spring' as const, stiffness: 420, damping: 36 };
  const sheetVars = { '--sheet': '#fffdf7', '--sheet-shade': '#cfc7ad' } as CSSProperties;

  return (
    <header
      className="fixed inset-x-0 top-3 z-40"
      onMouseLeave={scheduleClose}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(null);
      }}
    >
      <div className="container-x">
        <div ref={barRef} className="relative">
          <div className="sheet flex items-center justify-between gap-3 rounded-[2rem] py-2 pl-4 pr-2.5" style={sheetVars}>
            <a href="/" className="flex items-center gap-2.5" aria-label="Peds 4 Kids, home">
              <img src="/images/logo.png" alt="Peds for Kids" width={121} height={120} className="h-14 w-auto sm:h-16" />
            </a>

            <nav aria-label="Main" className="hidden lg:block">
              <ul className="flex items-center gap-1 font-display text-[1.05rem] font-bold">
                <li>
                  <a href="/" className="block rounded-full px-4 py-2 transition-colors hover:bg-cloud">Home</a>
                </li>
                {order.map((key) => (
                  <li key={key}>
                    <button
                      ref={(el) => {
                        triggers.current[key] = el;
                      }}
                      type="button"
                      aria-expanded={open === key}
                      aria-controls={`menu-${key}`}
                      onMouseEnter={() => openMenu(key)}
                      onFocus={() => openMenu(key)}
                      onClick={() => (open === key ? setOpen(null) : openMenu(key))}
                      className={`flex items-center gap-1.5 rounded-full px-4 py-2 transition-colors ${open === key ? 'bg-sun-soft' : 'hover:bg-cloud'}`}
                    >
                      {nav[key].label}
                      <Caret open={open === key} />
                    </button>
                  </li>
                ))}
                <li>
                  <a href="#contact" className="block rounded-full px-4 py-2 transition-colors hover:bg-cloud">Contact</a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={practice.phoneHref}
                className="hidden items-center gap-2 rounded-full px-3 py-2.5 font-display font-bold transition-colors hover:bg-cloud md:flex"
                aria-label={`Call ${practice.phone}`}
              >
                <PhoneIcon />
                <span className="hidden xl:inline">{practice.phone}</span>
              </a>
              <a href={practice.bookUrl} className="btn whitespace-nowrap !px-4 !py-2.5 !text-[0.95rem] sm:!px-5 sm:!py-3 sm:!text-base">Book a visit</a>
              <button
                type="button"
                className="grid size-11 place-items-center rounded-full bg-sky-soft lg:hidden"
                aria-label="Open menu"
                aria-expanded={drawer}
                onClick={() => setDrawer(true)}
              >
                <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* One panel that slides and resizes between menus */}
          <div className="pointer-events-none absolute left-0 top-full hidden w-full pt-3 lg:block">
            <AnimatePresence>
              {open && (
                <motion.div
                  key="panel"
                  id={`menu-${open}`}
                  className="sheet pointer-events-auto relative overflow-hidden"
                  style={sheetVars}
                  initial={{ opacity: 0, y: -10, scale: 0.97, x: geo.x, width: geo.w, height }}
                  animate={{ opacity: 1, y: 0, scale: 1, x: geo.x, width: geo.w, height }}
                  exit={{ opacity: 0, y: -10, scale: 0.97, transition: { duration: reduce ? 0 : 0.14 } }}
                  transition={spring}
                  onMouseEnter={cancelClose}
                >
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                      key={open}
                      ref={contentRef}
                      initial={{ opacity: 0, x: reduce ? 0 : dir.current * 28 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: reduce ? 0 : dir.current * -28 }}
                      transition={{ duration: reduce ? 0 : 0.2 }}
                      style={{ width: geo.w }}
                      className="absolute left-0 top-0"
                    >
                      <MenuList menu={open} />
                      {open === 'about' && (
                        <Bear stetho className="pointer-events-none absolute -bottom-3 right-2 w-16 rotate-6 opacity-95" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawer && (
          <motion.div
            className="fixed inset-0 z-50 overflow-y-auto bg-cloud"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0, y: reduce ? 0 : -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -24 }}
            transition={{ duration: reduce ? 0 : 0.22 }}
          >
            <div className="container-x py-4">
              <div className="flex items-center justify-between">
                <a href="/" className="flex items-center gap-2.5">
                  <img src="/images/logo.png" alt="Peds for Kids" width={121} height={120} className="h-14 w-auto" />
                </a>
                <button type="button" onClick={() => setDrawer(false)} aria-label="Close menu" className="grid size-11 place-items-center rounded-full bg-sun">
                  <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <ul className="mt-6 space-y-3 font-display text-xl font-bold">
                <li><a href="/" className="sheet block px-5 py-4" onClick={() => setDrawer(false)}>Home</a></li>
                {order.map((key) => (
                  <li key={key} className="sheet px-5 py-1">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-3"
                      aria-expanded={mobileGroup === key}
                      onClick={() => setMobileGroup(mobileGroup === key ? null : key)}
                    >
                      {nav[key].label}
                      <Caret open={mobileGroup === key} />
                    </button>
                    {mobileGroup === key && (
                      <ul className="grid gap-1 pb-3 font-body text-base">
                        {nav[key].items.map((it) => (
                          <li key={it.href}>
                            <a href={it.href} onClick={() => setDrawer(false)} className="flex items-center gap-3 rounded-xl p-2 font-bold hover:bg-cloud">
                              <span className={`size-6 rounded-lg ${chip[it.color]}`} aria-hidden="true" />
                              {it.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                <li><a href="#contact" className="sheet block px-5 py-4" onClick={() => setDrawer(false)}>Contact</a></li>
              </ul>

              <div className="mt-6 grid gap-3">
                <a href={practice.bookUrl} className="btn">Book a visit</a>
                <a href={practice.phoneHref} className="btn btn-paper">Call {practice.phone}</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
