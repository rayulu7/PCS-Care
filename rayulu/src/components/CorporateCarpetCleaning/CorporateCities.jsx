import React from 'react';

const CorporateCities = () => {
  const firstRow = [
    { name: 'Hyderabad', img: "/charminar.png" },
    { name: 'Mumbai', img: "/mumbai.png" },
    { name: 'Pune', img: "/pune.png" },
  ];
  const secondRow = [
    { name: 'Bangalore', img: "/bangalore.png" },
    { name: 'Chennai', img: "/chennai.png" },
  ];

  return (
    <div className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      {/* Heading - Responsive */}
      <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black">
          Our Carpet Cleaning & Maintenance Services Available In
        </h2>
      </div>

      {/* First Row - Responsive */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
        {firstRow.map(city => (
          <div
            key={city.name}
            className="flex flex-col items-center bg-white w-full sm:w-[300px] md:w-[585px] h-[150px] sm:h-[170px] md:h-[197.1px]"
          >
            <img
              src={city.img}
              alt={city.name}
              className="mt-2 sm:mt-3 md:mt-4 w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[117px] md:h-[117px] object-contain"
            />
            <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-[15px] leading-normal sm:leading-[27px] text-black font-bold text-center">
              Carpet cleaning services in<br />
              {city.name}
            </p>
          </div>
        ))}
      </div>

      {/* Second Row - Responsive */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
        {secondRow.map(city => (
          <div
            key={city.name}
            className="flex flex-col items-center bg-white w-full sm:w-[300px] md:w-[585px] h-[150px] sm:h-[170px] md:h-[197.1px]"
          >
            <img
              src={city.img}
              alt={city.name}
              className="mt-2 sm:mt-3 md:mt-4 w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[175.5px] md:h-[175.5px] object-contain"
            />
            <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-[15px] leading-normal sm:leading-[27px] text-black font-bold text-center">
              Carpet cleaning services in<br />
              {city.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CorporateCities;