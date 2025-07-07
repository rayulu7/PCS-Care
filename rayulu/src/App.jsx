import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Testimonials from './components/Testimonials/Testimonial';
import Footer from './components/Footer/Footer';
import ContactForm from './components/Form/Form';
import Contact from './components/ContactUs/Contact';
import About from './components/AboutUs/About';
import Registration from './components/Registration/Registration';
import CarpetCleaningService from './components/CarpetCleaning/Carpet';
import ClientsCarousel from './components/OurClients/Clients';
import TestimonialCarousel from './components/Testimonials/Testimonial';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar />
        <main className="content-container" style={{ marginTop: '80px' }}>
          <Routes>
           
            <Route path="/" element={<Home />} />
            
           
            <Route path="/form" element={<ContactForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/registration-certificate" element={<Registration />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/carpet-cleaning/form" element={<CarpetCleaningService />} />
          </Routes>
        </main>

       
        <ClientsCarousel />
        <TestimonialCarousel />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;