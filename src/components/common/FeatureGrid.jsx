import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import IconBox from '@/components/ui/IconBox';
import { stagger, viewport } from '@/utils/animations';

export default function FeatureGrid({ items }) {
  return (
    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <Card key={item.title}>
          <IconBox icon={item.icon} />
          <h3 className="font-heading text-xl font-bold text-dark">{item.title}</h3>
          <p className="mt-3 leading-7 text-muted">{item.text}</p>
        </Card>
      ))}
    </motion.div>
  );
}
