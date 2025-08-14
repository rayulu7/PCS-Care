import React, { useState } from 'react';

const HomeFlipCards = () => {
  const [activeCard, setActiveCard] = useState(null);

  const services = [
    {
      title: "Deep Cleaning",
      features: [
        "Scrubbing",
        "Disinfecting",
        "Removing accumulated dust and debris"
      ],
      details: "3 Services / Year",
      price: "Rs. 10907/-",
      lastBooking: "Last Booking on Jul 08, 2025.07.04am"
    },
    {
      title: "Marble Cleaning",
      features: [
        "Stain Removal",
        "Polishing + sealing"
      ],
      details: "3 Services / Year",
      price: "Rs. 8350/-",
      lastBooking: "Last Booking on Jul 08, 2025.04.47am"
    },
    {
      title: "Sofa Cleaning",
      features: [
        "Vacuuming",
        "Spot Treatment",
        "Rinsing + Extraction + Drying"
      ],
      details: "6 Services / Year",
      price: "Rs. 14999/-",
      lastBooking: "Last Booking on Jul 07, 2025.11.23am"
    },
    {
      title: "Carpet Cleaning",
      features: [
        "Steam Cleaning",
        "Dry Cleaning",
        "Shampooing + Bonnet Cleaning"
      ],
      details: "2 Services / Year",
      price: "Rs. 6500/-",
      lastBooking: "Last Booking on Jul 06, 2025.09.15am"
    }
  ];

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="min-h-[50vh] bg-gray-50 py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">RECOMMENDED</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flip-card h-72 sm:h-80 w-full cursor-pointer"
              onClick={() => toggleCard(index)}
            >
              <div className={`flip-card-inner w-full h-full ${activeCard === index ? 'flipped' : ''}`}>
                {/* Front Card */}
                <div className="flip-card-front bg-orange-500 text-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6 flex flex-col justify-between">
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">{service.title}</h2>
                    <ul className="space-y-1 sm:space-y-2 mb-2 sm:mb-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-xs sm:text-sm">{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center my-2 sm:my-4">
                    <div className="relative group">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-8 w-8 sm:h-10 sm:w-10 mx-auto animate-bounce text-white opacity-90" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={1.5} 
                          d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" 
                        />
                      </svg>
                      <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        Flip Me!
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs sm:text-sm font-semibold">{service.details}</p>
                    <p className="text-base sm:text-lg font-bold my-1 sm:my-2">{service.price}</p>
                  </div>
                </div>
                
                {/* Back Card */}
                <div className="flip-card-back bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6 flex flex-col justify-between border-2 border-orange-500">
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-orange-500">{service.title}</h2>
                    <p className="text-gray-700 mb-2 sm:mb-4 text-xs sm:text-sm">{service.lastBooking}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-4 sm:py-2 sm:px-6 rounded-full mb-2 sm:mb-4 transition-colors text-sm sm:text-base">
                      Book Now
                    </button>
                    <a href="#" className="text-orange-500 hover:underline text-xs sm:text-sm">
                      Click Here To Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
        .flip-card-inner.flipped {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default HomeFlipCards;