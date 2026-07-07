import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`focus-ring fixed bottom-[calc(env(safe-area-inset-bottom)+9.75rem)] right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-dark text-white shadow-premium transition duration-300 hover:-translate-y-1.5 hover:bg-primary active:translate-y-0 md:right-6 ${show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
    >
      <ArrowUp size={22} />
    </button>
  );
}
