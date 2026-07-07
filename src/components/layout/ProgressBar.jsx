import useScrollProgress from '@/hooks/useScrollProgress';

export default function ProgressBar() {
  const progress = useScrollProgress();
  return <div className="fixed left-0 top-0 z-[60] h-1 bg-accent transition-[width]" style={{ width: `${progress}%` }} />;
}
