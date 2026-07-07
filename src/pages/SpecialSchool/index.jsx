import Accordion from '@/components/common/Accordion';
import FeatureGrid from '@/components/common/FeatureGrid';
import SEO from '@/components/common/SEO';
import Container from '@/components/ui/Container';
import PageBanner from '@/components/ui/PageBanner';
import SectionTitle from '@/components/ui/SectionTitle';
import { disabilities, faqs, therapies } from '@/data/content';

export default function SpecialSchool() {
  return (
    <>
      <SEO title="Special School" description="Special school programs, IEP, life skills, therapy, activities, parent support and admissions." path="/special-school" />
      <PageBanner title="Special School" text="Individual education plans, therapeutic support, life skills and activities for children with special needs." image="/images/award-ceremony.jpeg" />
      <section className="section-pad bg-white">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle align="left" eyebrow="Overview" title="Every learner receives a purposeful path." text="The special school works through observation, assessment, classroom goals, therapy coordination and parent involvement so children can grow in communication, academics, behavior and independence." />
          <div className="grid gap-3 sm:grid-cols-2">{disabilities.map((item) => <div key={item} className="rounded-card border border-slate-200 bg-background p-4 font-bold text-slate-700">{item}</div>)}</div>
        </Container>
      </section>
      <section className="section-pad bg-background"><Container><SectionTitle eyebrow="Therapy" title="Integrated support for the whole child." /><FeatureGrid items={therapies} /></Container></section>
      <section className="section-pad bg-white">
        <Container className="grid gap-8 lg:grid-cols-3">
          {['Individual Education Plan', 'Life Skills & Activities', 'Parents Support'].map((title, index) => (
            <article key={title} className="rounded-card border border-slate-200 bg-white p-7 shadow-soft">
              <p className="font-numbers text-4xl font-extrabold text-accent">0{index + 1}</p>
              <h3 className="mt-4 font-heading text-2xl font-bold text-dark">{title}</h3>
              <p className="mt-4 leading-7 text-muted">Structured goals, regular review, activity-based participation and practical guidance help children use learning in real life.</p>
            </article>
          ))}
        </Container>
      </section>
      <section className="section-pad bg-background"><Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><SectionTitle align="left" eyebrow="Admission" title="A gentle, assessment-led admission process." text="Contact the institute, schedule an interaction, share records, complete assessment and receive a suitable education or therapy plan." /><Accordion items={faqs} /></Container></section>
    </>
  );
}
