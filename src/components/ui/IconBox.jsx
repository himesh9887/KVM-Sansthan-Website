import { cn } from '@/utils/cn';

export default function IconBox({ icon: Icon, className }) {
  return (
    <span className={cn('mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-primary', className)}>
      <Icon size={24} aria-hidden="true" />
    </span>
  );
}
