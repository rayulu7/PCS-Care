import React from 'react';
import { CheckCircle } from 'lucide-react';

import CorporatePestTypes from './CorporatePestTypes';
import CorporatePestForm from './CorporatePestForm';




const CorporatePestService = () => {
  const features = [
    "19+ Years of Professional Cleaning Experience",
    "100% Guaranteed Satisfaction",
    "Certified by U.S EPA, Woolsafe and Greenseal",
    "24/7 Customer Support",
    "Eco-Friendly Green Seal Certified Chemicals"
  ];

  return (
    <div>
        <CorporatePestForm />
    <div className="min-h-screen bg-gray-50 font-poppins">
      <div className="max-w-6xl mx-auto p-8">
   
        <div className="text-left mb-12">
          <h1 className="font-bold mb-4 text-5xl leading-[60px] text-[#1c1d3e]">
          Professional Pest Control Services  <br />
           in India<br />
           
          </h1>
        </div>

    
        <div className="flex flex-col md:flex-row gap-8 justify-center">
         
          <div className="bg-white rounded-lg shadow-sm w-full md:w-[600px] p-6">
            <div className="text-gray-700 text-justify space-y-4">
              <p className="text-base font-normal leading-[27px] m-0">
              Corporate offices, Industries and other Commercial spaces consists of a lot of furniture, employees, frequent human traffic, machines, machine tools, electronic devices, etc., which attract pests like cockroaches, flies, mosquitoes. etc. and make your office space unhygienic and unclean. Pests not only create unhygienic conditions in your space but also spoil your infrastructure. Do not let pests create a problem to you and your furniture. Hire a professional pest control service provider like <span className = "font-bold">PCS Care</span></p>
              <p className="text-base font-normal leading-[27px] m-0">
              <span className = "font-bold">PCS Care</span> has a team of professionals who have 19+ years of experience in cleaning and maintenance of corporate offices, commercial spaces and industrial plants.</p>
              <p className="text-base font-normal leading-[27px] m-0">
              Pest Controlling action not only kills pests like flies, cockroaches, mosquitoes, etc. but also throws away a few species like rats too. We use environmentally safe chemicals to control the pests, which do not harm your employees during and after the process. Moreover, our best pest control services keep your surroundings and floor clean and hygienic and let you breathe comfortably like never before.</p>
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
    <CorporatePestTypes />
    </div>
  );
};

export default CorporatePestService;