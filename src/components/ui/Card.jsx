import { motion } from 'framer-motion';
import { fadeUp } from '@/utils/animations';
import { cn } from '@/utils/cn';

export default function Card({ children, className }) {
  return (
    <motion.article
      variants={fadeUp}
      className={cn('rounded-card border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-premium', className)}
    >
      {children}
    </motion.article>
  );
}
