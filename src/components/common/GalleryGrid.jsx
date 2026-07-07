import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { galleryImages } from '@/data/content';
import { cn } from '@/utils/cn';

const categories = ['All', 'Campus', 'Students', 'Events', 'Therapy', 'Activities', 'Workshop', 'Awards', 'Videos'];

export default function GalleryGrid({ preview = false }) {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const images = useMemo(() => {
    const filtered = active === 'All' ? galleryImages : galleryImages.filter((item) => item.category === active);
    return preview ? filtered.slice(0, 6) : filtered;
  }, [active, preview]);

  return (
    <>
      {!preview && (
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button key={category} type="button" onClick={() => setActive(category)} className={cn('focus-ring rounded-lg px-4 py-2 text-sm font-bold transition', active === category ? 'bg-primary text-white' : 'bg-white text-slate-700 shadow-soft hover:text-primary')}>
              {category}
            </button>
          ))}
        </div>
      )}
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {images.map((image, index) => (
          <motion.button
            key={image.src}
            type="button"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
            onClick={() => setLightbox(image)}
            className="focus-ring group mb-5 block w-full overflow-hidden rounded-card bg-white text-left shadow-soft"
          >
            <img src={image.src} alt={image.alt} loading={index < 2 ? 'eager' : 'lazy'} className="h-auto w-full object-cover transition duration-500 group-hover:scale-105" />
            <span className="block p-4">
              <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-secondary">{image.category}</span>
              <span className="mt-1 block font-heading text-lg font-bold text-dark">{image.title}</span>
            </span>
          </motion.button>
        ))}
      </div>
      {lightbox && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/88 p-4" role="dialog" aria-modal="true">
          <button type="button" aria-label="Close image" className="focus-ring absolute right-5 top-5 rounded-lg bg-white p-3 text-dark" onClick={() => setLightbox(null)}>
            <X />
          </button>
          <img src={lightbox.src} alt={lightbox.alt} className="max-h-[82vh] rounded-card object-contain shadow-premium" />
        </div>
      )}
    </>
  );
}
