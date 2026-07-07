import GalleryGrid from '@/components/common/GalleryGrid';
import SEO from '@/components/common/SEO';
import Container from '@/components/ui/Container';
import PageBanner from '@/components/ui/PageBanner';
import SectionTitle from '@/components/ui/SectionTitle';

export default function Gallery() {
  return (
    <>
      <SEO title="Gallery" description="Campus, students, events, therapy, activities, workshops, awards and videos gallery." path="/gallery" />
      <PageBanner title="Gallery" text="Campus life, celebrations, learning moments and achievements from Karam Manovikas Sansthan." image="/images/student-performance.jpeg" />
      <section className="section-pad bg-background"><Container><SectionTitle eyebrow="Photo Gallery" title="A living picture of inclusion and progress." /><GalleryGrid /></Container></section>
    </>
  );
}
