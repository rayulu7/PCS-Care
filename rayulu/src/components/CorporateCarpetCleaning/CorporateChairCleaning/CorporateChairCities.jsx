
import React from 'react';



const CorporateChairCities = () => {
  const firstRow  = [
    { name: 'Hyderabad', img: "/charminar.png"  },
    { name: 'Mumbai',    img: "/mumbai.png"  },
    { name: 'Pune',      img: "/pune.png" },
  ];
  const secondRow = [
    { name: 'Bangalore', img: "/bangalore.png"},
    { name: 'Chennai',   img: "/chennai.png"  },
  ];

  return (
    <div className="bg-white py-16 px-4">
    
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-black">
        Our Services Available In
        </h2>
        <p className = "text-base mt-4 font-normal"><span className = "text-[#1c1d3e] font-bold">PCS Care</span> is providing commercial and office chair cleaning services in 5 cities currently.</p>
      </div>
      
     
      <div className="max-w-7xl mx-auto flex justify-center space-x-8 mb-12">
        {firstRow.map(city => (
          <div
            key={city.name}
            className="
              flex flex-col items-center bg-white
              w-[585px] h-[197.1px]
            "
          >
            <img
              src={city.img}
              alt={city.name}
              className="mt-4 w-[117px] h-[117px] object-contain"
            />
            <p className="mt-2 text-[15px] leading-[27px] text-black font-bold text-center">
              Chair Cleaning Services in<br />
              {city.name}
            </p>
          </div>
        ))}
      </div>

     
      <div className="max-w-7xl mx-auto flex justify-center space-x-8">
        {secondRow.map(city => (
          <div
            key={city.name}
            className="
              flex flex-col items-center bg-white
              w-[585px] h-[197.1px]
            "
          >
            <img
              src={city.img}
              alt={city.name}
              className="mt-4 w-[175.5px] h-[175.5px] object-contain"
            />
            <p className="mt-2 text-[15px] leading-[27px] text-black font-bold text-center">
              Chair Cleaning Services in<br />
              {city.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CorporateChairCities;