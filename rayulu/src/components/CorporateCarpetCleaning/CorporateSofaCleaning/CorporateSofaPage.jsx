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
          Hire Professional Marble Polishing <br />
           Services For Your Commercial <br />
           and Office Marble Floors
          </h1>
        </div>

    
        <div className="flex flex-col md:flex-row gap-8 justify-center">
         
          <div className="bg-white rounded-lg shadow-sm w-full md:w-[600px] p-6">
            <div className="text-gray-700 text-justify space-y-4">
              <p className="text-base font-normal leading-[27px] m-0">
              Get a proper Marble Polishing for your office and commercial spaces from professionals like PCS Care. Frequent human visits, dirt and dust makes your floor look poor and dirty, which might consist of a lot of pathogens too. Sometimes scratches and stains takeaway Marble life soon, so to maintain a clean and shiny marble floor, you need frequent marble floor cleaning and polishing services and best professionals who do your work easier and simpler.</p>
              <p className="text-base font-normal leading-[27px] m-0">
              PCS Care is best not only for its commercial and office marble polishing services but also for usage of eco-friendly chemicals for all of its cleaning services. Yes, We use eco-friendly greenseal certified chemicals to polish your floors so you feel your marble floors are safe.</p>
              <p className="text-base font-normal leading-[27px] m-0">
              Contact PCS Care today to schedule a Free Marble Polishing Consultation!</p>
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