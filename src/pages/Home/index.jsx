import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/common/SEO';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import FeatureGrid from '@/components/common/FeatureGrid';
import Stats from '@/components/common/Stats';
import GalleryGrid from '@/components/common/GalleryGrid';
import Accordion from '@/components/common/Accordion';
import EventCard from '@/components/events/EventCard';
import { events, facilities, faqs, programs, therapies, whyChoose } from '@/data/content';
import { fadeLeft, fadeRight, stagger, viewport } from '@/utils/animations';

export default function Home() {
  return (
    <>
      <SEO title="Special School & Teacher Training Institute" description="Karam Manovikas Sansthan is a special school, NGO and professional teacher training institute in Alwar, Rajasthan." />
      <Hero />
      <section className="section-pad bg-background"><Container><Stats /></Container></section>
      <section className="section-pad bg-white">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewport} transition={{ duration: 0.6 }}>
            <SectionTitle align="left" eyebrow="About the Institute" title="A trusted place for special education, therapy and teacher preparation." text="Since 2001, Karam Manovikas Sansthan has supported children with special needs through structured learning, therapy, life-skills training and family guidance." />
            <div className="grid gap-3 sm:grid-cols-2">
              {['Individual Education Plan', 'Parents Support', 'Vocational Skills', 'RCI-Oriented Courses'].map((item) => <p key={item} className="flex items-center gap-2 font-bold text-slate-700"><CheckCircle2 className="text-success" size={20} />{item}</p>)}
            </div>
            <Button to="/about" className="mt-8">Know More</Button>
          </motion.div>
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport} className="grid grid-cols-2 gap-4">
            <img src="/images/award-ceremony.jpeg" alt="Award ceremony at Karam Manovikas Sansthan" className="h-72 w-full rounded-card object-cover shadow-soft" loading="lazy" />
            <img src="/images/student-performance.jpeg" alt="Students performing at school event" className="mt-10 h-72 w-full rounded-card object-cover shadow-soft" loading="lazy" />
          </motion.div>
        </Container>
      </section>
      <section className="section-pad bg-background">
        <Container>
          <SectionTitle eyebrow="Programs" title="Education and support designed for independent lives." text="A complete ecosystem for special school learning, therapeutic intervention, vocational readiness and teacher training." />
          <FeatureGrid items={programs} />
        </Container>
      </section>
      <section className="section-pad bg-white"><Container><SectionTitle eyebrow="Why Choose Us" title="Care with structure, warmth and accountability." /><FeatureGrid items={whyChoose} /></Container></section>
      <section className="section-pad bg-background"><Container><SectionTitle eyebrow="Therapy" title="Multidisciplinary interventions for meaningful progress." /><FeatureGrid items={therapies} /></Container></section>
      <section className="section-pad bg-white"><Container><SectionTitle eyebrow="Facilities" title="A safe, accessible and learning-friendly campus." /><FeatureGrid items={facilities} /></Container></section>
      <section className="section-pad bg-background"><Container><SectionTitle eyebrow="Gallery" title="Moments from campus life." /><GalleryGrid preview /><div className="mt-8 text-center"><Button to="/gallery">View Gallery</Button></div></Container></section>
      <section className="section-pad bg-white">
        <Container>
          <SectionTitle eyebrow="Events" title="Celebrations, awareness and achievements." />
          <div className="grid gap-6 lg:grid-cols-3">{events.map((event) => <EventCard key={event.title} event={event} />)}</div>
        </Container>
      </section>
      <section className="section-pad bg-background"><Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><SectionTitle align="left" eyebrow="FAQ" title="Questions families often ask." /><Accordion items={faqs} /></Container></section>
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden pt-32 text-white">
      <img src="/images/campus-building.jpeg" alt="Karam Manovikas Sansthan campus" className="absolute inset-0 -z-20 h-full w-full object-cover" loading="eager" />
      <div className="absolute inset-0 -z-10 bg-slate-950/62" />
      <Container className="grid min-h-[calc(92vh-8rem)] items-center">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-4xl">
          <motion.p className="mb-5 text-sm font-extrabold uppercase tracking-[0.18em] text-amber-300">Special School • NGO • Teacher Training Institute</motion.p>
          <motion.h1 className="font-heading text-4xl font-extrabold leading-tight md:text-7xl">Karam Manovikas Sansthan</motion.h1>
          <motion.p className="mt-6 max-w-2xl text-xl leading-9 text-white/86">Empowering every child. Creating independent lives through special education, therapy, vocational skills and professional training in Alwar, Rajasthan.</motion.p>
          <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact">Apply for Admission</Button>
            <Button to="/professional-courses" variant="ghost">Explore Courses</Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-primary py-14 text-white">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="font-heading text-3xl font-extrabold md:text-4xl">Start with a conversation.</h2>
          <p className="mt-3 max-w-2xl text-white/82">Admissions, therapy assessments and course enquiries are open for families and future educators.</p>
        </div>
        <Link to="/contact" className="focus-ring inline-flex items-center gap-2 rounded-lg bg-white px-6 py-4 font-bold text-primary">Contact Now <ArrowRight size={19} /></Link>
      </Container>
    </section>
  );
}
