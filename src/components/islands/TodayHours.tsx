import { useEffect, useState } from 'react';

type Props = { hours: { day: string; time: string | null }[] };

export default function TodayHours({ hours }: Props) {
  const [today, setToday] = useState<number | null>(null);
  useEffect(() => setToday(new Date().getDay()), []);

  return (
    <ul className="relative z-[1] mt-3 grid gap-1">
      {hours.map((h, i) => {
        const on = today === i;
        return (
          <li
            key={h.day}
            aria-current={on ? 'date' : undefined}
            className={`flex items-center justify-between gap-4 rounded-xl px-3 py-1.5 ${on ? 'bg-sun font-bold' : ''}`}
          >
            <span>{h.day}{on && <span className="ml-2 text-sm">(today)</span>}</span>
            <span className={h.time ? '' : 'text-ink-soft'}>{h.time ?? 'Closed'}</span>
          </li>
        );
      })}
    </ul>
  );
}
