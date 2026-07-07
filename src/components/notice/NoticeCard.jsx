import { Download, FileText } from 'lucide-react';

export default function NoticeCard({ notice }) {
  return (
    <article className="flex flex-col gap-4 rounded-card border border-slate-200 bg-white p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between">
      <div className="flex gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-blue-50 text-primary"><FileText /></span>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-secondary">{notice.category} • {notice.date}</p>
          <h3 className="mt-1 font-heading text-xl font-bold text-dark">{notice.title}</h3>
        </div>
      </div>
      <a href={notice.file} className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-dark px-4 py-3 text-sm font-bold text-white">
        <Download size={18} /> Download
      </a>
    </article>
  );
}
