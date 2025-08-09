import React from 'react';
import { CheckCircle } from 'lucide-react';


import CorporateDeepForm from './CorporateDeepForm';
import CorporateDeepTypes from './CorporateDeepTypes';




const CorporateDeepService = () => {
  const features = [
    "19+ Years of Professional Cleaning Experience",
    "100% Guaranteed Satisfaction",
    "Certified by U.S EPA, Woolsafe and Greenseal",
    "24/7 Customer Support",
    "Eco-Friendly Green Seal Certified Chemicals"
  ];

  const extra = [
    "Dry Dusting/Vacuuming of Curtains",
    "Floor Scrubbing with Industrial grade machine",
    "Carpet Cleaning",
    "Chair Cleaning (or Chair Shampooing)",
    "Sofa Cleaning (or Sofa Shampooing)",
    "Bathroom Cleaning",
  ]

  const extraFeatures = [
      "Cobweb Removal",
      "Washing of WC and sink",
      "Removal of scales from various office accessories to make them shiny",
      "Doors, Tables, Glasses and Windows Cleaning",
      "Switch Boards, Fans, Coolers and AC Cleaning",
      "Any many more..."
  ]

  return (
    <div>
        <CorporateDeepForm />
    <div className="min-h-screen bg-gray-50 font-poppins">
      <div className="max-w-6xl mx-auto p-8">
   
        <div className="text-left mb-12">
          <h1 className="font-bold mb-4 text-5xl leading-[60px] text-[#1c1d3e]">
          Book Professional Deep Cleaning <br />
           Services Today!<br />
           
          </h1>
        </div>

    
        <div className="flex flex-col md:flex-row gap-8 justify-center">
         
          <div className="bg-white rounded-lg shadow-sm w-full md:w-[600px] p-6">
            <div className="text-gray-700 text-justify space-y-4">
              <p className="text-base font-normal leading-[27px] m-0">
              Due to heavy footfall, insufficient air circulation and lack of proper cleaning in corporate offices and commercial spaces, dust and allergens accumulate leading to unhealthy environment in the workplace. To remove dust and allergens from your commercial space and corporate offices, deep cleaning is a perfect solution. To make it more perfect and professional, you need a best deep cleaning company like PCS Care. Commercial spaces and offices consist of a lot of furniture and electronic items, which require patience and thorough cleaning.</p>
              <div>
                <h2 className = "font-bold text-2xl text-black">
                  Our professional deep cleaning services include
                </h2>
                <div className="space-y-4 mt-4">
              {extra.map((feature, index) => (
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
            <div className = "py-4 mt-12 mb-4">
              <h2 className = "font-bold text-2xl mb-4">
                Along with this, deep cleaning is followed by
              </h2>
              <div className="space-y-4">
              {extraFeatures.map((feature, index) => (
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
    </div>
    <CorporateDeepTypes />
    </div>
  );
};

export default CorporateDeepService;