import { motion } from 'framer-motion';
import Container from './Container';

export default function PageBanner({ title, text, image = '/images/campus-building.jpeg' }) {
  return (
    <section className="relative isolate overflow-hidden pt-40 text-white">
      <img src={image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" loading="eager" />
      <div className="absolute inset-0 -z-10 bg-slate-950/68" />
      <Container className="pb-20 md:pb-28">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="max-w-3xl">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-amber-300">Karam Manovikas Sansthan</p>
          <h1 className="font-heading text-4xl font-extrabold md:text-6xl">{title}</h1>
          {text && <p className="mt-6 text-lg leading-8 text-white/86">{text}</p>}
        </motion.div>
      </Container>
    </section>
  );
}
