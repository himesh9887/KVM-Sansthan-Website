import ContactForm from '@/components/contact/ContactForm';
import SEO from '@/components/common/SEO';
import FeatureGrid from '@/components/common/FeatureGrid';
import Container from '@/components/ui/Container';
import PageBanner from '@/components/ui/PageBanner';
import SectionTitle from '@/components/ui/SectionTitle';
import { contactCards } from '@/data/content';

export default function Contact() {
  return (
    <>
      <SEO title="Contact" description="Contact Karam Manovikas Sansthan for special school admissions, therapy and professional courses in Alwar, Rajasthan." path="/contact" />
      <PageBanner title="Contact" text="Reach the institute for admissions, assessments, parent guidance and course enquiries." image="/images/campus-building.jpeg" />
      <section className="section-pad bg-background"><Container><FeatureGrid items={contactCards} /></Container></section>
      <section className="section-pad bg-white">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div><SectionTitle align="left" eyebrow="Enquiry Form" title="Tell us how we can help." text="Submit your contact details and the team will respond for admission counselling, therapy support or professional course information." /><ContactForm /></div>
          <div className="overflow-hidden rounded-card border border-slate-200 bg-white shadow-soft">
            <iframe title="Karam Manovikas Sansthan map" src="https://www.google.com/maps?q=Alwar%20Rajasthan&output=embed" className="h-full min-h-[520px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </Container>
      </section>
    </>
  );
}
