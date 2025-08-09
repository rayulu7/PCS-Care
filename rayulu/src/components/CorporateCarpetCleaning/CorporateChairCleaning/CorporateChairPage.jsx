import React from 'react';
import { CheckCircle } from 'lucide-react';

import CorporateSofaTypes from '../CorporateSofaCleaning/CorporateSofaTypes';
import CorporateSofaForm from '../CorporateSofaCleaning/CorporateSofaForm';
import CorporateChairForm from './CorporateChairFrom';
import CorporateChairTypes from './CorporateChairTypes';




const CorporateChairService = () => {
  const features = [
    "19+ Years of Professional Cleaning Experience",
    "100% Guaranteed Satisfaction",
    "Certified by U.S EPA, Woolsafe and Greenseal",
    "24/7 Customer Support",
    "Eco-Friendly Green Seal Certified Chemicals"
  ];

  const extraFeatures = [
    "Pre-Vacuuming to extract the dust",
    "Applies foam to trap dust particles",
    "Removal of foam along with dust particles using heavy duty vacuum cleaner",
  ]

  return (
    <div>
        <CorporateChairForm />
    <div className="min-h-screen bg-gray-50 font-poppins">
      <div className="max-w-6xl mx-auto p-8">
   
        <div className="text-left mb-12">
          <h1 className="font-bold mb-4 text-5xl leading-[60px] text-[#1c1d3e]">
          Best Office Chair Cleaning <br />
           Services in India for Corporate & <br />
           Commercial Spaces
          </h1>
        </div>

    
        <div className="flex flex-col md:flex-row gap-8 justify-center">
         
          <div className="bg-white rounded-lg shadow-sm w-full md:w-[600px] p-6">
            <div className="text-gray-700 text-justify space-y-4">
              <img src = "/chair_cleaning.jpg" alt = "chair-cleaning" className = "w-full h-100 rounded-lg mb-4" />
              <p className="text-base font-normal leading-[27px] m-0">
              You never know how much dust your chair consists of and how unhygienic your chair is. Corporate offices, commercial buildings and many businesses consist of a lot of chairs, which combinely creates a lot of unhygienic space and surroundings. To keep your office chairs dust-free, clean and hygiene you need the best chair cleaning services (or shampooing) provider like PCS Care. PCS Care has a team of professionals who have 19+ years of experience in handling different types of chairs like Fabric Chairs, Dining Chairs, Leather Chairs, Cotton Chairs, Synthetic Chairs and more. Cleaning and Maintaining your office chairs regularly not only removes the dust, allergens, stains, odours etc but also improves the life-span of chairs and enhances the look too. As our team has decades of expertise, we know how to treat any kind of chair and their accessories in your office and commercial spaces.</p>
              
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
              <h2 className = "text-2xl font-bold">Our Professional Chair Cleaning Services Process</h2>
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
    <CorporateChairTypes />
    </div>
  );
};

export default CorporateChairService;