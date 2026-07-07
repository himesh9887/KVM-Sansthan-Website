import { Phone, MessageCircle } from 'lucide-react';
import { site } from '@/constants/site';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 md:right-6">
      <a aria-label="Call institute" href={`tel:${site.phone}`} className="focus-ring flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white shadow-premium">
        <Phone size={20} />
      </a>
      <a aria-label="WhatsApp institute" href={`https://wa.me/${site.whatsapp}`} className="focus-ring flex h-12 w-12 items-center justify-center rounded-lg bg-success text-white shadow-premium">
        <MessageCircle size={20} />
      </a>
    </div>
  );
}
