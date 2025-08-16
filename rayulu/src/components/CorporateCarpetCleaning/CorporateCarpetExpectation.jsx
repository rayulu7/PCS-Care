import React from 'react';
import ProcessSection from './CorporateCarpetProcess';

const points = [
  "Removes Dirt and Stains from the Carpet.",
  "Kills allergens that cause ill health.",
  "Improve Air Quality in your space.",
  "Increases the life of carpet."
];

export default function CorporateCarpetExpectSection() {
  return (
    <>
      <ProcessSection />
      <div className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <img
                src="/carpetCleaning.jpg"
                alt="Carpet cleaning demonstration"
                className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[37px] leading-snug md:leading-[50px] lg:leading-[70px] font-bold text-[#1c1d3e] mb-6 sm:mb-8 md:mb-12 text-left">
                What Can You Expect From Our Carpet Cleaning Services
              </h2>

              <ul className="space-y-4 sm:space-y-6">
                {points.map((text, i) => (
                  <li key={i} className="flex items-start">
                    <span
                      className="
                        flex-shrink-0
                        w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10
                        flex items-center justify-center
                        bg-[#FFC107]
                        text-white font-bold
                        text-base sm:text-lg
                        rounded-full
                        mr-3 sm:mr-4
                      "
                    >
                      {i + 1}
                    </span>
                    <span className="text-base sm:text-lg md:text-xl leading-relaxed sm:leading-[32px] text-[#1c1d3e]">
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