import React from 'react';
import { CheckCircle } from 'lucide-react';


import CorporateWorkTypes from './CorporateWorkTypes';
import CorporateWorkForm from './CorporateWorkForm';




const CorporateWorkService = () => {
  const features = [
    "19+ Years of Professional Cleaning Experience",
    "100% Guaranteed Satisfaction",
    "Certified by U.S EPA, Woolsafe and Greenseal",
    "24/7 Customer Support",
    "Eco-Friendly Green Seal Certified Chemicals"
  ];

  return (
    <div>
        <CorporateWorkForm />
    <div className="min-h-screen bg-gray-50 font-poppins">
      <div className="max-w-6xl mx-auto p-8">
   
        <div className="text-left mb-12">
          <h1 className="font-bold mb-4 text-5xl leading-[60px] text-[#1c1d3e]">
          Professional Office Workstation <br />
           Panels Cleaning Services in India <br />
         
          </h1>
        </div>

    
        <div className="flex flex-col md:flex-row gap-8 justify-center">
         
          <div className="bg-white rounded-lg shadow-sm w-full md:w-[600px] p-6">
            <div className="text-gray-700 text-justify space-y-4">
              <p className="text-base font-normal leading-[27px] m-0">
              Workstation Panels are the main source for many devices, stationary items, storage spaces, and other necessary workable things, which is why they attract a lot of dust, grime and allergens. Once you start neglecting cleaning and maintaining, your office workstation panels and cubicle walls lifespan decreases sooner. Additionally, the unhygienic conditions in your office affects your employees' health too.</p>
              <p className="text-base font-normal leading-[27px] m-0">
              PCS Care provides the best’s office workstation panels cleaning service</p>
              
              <p className="text-base font-normal leading-[27px] m-0">
              - Uses U.S EPA, Woolsafe and Greenseal certified chemicals to remove hard stains and eliminate unpleasant odours.</p>
              <p className="text-base font-normal leading-[27px] m-0">
              - Sanitises your workstation, devices and employee belongings to make it germ-free.</p>
            </div>
            <img src = "/Workstation.jpg" alt = "Workstation Cleaning" className = "w-full h-400 rounded-lg shadow-md mt-6" />
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
            <div className = "py-4 mt-32">
              <h2 className = "font-bold mt-12 mb-4 text-3xl">Professional Office Window Blinds and Rollers Cleaning Services in India</h2>
              <div className="text-gray-700 text-justify space-y-4">
              <p className="text-base font-normal leading-[27px] m-0">
              Office window blinds and rollers restrict the dust and light from flowing into the office space from outside, due to which they accumulate a lot of dust, allergens and stains. Lack of proper cleaning and maintenance of window blinds, indoor air quality will decrease, allowing the dust to spread all over your office.
</p>
              <p className="text-base font-normal leading-[27px] m-0">
              PCS Care’s office window blinds cleaning services and window rollers cleaning services include</p>
              
              <p className="text-base font-normal leading-[27px] m-0">
              - Eliminates unpleasant odour.</p>
              <p className="text-base font-normal leading-[27px] m-0">
             - Sanitises your window blinds to remove allergens and any other virus.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CorporateWorkTypes />
    </div>
  );
};

export default CorporateWorkService;