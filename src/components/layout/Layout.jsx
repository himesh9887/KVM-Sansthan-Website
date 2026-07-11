import TopBar from './TopBar';
import Navbar from './Navbar';
import Footer from './Footer';
import ProgressBar from './ProgressBar';
import FloatingActions from './FloatingActions';
import ScrollTop from './ScrollTop';
import ScrollToTop from './ScrollToTop';

export default function Layout({ children }) {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus-ring fixed left-4 top-4 z-[100] rounded-lg bg-white px-4 py-3 font-bold text-primary shadow-premium">Skip to content</a>
      <ProgressBar />
      <ScrollToTop />
      <div className="fixed left-0 top-0 z-50 w-full"><TopBar /></div>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-background" tabIndex="-1">
        {children}
      </main>
      <Footer />
      <ScrollTop />
      <FloatingActions />
    </>
  );
}


