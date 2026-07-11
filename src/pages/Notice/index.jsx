import { useMemo, useState } from 'react';
import NoticeCard from '@/components/notice/NoticeCard';
import SEO from '@/components/common/SEO';
import Container from '@/components/ui/Container';
import PageBanner from '@/components/ui/PageBanner';
import SectionTitle from '@/components/ui/SectionTitle';
import { notices } from '@/data/content';

export default function Notice() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const categories = ['All', ...new Set(notices.map((notice) => notice.category).filter(Boolean))];
  const filtered = useMemo(() => notices.filter((notice) => (
    (category === 'All' || notice.category === category)
    && (notice.title || '').toLowerCase().includes(query.toLowerCase())
  )), [query, category]);

  return (
    <>
      <SEO title="Notice & Circular" description="Latest notices, circulars and downloadable prospectus from Karam Manovikas Sansthan." path="/notice" />
      <PageBanner title="Notice & Circular" text="Latest admissions, course, therapy and parent communication updates." />
      <section className="section-pad bg-background">
        <Container>
          <SectionTitle eyebrow="Latest Notice" title="Search and download institute circulars." />
          <div className="mb-8 grid gap-4 rounded-card bg-white p-4 shadow-soft md:grid-cols-[1fr_auto]">
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search notice" className="input" />
            <select value={category} onChange={(event) => setCategory(event.target.value)} className="input md:w-56">{categories.map((item) => <option key={item}>{item}</option>)}</select>
          </div>
          <div className="space-y-4">
            {filtered.length > 0 ? filtered.map((notice) => <NoticeCard key={notice.id || notice.title} notice={notice} />) : (
              <div className="rounded-card border border-slate-200 bg-white px-6 py-14 text-center shadow-soft">
                <h3 className="font-heading text-2xl font-bold text-dark">No Notices Available</h3>
                <p className="mt-3 text-muted">New notices will be published here soon.</p>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
