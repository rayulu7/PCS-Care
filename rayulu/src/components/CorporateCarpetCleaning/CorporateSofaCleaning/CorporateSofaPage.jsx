import React from 'react';
import { CheckCircle } from 'lucide-react';

import CorporateSofaForm from './CorporateSofaForm';
import CorporateSofaTypes from './CorporateSofaTypes';





const CorporateSofaService = () => {
  const features = [
    "19+ Years of Professional Cleaning Experience",
    "100% Guaranteed Satisfaction",
    "Certified by U.S EPA, Woolsafe and Greenseal",
    "24/7 Customer Support",
    "Eco-Friendly Green Seal Certified Chemicals"
  ];

  return (
    <div>
        <CorporateSofaForm />
    <div className="min-h-screen bg-gray-50 font-poppins">
      <div className="max-w-6xl mx-auto p-8">
   
        <div className="text-left mb-12">
          <h1 className="font-bold mb-4 text-5xl leading-[60px] text-[#1c1d3e]">
          Best Commercial and Office Sofa <br />
           Cleaning Services in India<br />
           
          </h1>
        </div>

    
        <div className="flex flex-col md:flex-row gap-8 justify-center">
         
          <div className="bg-white rounded-lg shadow-sm w-full md:w-[600px] p-6">
            <div className="text-gray-700 text-justify space-y-4">
              <p className="text-base font-normal leading-[27px] m-0">
              Keep your office sofas dust-free and clean with the best and professional sofa cleaning services (or shampooing) from the PCS Care team. PCS Care has a team of professionals who have 19+ years of experience in handling the corporate services like Fabric Sofa Cleaning, Leather Sofa Cleaning, Cushions Dry Cleaning, Couch Dry Cleaning and Settee Dry Cleaning.</p>
              <p className="text-base font-normal leading-[27px] m-0">
              Cleaning and Maintaining your sofas, cushions and couches regularly not only removes the dust, allergens, stains, odours etc but also improves their life-span and enhances the look of the sofas. Whether your sofa is made of velvet, cotton, linen, polyester, nylon, leather, or whatever be your type of sofa fabrics, our professionals ensure your sofa is dust free, shining, clean and smells good.</p>
              <p className="text-base font-normal leading-[27px] m-0">
              As our team has decades of expertise, we know how to treat any kind of sofas and their accessories in your office.</p>
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
    <CorporateSofaTypes />
    </div>
  );
};

export default CorporateSofaService;