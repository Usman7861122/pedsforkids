import { useCallback, useEffect, useId, useRef, useState, type SyntheticEvent } from 'react';
import { appointmentEndpoint, practice } from '../../data/site';

// Same fields and dropdown options as the clinic's appointment form (all required).
const hearOptions = ['Insurance', 'Google/Internet', 'Family/Friend', 'Doctor Referral', 'Social Media'];

const MIN_FILL_MS = 3000;

type Status = 'idle' | 'sending' | 'done' | 'error';

const field =
  'w-full rounded-xl border-2 border-ink/20 bg-white px-4 py-3 text-base text-ink placeholder:text-ink-soft focus:border-ink focus:outline-none';

export default function BookModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const openedAt = useRef(0); // when the pop up opened (for the too-fast check)
  const titleId = useId();

  const close = useCallback(() => {
    setOpen(false);
    lastFocus.current?.focus();
  }, []);

  // Any link with data-book opens the pop up. Without JavaScript it goes to /contact/.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.('a[data-book]');
      if (!link) return;
      e.preventDefault();
      lastFocus.current = link as HTMLElement;
      setStatus('idle');
      openedAt.current = Date.now();
      setOpen(true);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // Lock page scroll, move focus into the pop up, close with Esc, keep Tab inside.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const box = dialogRef.current;
    box?.querySelector<HTMLElement>('input,select,textarea,button')?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return close();
      if (e.key !== 'Tab' || !box) return;
      const items = box.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),input:not([type=hidden]),select,textarea');
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  async function onSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Two bot signs: the hidden field is filled, or the form was sent in under 3 seconds.
    // Either way we pretend it worked, so the bot learns nothing, and we send nothing.
    const elapsed = Date.now() - openedAt.current;
    if (data.get('company') || elapsed < MIN_FILL_MS) { setStatus('done'); return; }
    data.set('elapsed_ms', String(elapsed));
    if (!appointmentEndpoint) { setStatus('error'); return; }
    setStatus('sending');
    try {
      const res = await fetch(appointmentEndpoint, {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(data.entries())),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus('done');
    } catch {
      setStatus('error');
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto p-4" onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}>
      <div className="fixed inset-0 bg-ink/60" aria-hidden="true" />
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={titleId} className="relative z-[1] my-auto w-full max-w-lg rounded-[1.75rem] bg-paper p-6 shadow-2xl sm:p-8">
        <button type="button" onClick={close} aria-label="Close" className="absolute right-3 top-3 grid size-12 place-items-center rounded-full text-2xl hover:bg-cloud">
          <span aria-hidden="true">×</span>
        </button>
        <h2 id={titleId} className="pr-10 text-3xl">Book a visit</h2>
        <p className="mt-2 text-ink-soft">Fill in the form and we will call you. Or call us at <a href={practice.phoneHref} className="whitespace-nowrap font-bold underline">{practice.phone}</a>.</p>

        {status === 'done' ? (
          <div role="status" className="mt-6 rounded-2xl bg-sun-soft p-6 text-center">
            <p className="font-display text-3xl font-extrabold">Thank you!</p>
            <p className="mt-2 text-lg font-bold">We got your request. Our team will call you soon to book your visit.</p>
            <button type="button" onClick={close} className="btn mt-5 inline-flex">Close</button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-6 grid gap-4" noValidate={false}>
            <div aria-hidden="true" className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label>Company <input type="text" name="company" tabIndex={-1} autoComplete="off" /></label>
            </div>
            <label className="grid gap-1.5">
              <span className="sr-only">Name</span>
              <input type="text" name="name" required placeholder="Name" autoComplete="name" className={field} />
            </label>
            <label className="grid gap-1.5">
              <span className="sr-only">Email</span>
              <input type="email" name="email" required placeholder="Email" autoComplete="email" className={field} />
            </label>
            <label className="grid gap-1.5">
              <span className="sr-only">Phone Number</span>
              <input type="tel" name="phone" required placeholder="Phone Number" autoComplete="tel" className={field} />
            </label>
            <label className="grid gap-1.5">
              <span className="sr-only">Hear From</span>
              <select name="hear_from" required defaultValue="" className={field}>
                <option value="" disabled>How did you hear about us?</option>
                {hearOptions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </label>
            <label className="grid gap-1.5">
              <span className="sr-only">Insurance details</span>
              <textarea name="insurance_details" required rows={4} placeholder="Add Your Insurance Details Here" className={field} />
            </label>
            {status === 'error' && (
              <p role="alert" className="rounded-xl bg-coral/20 p-3 font-bold">
                Sorry, we could not send your request. Please call us at <a href={practice.phoneHref} className="whitespace-nowrap underline">{practice.phone}</a>.
              </p>
            )}
            <button type="submit" disabled={status === 'sending'} className="btn justify-self-start">
              {status === 'sending' ? 'Sending…' : 'Request Appointment'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
