import React from 'react';
import { CheckCircle } from 'lucide-react';
import ContactForm from '../Form/Form';
import ClientsCarousel from '../OurClients/Clients';
import TestimonialCarousel from '../Testimonials/Testimonial';
import Footer from '../Footer/Footer';
import CarpetCleaningTypes from './Carpet2';

const CarpetCleaningService = () => {
  const features = [
    "19+ Years of Professional Cleaning Experience",
    "100% Guaranteed Satisfaction",
    "Certified by U.S EPA, Woolsafe and Greenseal",
    "24/7 Customer Support",
    "Eco-Friendly Green Seal Certified Chemicals"
  ];

  return (
    <div>
        <ContactForm />
    <div className="min-h-screen bg-gray-50 font-poppins">
      <div className="max-w-6xl mx-auto p-8">
   
        <div className="text-left mb-12">
          <h1 className="font-bold mb-4 text-5xl leading-[60px] text-[#1c1d3e]">
            Best Commercial and Office<br />
            Carpet Cleaning Services
          </h1>
        </div>

    
        <div className="flex flex-col md:flex-row gap-8 justify-center">
         
          <div className="bg-white rounded-lg shadow-sm w-full md:w-[600px] p-6">
            <div className="text-gray-700 text-justify space-y-4">
              <p className="text-base font-normal leading-[27px] m-0">
                Keep your office neat and hygienic with professional carpet cleaning services (or carpet shampooing). PCS Care has a team of industry experts who have 19+ years of experience in handling the commercial and corporate services like Carpet Cleaning (or Shampooing), chair cleaning (or shampooing) etc.
              </p>
              <p className="text-base font-normal leading-[27px] m-0">
                Professional maintenance of carpets not only removes the dirt, allergens, etc but also increases the life-span of your carpets. Whether it is a carpet made with natural fibres or synthetic fibres our professionals ensure dust-free, allergen-free carpets.
              </p>
              <p className="text-base font-normal leading-[27px] m-0">
                As our team has decades of expertise, we know how to treat all kinds of Carpets that are installed in your office. Carpet Cleaning is done using ENCAPSULATION to keep the carpet dust free and last longer.
              </p>
            </div>
          </div>

         
          <div className="bg-white rounded-lg shadow-sm w-full md:w-[600px] p-6">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <CarpetCleaningTypes />
    </div>
  );
};

export default CarpetCleaningService;