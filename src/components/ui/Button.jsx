import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';

const variants = {
  primary: 'bg-primary text-white shadow-soft hover:bg-blue-700',
  secondary: 'bg-secondary text-white shadow-soft hover:bg-teal-800',
  outline: 'border border-slate-200 bg-white text-dark hover:border-primary hover:text-primary',
  ghost: 'bg-white/12 text-white ring-1 ring-white/30 hover:bg-white/20',
};

export default function Button({ children, to, href, className, variant = 'primary', icon = true, ...props }) {
  const classes = cn(
    'focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition duration-300',
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
