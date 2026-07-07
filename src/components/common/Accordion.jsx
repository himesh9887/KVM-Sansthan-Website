import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={item.q} className="rounded-card border border-slate-200 bg-white shadow-soft">
          <button
            type="button"
            onClick={() => setOpen(open === index ? -1 : index)}
            className="focus-ring flex w-full items-center justify-between gap-4 rounded-lg p-5 text-left font-bold text-dark"
            aria-expanded={open === index}
          >
            {item.q}
            <ChevronDown className={cn('shrink-0 transition', open === index && 'rotate-180')} size={20} />
          </button>
          <div className={cn('grid transition-all duration-300', open === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
            <div className="overflow-hidden">
              <p className="px-5 pb-5 leading-7 text-muted">{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
