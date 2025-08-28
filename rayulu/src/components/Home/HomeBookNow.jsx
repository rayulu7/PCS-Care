import React from "react";

const HomeFlipCards = () => {
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

  return (
    <div className="min-h-[50vh] bg-gray-100 py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 font-poppins sm:mb-12">
          Avail Discounts
        </h1>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6 flex flex-col justify-center items-center h-72 sm:h-80"
            >
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
                </div>
              </div>

              {/* Price Section */}
              <div className="mt-4 text-center ">
                <p className="text-xl sm:text-2xl font-extrabold font-poppins text-orange-400 mb-2">
                  {service.discount}
                </p>
                <a
                  href={service.note}
                  className="inline-block bg-orange-500 font-poppins hover:bg-orange-600 text-white py-2 px-4 rounded-full text-xs sm:text-sm mt-2 transition-colors"
                >
                  Know More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFlipCards;
