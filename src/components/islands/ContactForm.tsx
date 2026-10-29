import { useState, type FormEvent } from 'react';
import { Bear } from '../art/Art';

const reasons = ['Sick visit', 'Well-child exam', 'Vaccines', 'Video visit', 'Something else'];

const field =
  'relative z-[1] mt-1.5 w-full rounded-2xl bg-paper px-4 py-3 shadow-[0_3px_0_#e3c453] placeholder:text-ink-soft/60 focus:outline-none focus-visible:ring-4 focus-visible:ring-grape/50';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: connect to the practice's form handler or email service.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="relative z-[1] mt-6 grid place-items-center py-8 text-center" role="status">
        <Bear stetho className="w-32" />
        <p className="mt-4 font-display text-2xl font-bold">Thank you!</p>
        <p className="mt-1 max-w-[30ch]">We got your message and will call you back soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative z-[1] mt-6 grid gap-4">
      <label className="block font-bold">
        Your name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block font-bold">
          Phone number
          <input name="phone" type="tel" required autoComplete="tel" className={field} />
        </label>
        <label className="block font-bold">
          Child's age
          <input name="age" inputMode="numeric" placeholder="For example, 4 years" className={field} />
        </label>
      </div>
      <label className="block font-bold">
        What do you need?
        <select name="reason" className={field} defaultValue={reasons[0]}>
          {reasons.map((r) => <option key={r}>{r}</option>)}
        </select>
      </label>
      <label className="block font-bold">
        Message
        <textarea name="message" rows={4} className={field} />
      </label>
      <button type="submit" className="btn justify-self-start">Send message</button>
      <p className="text-sm text-ink-soft">Please do not share private health details here. For an emergency, call 911.</p>
    </form>
  );
}
