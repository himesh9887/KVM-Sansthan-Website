import CourseCard from '@/components/courses/CourseCard';
import SEO from '@/components/common/SEO';
import Container from '@/components/ui/Container';
import PageBanner from '@/components/ui/PageBanner';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { courses } from '@/data/content';

export default function ProfessionalCourses() {
  return (
    <>
      <SEO title="Professional Courses" description="B.Ed Special Education, D.Ed Special Education, NTT, eligibility, duration, admission process and career opportunities." path="/professional-courses" />
      <PageBanner title="Professional Courses" text="Teacher training pathways for compassionate professionals in special and inclusive education." image="/images/event-speech.jpeg" />
      <section className="section-pad bg-white"><Container><SectionTitle eyebrow="Courses" title="Professional training for future educators." /><div className="grid gap-6 lg:grid-cols-3">{courses.map((course) => <CourseCard key={course.title} course={course} />)}</div></Container></section>
      <section className="section-pad bg-background">
        <Container className="grid gap-8 lg:grid-cols-2">
          <Info title="Admission Process" items={['Check eligibility and current regulatory norms', 'Submit enquiry with academic documents', 'Attend counselling and document verification', 'Complete admission formalities as per institute schedule']} />
          <Info title="Career Opportunities" items={['Special educator in schools and NGOs', 'Inclusive education support teacher', 'Early childhood educator', 'Resource room coordinator', 'Rehabilitation and community program assistant']} />
        </Container>
      </section>
      <section className="bg-dark py-14 text-white"><Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><h2 className="font-heading text-3xl font-extrabold">Download the prospectus or apply now.</h2><p className="mt-3 text-white/72">Documents, reservation and final eligibility are handled as per latest applicable norms.</p></div><div className="flex flex-col gap-3 sm:flex-row"><Button href="/docs/prospectus.pptx" variant="ghost">Download Prospectus</Button><Button to="/contact">Apply Now</Button></div></Container></section>
    </>
  );
}

function Info({ title, items }) {
  return <article className="rounded-card border border-slate-200 bg-white p-7 shadow-soft"><h3 className="font-heading text-2xl font-bold text-dark">{title}</h3><ul className="mt-5 space-y-3">{items.map((item) => <li key={item} className="rounded-lg bg-slate-50 p-3 font-semibold text-muted">{item}</li>)}</ul></article>;
}
