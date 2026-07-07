import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '@/utils/animations';

export default function Timeline({ items }) {
  return (
    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="relative space-y-6">
      <div className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-slate-200 md:left-1/2" />
      {items.map((item, index) => (
        <motion.div key={item.year} variants={fadeUp} className={`relative grid gap-6 md:grid-cols-2 ${index % 2 ? 'md:text-left' : 'md:text-right'}`}>
          <div className={index % 2 ? 'md:col-start-2' : ''}>
            <div className="ml-10 rounded-card border border-slate-200 bg-white p-6 shadow-soft md:ml-0">
              <p className="font-numbers text-2xl font-extrabold text-primary">{item.year}</p>
              <h3 className="mt-2 font-heading text-xl font-bold text-dark">{item.title}</h3>
              <p className="mt-3 leading-7 text-muted">{item.text}</p>
            </div>
          </div>
          <span className="absolute left-2.5 top-8 h-3 w-3 rounded-full bg-accent ring-8 ring-amber-100 md:left-[calc(50%-0.375rem)]" />
        </motion.div>
      ))}
    </motion.div>
  );
}
