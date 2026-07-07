import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
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

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={cn('fixed left-0 right-0 top-0 z-50 transition-all duration-300 lg:top-8', scrolled ? 'bg-white/92 shadow-soft backdrop-blur-2xl' : 'bg-white/78 backdrop-blur-xl')}>
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[76px] lg:px-8">
        <Link to="/" className="focus-ring group flex min-w-0 items-center gap-3 rounded-lg" onClick={() => setOpen(false)}>
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white shadow-sm ring-1 ring-slate-200 transition group-hover:shadow-soft">
            <img src="/images/kmvs-logo.png" alt="Karam Manovikas Sansthan logo" className="h-10 w-10 object-contain" />
          </span>
          <span className="min-w-0">
            <span className="block max-w-[180px] truncate font-heading text-sm font-extrabold leading-tight text-dark sm:max-w-none sm:text-base">{site.name}</span>
            <span className="hidden text-xs font-bold text-secondary sm:block">Empowering Every Child</span>
          </span>
        </Link>
        <div className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/72 p-1 shadow-sm lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => cn('group relative rounded-full px-3.5 py-2 text-sm font-bold text-slate-700 transition hover:text-primary', isActive && 'bg-blue-50 text-primary')}
            >
              <span>{link.label}</span>
              <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </NavLink>
          ))}
        </div>
        <div className="hidden lg:block">
          <Button to="/contact" icon={false}>Admission</Button>
        </div>
        <button type="button" className="focus-ring grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white text-dark shadow-sm lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              className="fixed inset-0 top-[72px] z-[-1] bg-slate-950/35 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="mx-4 overflow-hidden rounded-card border border-slate-200 bg-white shadow-premium lg:hidden"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.22 }}
            >
              <div className="grid gap-1 p-3">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => cn('rounded-lg px-4 py-3 text-base font-bold text-slate-700 transition hover:bg-blue-50 hover:text-primary', isActive && 'bg-blue-50 text-primary')}
                  >
                    {link.label}
                  </NavLink>
                ))}
                <Button to="/contact" className="mt-2 w-full" icon={false} onClick={() => setOpen(false)}>Admission</Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

