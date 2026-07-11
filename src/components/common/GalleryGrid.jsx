import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
        <div className="mb-10 flex flex-wrap justify-center gap-2.5">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={cn(
                'focus-ring rounded-full px-4 py-2.5 text-sm font-bold shadow-sm transition duration-300',
                active === category ? 'bg-primary text-white shadow-soft' : 'border border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-soft',
              )}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      <motion.div
        layout
        className="grid grid-cols-1 gap-5 min-[420px]:grid-cols-2 md:gap-6 lg:grid-cols-3"
      >
        {images.map((image, index) => (
          <motion.button
            key={image.src}
            layout
            type="button"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
            onClick={() => setLightbox(image)}
            className="focus-ring group flex h-full overflow-hidden rounded-card border border-slate-200 bg-white text-left shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-premium"
          >
            <span className="flex h-full w-full flex-col">
              <span className="relative block aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="900"
                  sizes="(min-width: 1024px) 33vw, (min-width: 420px) 50vw, 100vw"
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-slate-950/58 via-slate-950/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 right-4 translate-y-3 text-sm font-bold text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  View larger
                </span>
              </span>
              <span className="flex min-h-[96px] flex-col justify-center p-5">
                <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-secondary">{image.category}</span>
                <span className="mt-1 block font-heading text-lg font-bold leading-snug text-dark">{image.title}</span>
              </span>
            </span>
          </motion.button>
        ))}
      </motion.div>
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/90 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative w-full max-w-6xl overflow-hidden rounded-card border border-white/10 bg-white shadow-premium"
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.24 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button type="button" aria-label="Close image" className="focus-ring absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/92 text-dark shadow-soft backdrop-blur transition hover:bg-primary hover:text-white" onClick={() => setLightbox(null)}>
                <X size={20} />
              </button>
              <div className="grid bg-slate-950">
                <img src={lightbox.src} alt={lightbox.alt} decoding="async" width="1200" height="900" className="max-h-[78vh] w-full object-contain" />
              </div>
              <div className="bg-white p-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-secondary">{lightbox.category}</p>
                <h3 className="mt-1 font-heading text-2xl font-bold text-dark">{lightbox.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


