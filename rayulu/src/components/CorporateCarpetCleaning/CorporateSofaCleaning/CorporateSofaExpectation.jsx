import React from 'react';


const points = [
  "Removes dust and dirt.",
  "Removes stains.",
  "Protects your sofa fabric and increases the lifespan.",
  "Enhance the look of your sofa.",
  "Removes bad odours and improves air quality."
];

export default function CorporateSofaExpectSection() {
  return (
    <>
    
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
         
          <div className="w-full md:w-1/2">
            <img
              src="/sofa3.avif"
              alt="Carpet cleaning demonstration"
              className="w-600 h-300 rounded-lg shadow-md "
            />
          </div>

          
          <div className="w-full md:w-1/2">
            <h2 className=" font-poppins text-[37px] leading-[70px] font-bold text-[#1c1d3e] mb-12 text-left">
            What Can You Expect From Our Sofa Cleaning Services
            </h2>

            <ul className="space-y-6">
              {points.map((text, i) => (
                <li key={i} className="flex items-start">
                  <span
                    className="
                      flex-shrink-0
                      w-10 h-10
                      flex items-center justify-center
                      bg-[#FFC107]
                      text-white font-bold
                      text-lg
                      rounded-full
                      mr-4
                    "
                  >
                    {i + 1}
                  </span>
                  <span className="text-xl leading-[32px] text-[#1c1d3e]">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}