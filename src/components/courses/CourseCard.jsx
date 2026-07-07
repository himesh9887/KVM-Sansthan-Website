import { GraduationCap } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import IconBox from '@/components/ui/IconBox';

export default function CourseCard({ course }) {
  return (
    <Card>
      <IconBox icon={GraduationCap} />
      <h3 className="font-heading text-2xl font-bold text-dark">{course.title}</h3>
      <p className="mt-4 leading-7 text-muted">{course.text}</p>
      <dl className="mt-5 grid gap-3 text-sm">
        <div className="rounded-lg bg-slate-50 p-3"><dt className="font-bold text-dark">Duration</dt><dd className="text-muted">{course.duration}</dd></div>
        <div className="rounded-lg bg-slate-50 p-3"><dt className="font-bold text-dark">Eligibility</dt><dd className="text-muted">{course.eligibility}</dd></div>
      </dl>
      <Button href="/docs/prospectus.pptx" className="mt-6" variant="outline">Download Prospectus</Button>
    </Card>
  );
}
