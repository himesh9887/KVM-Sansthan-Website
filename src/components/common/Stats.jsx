import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { stats } from '@/data/content';
import { fadeUp, stagger, viewport } from '@/utils/animations';

export default function Stats() {
  return (
    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <motion.div key={stat.label} variants={fadeUp} className="rounded-card border border-slate-200 bg-white p-6 text-center shadow-soft">
          <p className="font-numbers text-4xl font-extrabold text-primary">
            <CountUp end={stat.value} duration={2.2} enableScrollSpy scrollSpyOnce />
            {stat.suffix}
          </p>
          <p className="mt-2 font-semibold text-muted">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
