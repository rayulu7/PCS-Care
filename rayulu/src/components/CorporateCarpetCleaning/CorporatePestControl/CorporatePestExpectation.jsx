import React from 'react';


const points = [
  "Kills mosquitoes, flies, cockroaches, termites and other types of pests.",
  "Remove species like rats.",
  "Enhance your surrounding and floor cleanliness.",
  "Makes your space hygienic.",
  "Lifespan of furniture and other materials in your office will be increased.",
  "Remove bad odours and improves air quality too",
];

export default function CorporatePestExpectSection() {
  return (
    <>
    
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
         
          <div className="w-full md:w-1/2">
            <img
              src="/pest2.avif"
              alt="Carpet cleaning demonstration"
              className="w-full h-400 rounded-lg shadow-md "
            />
          </div>

          
          <div className="w-full md:w-1/2">
            <h2 className=" font-poppins text-[37px] leading-[70px] font-bold text-[#1c1d3e] mb-12 text-left">
            From Our Pest Control Services
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