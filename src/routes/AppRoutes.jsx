import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const SpecialSchool = lazy(() => import('@/pages/SpecialSchool'));
const ProfessionalCourses = lazy(() => import('@/pages/ProfessionalCourses'));
const Gallery = lazy(() => import('@/pages/Gallery'));
const Events = lazy(() => import('@/pages/Events'));
const Notice = lazy(() => import('@/pages/Notice'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));

export default function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/special-school" element={<SpecialSchool />} />
        <Route path="/professional-courses" element={<ProfessionalCourses />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
