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
  const lastTwo = areas.slice(6);

  return (
    <div className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12">
        <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[37px] leading-snug md:leading-[60px] font-bold text-[#1c1d3e]">
          Our Commercial Carpet Cleaning<br className="hidden sm:block" />
          Servicing Areas Include
        </h2>
      </div>

      {/* First 6 items in responsive grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center">
        {firstSix.map((title, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-[#eff2f7] w-full max-w-[370px] h-[200px] sm:h-[230px] md:h-[265px] p-4 sm:p-5 md:p-6"
          >
            <p className="font-poppins text-xl sm:text-2xl md:text-[30px] font-bold text-[#1c1d3e] text-center mb-4 sm:mb-6 md:mb-[30px]">
              {title}
            </p>
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-[80px] md:h-[80px] bg-gray-200 rounded-full" />
          </div>
        ))}
      </div>

      {/* Last 2 items with responsive layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 xs:grid-cols-2 lg:flex lg:justify-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12">
        {lastTwo.map((title, i) => (
          <div
            key={i + 6}
            className="flex flex-col items-center bg-[#eff2f7] w-full max-w-[370px] h-[200px] sm:h-[230px] md:h-[265px] p-4 sm:p-5 md:p-6 mx-auto"
          >
            <p className="font-poppins text-xl sm:text-2xl md:text-[30px] font-bold text-[#1c1d3e] text-center mb-4 sm:mb-6 md:mb-[30px]">
              {title}
            </p>
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-[80px] md:h-[80px] bg-gray-200 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}