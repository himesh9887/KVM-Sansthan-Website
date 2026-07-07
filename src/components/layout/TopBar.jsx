import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { site } from '@/constants/site';

export default function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-dark text-white lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-xs">
        <div className="flex items-center gap-5">
          <a className="flex items-center gap-2 hover:text-amber-300" href={`tel:${site.phone}`}><Phone size={14} />{site.phone}</a>
          <a className="flex items-center gap-2 hover:text-amber-300" href={`mailto:${site.email}`}><Mail size={14} />{site.email}</a>
          <span className="flex items-center gap-2"><MapPin size={14} />{site.address}</span>
        </div>
        <div className="flex items-center gap-3">
          <a aria-label="Facebook" href={site.social.facebook}><Facebook size={15} /></a>
          <a aria-label="Instagram" href={site.social.instagram}><Instagram size={15} /></a>
          <a aria-label="YouTube" href={site.social.youtube}><Youtube size={15} /></a>
        </div>
      </div>
    </div>
  );
}
