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
      <ProgressBar />
      <ScrollToTop />
      <div className="fixed left-0 top-0 z-50 w-full"><TopBar /></div>
      <Navbar />
      <main className="min-h-screen bg-background">
        {children}
      </main>
      <Footer />
      <ScrollTop />
      <FloatingActions />
    </>
  );
}
