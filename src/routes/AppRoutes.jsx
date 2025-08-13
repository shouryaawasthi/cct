import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import MainLayout from '../components/mainLayout/MainLayout';
import CourseDetail from '../pages/courses/CourseDetail';
import Services from '../pages/Services';
import NotFound from '../components/NotFound';
import LoginPage from '../pages/LoginPage';


export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="courses/:slug" element={<CourseDetail />} />
          <Route path="services" element={<Services />} />
          <Route path="login/:userType" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
