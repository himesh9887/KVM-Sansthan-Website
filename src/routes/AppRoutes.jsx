import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import About from '@/pages/About';
import SpecialSchool from '@/pages/SpecialSchool';
import ProfessionalCourses from '@/pages/ProfessionalCourses';
import Gallery from '@/pages/Gallery';
import Events from '@/pages/Events';
import Notice from '@/pages/Notice';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

export default function AppRoutes() {
  return (
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
  );
}
