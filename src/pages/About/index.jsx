import SEO from '@/components/common/SEO';
import FeatureGrid from '@/components/common/FeatureGrid';
import Container from '@/components/ui/Container';
import PageBanner from '@/components/ui/PageBanner';
import SectionTitle from '@/components/ui/SectionTitle';
import { objectives, team } from '@/data/content';

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
      <section className="section-pad bg-background">
        <Container>
          <SectionTitle eyebrow="Management & Team" title="Experienced people behind compassionate systems." />
          <div className="mx-auto max-w-5xl">
            {team.map((member) => (
              <article key={member.name} className="overflow-hidden rounded-card border border-slate-200 bg-white shadow-premium">
                <div className="grid items-stretch lg:grid-cols-[0.9fr_1.1fr]">
                  <img src={member.image} alt={`${member.name}, ${member.role}`} className="h-full min-h-[320px] w-full object-cover object-left-top" loading="lazy" />
                  <div className="flex flex-col justify-center p-7 sm:p-10">
                    <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-accent">{member.role}</p>
                    <h3 className="mt-3 font-heading text-4xl font-extrabold leading-tight text-dark sm:text-5xl">{member.name}</h3>
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{member.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
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
