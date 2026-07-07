import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone, Send, Youtube } from 'lucide-react';
import Container from '@/components/ui/Container';
import { navLinks, site } from '@/constants/site';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <Container className="grid gap-10 py-16 md:grid-cols-[1.25fr_0.9fr_1fr_1.1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src="/images/kmvs-logo.png" alt="" className="h-14 w-14 rounded-lg bg-white object-contain p-1" />
            <div>
              <h2 className="font-heading text-xl font-extrabold">{site.name}</h2>
              <p className="text-sm text-white/70">{site.tagline}</p>
            </div>
          </div>
          <p className="mt-6 max-w-md leading-8 text-white/72">
            A special school, NGO and professional teacher training institute in Alwar committed to education, therapy, life skills and dignity.
          </p>
          <div className="mt-6 flex gap-3">
            <a aria-label="Facebook" href={site.social.facebook} className="grid h-10 w-10 place-items-center rounded-lg bg-white/8 text-white/78 transition hover:-translate-y-0.5 hover:bg-primary hover:text-white"><Facebook size={18} /></a>
            <a aria-label="Instagram" href={site.social.instagram} className="grid h-10 w-10 place-items-center rounded-lg bg-white/8 text-white/78 transition hover:-translate-y-0.5 hover:bg-primary hover:text-white"><Instagram size={18} /></a>
            <a aria-label="YouTube" href={site.social.youtube} className="grid h-10 w-10 place-items-center rounded-lg bg-white/8 text-white/78 transition hover:-translate-y-0.5 hover:bg-primary hover:text-white"><Youtube size={18} /></a>
          </div>
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold">Quick Links</h3>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            {navLinks.map((link) => <Link key={link.path} to={link.path} className="transition hover:translate-x-1 text-white/72 hover:text-amber-300">{link.label}</Link>)}
          </div>
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold">Contact</h3>
          <div className="mt-5 space-y-4 text-sm text-white/72">
            <p className="flex gap-3"><MapPin className="shrink-0 text-amber-300" size={18} />{site.address}</p>
            <a className="flex gap-3 hover:text-amber-300" href={`tel:${site.phone}`}><Phone size={18} />{site.phone}</a>
            <a className="flex gap-3 hover:text-amber-300" href={`mailto:${site.email}`}><Mail size={18} />{site.email}</a>
          </div>
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold">Newsletter</h3>
          <p className="mt-5 text-sm leading-7 text-white/72">Receive admissions, events and parent support updates from the institute.</p>
          <form className="mt-5 flex overflow-hidden rounded-lg bg-white p-1">
            <input aria-label="Email address" type="email" placeholder="Email address" className="min-w-0 flex-1 px-3 text-sm font-semibold text-dark outline-none" />
            <button type="button" aria-label="Subscribe" className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-white transition hover:bg-blue-700">
              <Send size={18} />
            </button>
          </form>
        </div>
      </Container>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Karam Manovikas Sansthan. All rights reserved.
      </div>
    </footer>
  );
}
