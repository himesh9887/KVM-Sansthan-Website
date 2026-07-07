import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import Container from '@/components/ui/Container';
import { navLinks, site } from '@/constants/site';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
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
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold">Quick Links</h3>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            {navLinks.map((link) => <Link key={link.path} to={link.path} className="text-white/72 hover:text-amber-300">{link.label}</Link>)}
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
      </Container>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Karam Manovikas Sansthan. All rights reserved.
      </div>
    </footer>
  );
}
