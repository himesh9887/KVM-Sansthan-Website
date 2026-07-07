import SEO from '@/components/common/SEO';
import Timeline from '@/components/common/Timeline';
import FeatureGrid from '@/components/common/FeatureGrid';
import Container from '@/components/ui/Container';
import PageBanner from '@/components/ui/PageBanner';
import SectionTitle from '@/components/ui/SectionTitle';
import { objectives, team, timeline } from '@/data/content';

export default function About() {
  return (
    <>
      <SEO title="About" description="History, vision, mission, objectives, team and infrastructure of Karam Manovikas Sansthan." path="/about" />
      <PageBanner title="About Karam Manovikas Sansthan" text="Established in 2001 with a mission to support children with special needs, families and future educators." />
      <section className="section-pad bg-white">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div><SectionTitle align="left" eyebrow="Vision" title="An inclusive society where every child learns with dignity." text="We envision children with special needs living confident, independent and respected lives through education, therapy and social inclusion." /></div>
          <div><SectionTitle align="left" eyebrow="Mission" title="Structured support for children, parents and educators." text="Our mission is to provide special education, individualized planning, therapy, vocational readiness, parent guidance and professional teacher training under one supportive institution." /></div>
        </Container>
      </section>
      <section className="section-pad bg-background"><Container><SectionTitle eyebrow="Objectives" title="What guides our work." /><FeatureGrid items={objectives} /></Container></section>
      <section className="section-pad bg-white"><Container><SectionTitle eyebrow="Timeline" title="A journey of steady service." /><Timeline items={timeline} /></Container></section>
      <section className="section-pad bg-background">
        <Container>
          <SectionTitle eyebrow="Management & Team" title="Experienced people behind compassionate systems." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{team.map((member) => <article key={member.name} className="rounded-card border border-slate-200 bg-white p-6 shadow-soft"><h3 className="font-heading text-xl font-bold text-dark">{member.name}</h3><p className="mt-1 font-bold text-primary">{member.role}</p><p className="mt-4 leading-7 text-muted">{member.text}</p></article>)}</div>
        </Container>
      </section>
      <section className="section-pad bg-white">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <img src="/images/assembly.jpeg" alt="School infrastructure and courtyard assembly" className="rounded-card shadow-premium" loading="lazy" />
          <SectionTitle align="left" eyebrow="Infrastructure" title="Open, accessible and activity-ready spaces." text="The institute campus supports classroom instruction, therapy, events, parent interaction, practical life-skills work and community awareness programs." />
        </Container>
      </section>
    </>
  );
}
