import React, { useState } from "react";

const HomeFlipCards = () => {
  const [activeCard, setActiveCard] = useState(null);

  const services = [
    {
      details: "2 Services / Year",
      discount: "10% off",
      note: "#contact-us",
      lastBooking: "Last Booking on Aug 26",
    },
    {
      details: "3 Services / Year",
      discount: "12.5% off",
      note: "#contact-us",
      lastBooking: "Last Booking on Aug 23",
    },
    {
      details: "4 Services / Year",
      discount: "15% off",
      note: "#contact-us",
      lastBooking: "Last Booking on Aug 25",
    },
    {
      details: "6 Services / Year",
      discount: "17.5% off",
      note: "#contact-us",
      lastBooking: "Last Booking on Aug 21",
    },
  ];

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="min-h-[50vh] bg-gray-100 py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 font-poppins sm:mb-12">
          Avail Discounts
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flip-card h-72 sm:h-80 w-full cursor-pointer"
              onClick={() => toggleCard(index)}
            >
              <div
                className={`flip-card-inner w-full h-full ${
                  activeCard === index ? "flipped" : ""
                }`}
              >
                {/* Front Card */}
                <div className="flip-card-front bg-gray-800 text-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6 flex flex-col justify-center items-center">
                  <h2 className="text-lg sm:text-xl font-bold mb-4 font-poppins text-center">
                    {service.details}
                  </h2>

                  <div className="flex flex-col items-center justify-center my-4">
                    <div className="relative group">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 sm:h-10 sm:w-10 mx-auto animate-bounce text-orange-400 opacity-90"
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

                  {/* Price Section */}
                  <div className="mt-4 text-center">
                    <p className="text-xl sm:text-2xl font-extrabold font-poppins text-orange-400">
                      {service.discount}
                    </p>
                    <a
                      href={service.note}
                      className="inline-block bg-orange-500 font-poppins hover:bg-orange-600 text-white py-1 px-4 rounded-full text-xs sm:text-sm mt-2 transition-colors"
                    >
                      Know More
                    </a>
                  </div>
                </div>

                {/* Back Card */}
                <div className="flip-card-back bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6 flex flex-col justify-center items-center border-2 border-orange-400">
                  <h2 className="text-lg sm:text-xl font-bold mb-4 text-orange-500 font-poppins text-center">
                    {service.details}
                  </h2>
                  <p className="text-gray-700 mb-6 text-xs sm:text-sm font-poppins text-center">
                    {service.lastBooking}
                  </p>
                  <div className="flex flex-col items-center">
                    <button className="bg-orange-500 font-poppins hover:bg-orange-600 text-white py-2 px-6 rounded-full mb-3 transition-colors">
                      Book Now
                    </button>
                    <a
                      href="#contact-us"
                      className="text-orange-500 font-poppins hover:underline text-xs sm:text-sm"
                    >
                      Click Here To Know More
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
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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
