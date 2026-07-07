import { Phone, MessageCircle } from 'lucide-react';
import { site } from '@/constants/site';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 md:right-6">
      <a aria-label="Call institute" href={`tel:${site.phone}`} className="focus-ring flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white shadow-premium transition duration-300 hover:-translate-y-1 hover:bg-blue-700">
        <Phone size={20} />
      </a>
      <a aria-label="WhatsApp institute" href={`https://wa.me/${site.whatsapp}`} className="focus-ring relative flex h-12 w-12 items-center justify-center rounded-lg bg-success text-white shadow-premium transition duration-300 before:absolute before:inset-0 before:-z-10 before:animate-ping before:rounded-lg before:bg-success/35 hover:-translate-y-1 hover:bg-green-700">
        <MessageCircle size={20} />
      </a>
    </div>
  );
}
