import EventCard from '@/components/events/EventCard';
import SEO from '@/components/common/SEO';
import Timeline from '@/components/common/Timeline';
import Container from '@/components/ui/Container';
import PageBanner from '@/components/ui/PageBanner';
import SectionTitle from '@/components/ui/SectionTitle';
import { events, timeline } from '@/data/content';

export default function Events() {
  return (
    <>
      <SEO title="Events" description="Upcoming and previous events, timelines, photos and community programs." path="/events" />
      <PageBanner title="Events" text="Awareness, celebration, student achievement and community inclusion programs." image="/images/assembly.jpeg" />
      <section className="section-pad bg-white"><Container><SectionTitle eyebrow="Upcoming & Previous" title="Programs that bring the community together." /><div className="grid gap-6 lg:grid-cols-3">{events.map((event) => <EventCard key={event.title} event={event} />)}</div></Container></section>
      <section className="section-pad bg-background"><Container><SectionTitle eyebrow="Event Timeline" title="Milestones and continuing outreach." /><Timeline items={timeline} /></Container></section>
    </>
  );
}
