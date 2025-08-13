import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import { FaPhoneAlt } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaCommentDots } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
import CorporateMarbleService from './components/CorporateCarpetCleaning/CorporateMarblePolishing/CorporateMarblePage';
import CorporateSofaService from './components/CorporateCarpetCleaning/CorporateSofaCleaning/CorporateSofaPage';
import CorporateChairService from './components/CorporateCarpetCleaning/CorporateChairCleaning/CorporateChairPage';
import CorporatePestService from './components/CorporateCarpetCleaning/CorporatePestControl/CorporatePestPage';
import CorporateWorkService from './components/CorporateCarpetCleaning/CorporateWorkstationCleaning/CorporateWorkPage';
import CorporateDeepService from './components/CorporateCarpetCleaning/CorporateDeepCleaning/CorporateDeepPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

const FloatingContactIcons = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-2 sm:right-4 bottom-4 sm:bottom-6 md:right-6 md:bottom-8 flex flex-col gap-2 sm:gap-3 z-40">
      {/* Phone */}
      <a
        href="tel:+919014865154"
        className="group transform transition-all duration-300 hover:scale-110"
        aria-label="Call Phone"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg hover:shadow-xl border-2 border-white">
          <FaPhoneAlt className="text-white text-lg sm:text-xl md:text-2xl" />
        </div>
      </a>
      
      {/* WhatsApp */}
      <a
        href="https://wa.me/919014865154"
        className="group transform transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 shadow-lg hover:shadow-xl border-2 border-white">
          <FaWhatsapp className="text-white text-lg sm:text-xl md:text-2xl" />
        </div>
      </a>
      
      {/* Chat */}
      <a
        href="#"
        className="group transform transition-all duration-300 hover:scale-110"
        aria-label="Chatbot"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-purple-700 shadow-lg hover:shadow-xl border-2 border-white">
          <FaCommentDots className="text-white text-lg sm:text-xl md:text-2xl" />
        </div>
      </a>
      
      {/* Back to Top - Only show when scrolled */}
      {isVisible && (
        <button
          onClick={handleBackToTop}
          aria-label="Back to Top"
          className="group focus:outline-none transform transition-all duration-300 hover:scale-110 animate-fadeIn"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg hover:shadow-xl border-2 border-white">
            <FaArrowUp className="text-white text-lg sm:text-xl md:text-2xl" />
          </div>
        </button>
      )}
    </div>
  );
};

// Dynamic spacing hook - accounts for Header + Navbar
const useDynamicSpacing = () => {
  const [topSpacing, setTopSpacing] = useState('0px');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const calculateSpacing = () => {
      const width = window.innerWidth;
      const scrolled = window.scrollY > 10;
      
      // Calculate based on screen size, scroll position, and Header + Navbar heights
      if (width < 640) { // Mobile
        setTopSpacing(scrolled ? '100px' : '120px'); // Header + Navbar on mobile
      } else if (width < 768) { // Large mobile  
        setTopSpacing(scrolled ? '110px' : '135px'); // Header + Navbar
      } else if (width < 1024) { // Tablet
        setTopSpacing(scrolled ? '120px' : '150px'); // Header + Navbar
      } else { // Desktop
        setTopSpacing(scrolled ? '130px' : '160px'); // Header + Navbar
      }
    };

    calculateSpacing();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', calculateSpacing);
    
    // Recalculate when scroll state changes
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateSpacing);
    };
  }, [isScrolled]);

  return topSpacing;
};

const MainContent = ({ children }) => {
  const topSpacing = useDynamicSpacing();

  return (
    <main 
      className="content-container min-h-screen w-full"
      style={{ 
        paddingTop: topSpacing,
        transition: 'padding-top 0.3s ease-in-out'
      }}
    >
      <div className="w-full">
        {children}
      </div>
    </main>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <BlogProvider> 
        <ScrollToTop />
        <DocumentTitle />
        <div className="app-wrapper relative">
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
          
          {/* Footer components */}
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