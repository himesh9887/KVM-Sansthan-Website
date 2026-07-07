import { Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import TopBar from './TopBar';
import Navbar from './Navbar';
import Footer from './Footer';
import ProgressBar from './ProgressBar';
import FloatingActions from './FloatingActions';
import ScrollTop from './ScrollTop';
import Loader from './Loader';

export default function Layout({ children }) {
  const location = useLocation();
  return (
    <>
      <ProgressBar />
      <div className="fixed inset-x-0 top-0 z-50"><TopBar /></div>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28 }}
        >
          <Suspense fallback={<Loader />}>{children}</Suspense>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <ScrollTop />
      <FloatingActions />
    </>
  );
}
