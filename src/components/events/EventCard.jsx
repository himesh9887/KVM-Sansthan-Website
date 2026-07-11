import { CalendarDays } from 'lucide-react';
import Card from '@/components/ui/Card';

export default function EventCard({ event }) {
  return (
    <Card className="overflow-hidden p-0">
      <img src={event.image} alt={event.title} loading="lazy" decoding="async" width="1200" height="675" className="h-56 w-full object-cover" />
      <div className="p-6">
        <p className="inline-flex items-center gap-2 rounded-lg bg-amber-50 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.14em] text-amber-700">
          <CalendarDays size={15} /> {event.date}
        </p>
        <h3 className="mt-4 font-heading text-2xl font-bold text-dark">{event.title}</h3>
        <p className="mt-3 leading-7 text-muted">{event.text}</p>
      </div>
    </Card>
  );
}

