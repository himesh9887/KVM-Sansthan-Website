import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';

const variants = {
  primary: 'bg-primary text-white shadow-soft hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-premium active:translate-y-0',
  secondary: 'bg-secondary text-white shadow-soft hover:-translate-y-0.5 hover:bg-teal-800 hover:shadow-premium active:translate-y-0',
  outline: 'border border-slate-200 bg-white text-dark shadow-sm hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-soft active:translate-y-0',
  ghost: 'bg-white/12 text-white ring-1 ring-white/30 hover:-translate-y-0.5 hover:bg-white/20 active:translate-y-0',
};

export default function Button({ children, to, href, className, variant = 'primary', icon = true, ...props }) {
  const classes = cn(
    'focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition duration-300 ease-out',
    variants[variant],
    className,
  );
  const content = (
    <>
      {children}
      {icon && <ArrowRight size={18} aria-hidden="true" />}
    </>
  );

  if (to) return <Link to={to} className={classes} {...props}>{content}</Link>;
  if (href) return <a href={href} className={classes} {...props}>{content}</a>;
  return <button className={classes} {...props}>{content}</button>;
}
