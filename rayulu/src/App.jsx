import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaCommentDots,
  FaAngleUp
} from 'react-icons/fa';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ContactForm from './components/Form/Form';
import Contact from './components/ContactUs/Contact';
import About from './components/AboutUs/About';
import Registration from './components/Registration/Registration';
import ClientsCarousel from './components/OurClients/Clients';
import TestimonialCarousel from './components/Testimonials/Testimonial';
import CorporateCarpetCleaningService from './components/CorporateCarpetCleaning/CorporateCarpet';
import Homecarpet from './components/HomeServices/HomeCarpetCleaning/HomeCarpet';
import HomeMarble from './components/HomeServices/HomeMarblePolishing/HomeMarble';
import { BlogProvider } from './context/BlogContext';
import DocumentTitle from './DocumentTitle';
import BlogContent from './components/Blog/BlogContent';
import BlogApp from './components/Blog/BlogApp';
import Blog from './components/Blog/Blog';
import CorporateServices from './components/CorporateCarpetCleaning/CorporateServices';
import Stats from './components/Stats/Stats';
import CorporateMarbleService from './components/CorporateCarpetCleaning/CorporateMarblePolishing/CorporateMarblePage';
import CorporateSofaService from './components/CorporateCarpetCleaning/CorporateSofaCleaning/CorporateSofaPage';
import CorporateChairService from './components/CorporateCarpetCleaning/CorporateChairCleaning/CorporateChairPage';
import CorporatePestService from './components/CorporateCarpetCleaning/CorporatePestControl/CorporatePestPage';
import CorporateWorkService from './components/CorporateCarpetCleaning/CorporateWorkstationCleaning/CorporateWorkPage';
import CorporateDeepService from './components/CorporateCarpetCleaning/CorporateDeepCleaning/CorporateDeepPage';

// Smooth scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

// Floating contact + scroll buttons
const FloatingContactIcons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.pageYOffset > 300);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-2 sm:right-4 bottom-4 sm:bottom-6 md:right-6 md:bottom-8 flex flex-col gap-2 sm:gap-3 z-40">
      
      {/* Call Button */}
      <a
        href="tel:+919014865154"
        aria-label="Call Phone"
        className="group transition-transform duration-300 hover:scale-110"
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg hover:shadow-xl border-2 border-white">
          <FaPhoneAlt className="text-white text-lg sm:text-xl md:text-2xl" />
        </div>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919014865154"
        aria-label="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        className="group transition-transform duration-300 hover:scale-110"
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 shadow-lg hover:shadow-xl border-2 border-white">
          <FaWhatsapp className="text-white text-lg sm:text-xl md:text-2xl" />
        </div>
      </a>

      {/* Chatbot Button */}
      <a
        href="#"
        aria-label="Chatbot"
        className="group transition-transform duration-300 hover:scale-110"
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-purple-700 shadow-lg hover:shadow-xl border-2 border-white">
          <FaCommentDots className="text-white text-lg sm:text-xl md:text-2xl" />
        </div>
      </a>

      {/* Scroll to Top Button */}
      {isVisible && (
  <button
    onClick={handleBackToTop}
    aria-label="Back to Top"
    className="
      group 
      focus:outline-none 
      focus:ring-4 focus:ring-orange-300 focus:ring-offset-2 
      transition-all duration-300 
      hover:scale-105 active:scale-95 
      transform-gpu
      relative
      overflow-hidden
      cursor-pointer
    "
  >
    {/* Main Button Container (Responsive Square) */}
    <div className="
      w-10 h-10 
      sm:w-12 sm:h-12 
      md:w-14 md:h-14 
      lg:w-16 lg:h-16
      bg-orange-500 
      shadow-xl hover:shadow-2xl 
      border-2 border-white 
      flex items-center justify-center
      relative
      z-10
      transition-all duration-300 
      ease-in-out
      rounded-none
      will-change-transform
    ">
      {/* Icon */}
      <FaAngleUp className="
        text-white 
        text-xl sm:text-2xl md:text-3xl lg:text-4xl
        transform 
        transition-transform duration-300
        group-hover:rotate-12
        group-active:translate-y-px
        drop-shadow-sm
      " />
    </div>

    {/* Ripple Effect */}
    <span
      className="
        absolute 
        inset-0 
        bg-orange-400 
        opacity-0 
        group-hover:opacity-70
        rounded-none
        animate-ripple-up
        scale-0 
        group-hover:scale-100
        pointer-events-none
        will-change-transform
        z-0
      "
    ></span>
  </button>
)}
    </div>
  );
};

// Hook for dynamic top spacing
const useDynamicSpacing = () => {
  const [topSpacing, setTopSpacing] = useState('0px');

  useEffect(() => {
    const calculateSpacing = () => {
      const width = window.innerWidth;
      const scrolled = window.scrollY > 10;

      if (width < 640) setTopSpacing(scrolled ? '100px' : '120px');
      else if (width < 768) setTopSpacing(scrolled ? '110px' : '135px');
      else if (width < 1024) setTopSpacing(scrolled ? '120px' : '150px');
      else setTopSpacing(scrolled ? '130px' : '160px');
    };

    calculateSpacing();
    window.addEventListener('scroll', calculateSpacing);
    window.addEventListener('resize', calculateSpacing);
    return () => {
      window.removeEventListener('scroll', calculateSpacing);
      window.removeEventListener('resize', calculateSpacing);
    };
  }, []);

  return topSpacing;
};

// Main Content Wrapper
const MainContent = ({ children }) => {
  const topSpacing = useDynamicSpacing();
  return (
    <main
      className="min-h-screen w-full"
      style={{
        paddingTop: topSpacing,
        transition: 'padding-top 0.3s ease-in-out'
      }}
    >
      {children}
    </main>
  );
};

// App Component
const App = () => {
  return (
    <BrowserRouter>
      <BlogProvider>
        <ScrollToTop />
        <DocumentTitle />
        <div className="relative">
          <Navbar />
          <FloatingContactIcons />

          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/form" element={<ContactForm />} />
              <Route path="/about" element={<About />} />
              <Route path="/registration-certificate" element={<Registration />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/Corporate-services/carpet-cleaning" element={<CorporateCarpetCleaningService />} />
              <Route path="/home-services/carpet-cleaning" element={<Homecarpet />} />
              <Route path="/home-services/marble-polishing" element={<HomeMarble />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog-page" element={<BlogApp />} />
              <Route path="/blog-page/:id" element={<BlogContent />} />
              <Route path="/corporate-services" element={<CorporateServices />} />
              <Route path="/marble-polishing" element={<CorporateMarbleService />} />
              <Route path="/sofa-cleaning" element={<CorporateSofaService />} />
              <Route path="/chair-cleaning" element={<CorporateChairService />} />
              <Route path="/pest-control" element={<CorporatePestService />} />
              <Route path="/workstation-cleaning" element={<CorporateWorkService />} />
              <Route path="/deep-cleaning" element={<CorporateDeepService />} />
            </Routes>
          </MainContent>

          <Stats />
          <ClientsCarousel />
          <TestimonialCarousel />
          <Footer />
        </div>
      </BlogProvider>
    </BrowserRouter>
  );
};

export default App;

/* Tailwind CSS animation for bounce-up */
