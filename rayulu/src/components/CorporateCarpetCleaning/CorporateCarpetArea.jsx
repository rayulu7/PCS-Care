
import React from 'react';

const areas = [
  'Restaurants',
  'Resorts',
  'Hotels',
  'Corporate Offices',
  'Hospitals',
  'Schools & Colleges',
  'Shopping Malls',
  'Cinemas & Theaters',
];

export default function CorporateCarpetAreasSection() {

  const firstSix = areas.slice(0, 6);
  const lastTwo  = areas.slice(6);

  return (
    <div className="bg-white py-16 px-4">
    
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="font-poppins text-[37px] leading-[60px] font-bold text-[#1c1d3e]">
          Our Commercial Carpet Cleaning<br/>
          Servicing Areas Include
        </h2>
      </div>

    
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 justify-items-center">
        {firstSix.map((title, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-[#eff2f7] w-[370px] h-[265px] p-6"
          >
            <p className="font-poppins text-[30px] font-bold text-[#1c1d3e] text-center mb-[30px]">
              {title}
            </p>
            <div className="w-[80px] h-[80px] bg-gray-200 rounded-full" />
          </div>
        ))}
      </div>

     
      <div className="max-w-7xl mx-auto flex justify-center space-x-8 mt-12">
        {lastTwo.map((title, i) => (
          <div
            key={i+6}
            className="flex flex-col items-center bg-[#eff2f7] w-[370px] h-[265px] p-6"
          >
            <p className="font-poppins text-[30px] font-bold text-[#1c1d3e] text-center mb-[30px]">
              {title}
            </p>
            <div className="w-[80px] h-[80px] bg-gray-200 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}