import React from 'react';


const points = [
  "Removes dust, dirt and pathogens.",
  "Removes stains from floor and tiles.",
  "Protects your furniture, windows, doors and other items from damaging soon and improves their lifespan.",
  "Removes bad odours and enhances the air quality."
];

export default function CorporateDeepExpectSection() {
  return (
    <>
    
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
         
          <div className="w-full md:w-1/2">
            <img
              src="/deepcleaning2.avif"
              alt="Carpet cleaning demonstration"
              className="w-full h-400 rounded-lg shadow-md "
            />
          </div>

          
          <div className="w-full md:w-1/2">
            <h2 className=" font-poppins text-[37px] leading-[70px] font-bold text-[#1c1d3e] mb-12 text-left">
            Our Commercial and Office Deep Cleaning Services helps you to
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