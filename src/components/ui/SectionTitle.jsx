import { motion } from 'framer-motion';
import { fadeUp, viewport } from '@/utils/animations';
import { cn } from '@/utils/cn';

export default function SectionTitle({ eyebrow, title, text, align = 'center', className, titleClassName, textClassName }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ duration: 0.55 }}
      className={cn('mx-auto mb-10 max-w-3xl', align === 'center' ? 'text-center' : 'text-left', className)}
    >
      {eyebrow && <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.16em] text-secondary">{eyebrow}</p>}
      <h2 className={cn('font-heading text-3xl font-extrabold leading-tight text-dark md:text-4xl lg:text-5xl', titleClassName)}>{title}</h2>
      {text && <p className={cn('mt-5 text-base leading-8 text-muted md:text-lg', textClassName)}>{text}</p>}
    </motion.div>
  );
}
