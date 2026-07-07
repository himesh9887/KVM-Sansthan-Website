import { Phone, MessageCircle } from 'lucide-react';
import { site } from '@/constants/site';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-[calc(env(safe-area-inset-bottom)+1.25rem)] right-4 z-40 flex flex-col gap-4 md:right-6">
      <a aria-label="Call institute" href={`tel:${site.phone}`} className="focus-ring flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-premium transition duration-300 hover:-translate-y-1.5 hover:bg-blue-700 active:translate-y-0">
        <Phone size={22} />
      </a>
      <a aria-label="WhatsApp institute" href={`https://wa.me/${site.whatsapp}`} className="focus-ring relative flex h-14 w-14 items-center justify-center rounded-full bg-success text-white shadow-premium transition duration-300 before:absolute before:inset-0 before:-z-10 before:animate-ping before:rounded-full before:bg-success/35 hover:-translate-y-1.5 hover:bg-green-700 active:translate-y-0">
        <MessageCircle size={22} />
      </a>
    </div>
  );
}
