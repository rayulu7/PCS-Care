import React, { useEffect } from 'react';
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


// ✅ ADD THIS
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

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

const FloatingContactIcons = () => {
  // Back-to-top button logic
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-4 top-[35%] md:top-[45%] flex flex-col gap-4 z-50">
      {/* Phone Icon */}
      <a
        href="tel:+919392612314"
        className="group"
        aria-label="Call Phone"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-700 border-2 border-orange-500 shadow-lg transition-transform hover:scale-110">
          <FaPhoneAlt className="text-white text-2xl" />
        </div>
      </a>
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/919014865154"
        className="group"
        aria-label="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-700 border-2 border-orange-500 shadow-lg transition-transform hover:scale-110">
          <FaWhatsapp className="text-white text-2xl" />
        </div>
      </a>
      {/* Chatbot Icon */}
      <a
        href="#"
        className="group"
        aria-label="Chatbot"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-700 border-2 border-orange-500 shadow-lg transition-transform hover:scale-110">
          <FaCommentDots className="text-white text-2xl" />
        </div>
      </a>
      {/* Back-to-top Button */}
      <button
        onClick={handleBackToTop}
        aria-label="Back to Top"
        className="group focus:outline-none"
        style={{ background: 'none', border: 'none', padding: 0 }}
      >
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-700 border-2 border-orange-500 shadow-lg transition-transform hover:scale-110">
          <FaArrowUp className="text-white text-2xl" />
        </div>
      </button>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <BlogProvider> {/* ✅ Wrap everything that uses useBlogContext */}
        <ScrollToTop />
        <DocumentTitle />
        <div className="app-wrapper">
          <Navbar />
          <FloatingContactIcons />
          <main className="content-container" style={{ marginTop: '125px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/form" element={<ContactForm />} />
              <Route path="/about" element={<About />} />
              <Route path="/registration-certificate" element={<Registration />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/Corporate-services/carpet-cleaning" element={<CorporateCarpetCleaningService />} />
              <Route path="/home-services/carpet-cleaning" element={<Homecarpet />} />
              <Route path="/home-services/marble-polishing" element={<HomeMarble />} />
              <Route path = "/blog" element = {<Blog />} />
              <Route path = "/blog-page" element = {<BlogApp />} />
              <Route path = "/blog-page/:id" element = {<BlogContent />} />
              <Route path = "/corporate-services" element = {<CorporateServices />} />
            </Routes>
          </main>
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
