import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '@/components/ui/Button';
import { navLinks, site } from '@/constants/site';
import { cn } from '@/utils/cn';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={cn('fixed left-0 right-0 top-0 z-50 transition duration-300 lg:top-8', scrolled ? 'bg-white/88 shadow-soft backdrop-blur-xl' : 'bg-white/72 backdrop-blur-md')}>
      <TopSpacer />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="focus-ring flex items-center gap-3 rounded-lg" onClick={() => setOpen(false)}>
          <img src="/images/kmvs-logo.png" alt="Karam Manovikas Sansthan logo" className="h-12 w-12 rounded-lg object-contain" />
          <span className="max-w-[170px] font-heading text-sm font-extrabold leading-tight text-dark sm:max-w-none sm:text-base">{site.name}</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => cn('rounded-lg px-3 py-2 text-sm font-bold text-slate-700 transition hover:text-primary', isActive && 'bg-blue-50 text-primary')}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="hidden lg:block">
          <Button to="/contact" icon={false}>Admission</Button>
        </div>
        <button type="button" className="focus-ring rounded-lg p-2 text-dark lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <div className={cn('grid overflow-hidden bg-white transition-all duration-300 lg:hidden', open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
        <div className="overflow-hidden px-4 pb-4">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 font-bold text-slate-700 hover:bg-blue-50 hover:text-primary">
              {link.label}
            </NavLink>
          ))}
          <Button to="/contact" className="mt-3 w-full" icon={false}>Admission</Button>
        </div>
      </div>
    </header>
  );
}

function TopSpacer() {
  return <div className="hidden lg:block" />;
}
