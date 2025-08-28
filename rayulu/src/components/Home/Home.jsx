import React from 'react';
import TestimonialCarousel from '../Testimonials/Testimonial';

import ClientsCarousel from '../OurClients/Clients';
import Banner from './Banner';
import HomeFlipCards from './HomeBookNow';
import CorporateServices from '../CorporateCarpetCleaning/CorporateServices';
import HomeForm from './HomeForm';
import CorporateOfficialForm from '../CorporateCarpetCleaning/CorporateOfficialForm';
import HomePage from './HomePage';

import Contact from '../ContactUs/Contact';
import About from '../AboutUs/About';

const Home = () => {
  return (
    <div>
      
      <div className="flex flex-col items-center justify-center min-h-screen   py-8">
        {/* <Banner /> */}
        
        <HomePage />

        {/* <div className="w-full max-w-4xl mx-auto">
    
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4">
              Welcome to PCS Care
            </h1>
            
         
            <div className="space-y-4 text-center">
              <p className="text-2xl md:text-4xl font-bold text-[#1B193F]">
                Office / Home Cleaning &
              </p>
              <p className="text-2xl md:text-4xl font-bold text-[#1B193F]">
                Maintenance Services under one
              </p>
              <p className="text-2xl md:text-4xl font-bold text-[#1B193F]">
                roof since 2005
              </p>
            </div>
          </div>
          
         
          <div className="text-left">
            <p className="text-base md:text-lg font-poppins text-gray-800 leading-relaxed">
              PCS Care was established with the aim of providing the state-of-the-art services to Offices/Homes using the best machinery and chemicals available. In an otherwise unorganized sector, we provide professional service so as to take best care your carpets, upholstery, floors etc. using eco-friendly, bio-degradable chemicals.
            </p>
          </div>
        </div> */}
      </div>
      <HomeFlipCards />
      <About />
      <Contact />
      
    </div>
  );
};

export default Home;