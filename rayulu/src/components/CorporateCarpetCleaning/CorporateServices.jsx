import React from "react";
import { Link } from "react-router-dom";
import CorporateOfficialForm from "./CorporateOfficialForm";
import CorporateAbout from "./CorporateAbout";
import CorporateAreasSection from "./CorporateAreas";
import ChooseUs from "../Form/ChooseUs";

const cardData = [
  {
    image: './carpetCleaningService.jpg',
    title: "Carpet Cleaning",
    description: "Make your carpets dust-free and allergen-free using our low moisture, eco-friendly and biodegradable chemicals.",
    path: "/services/office-carpet-cleaning"
  },
  {
    image: './marblePolishingService.jpg',
    title: "Marble Polishing",
    description: "Our professional team restores the shine of your precious marble floor using the best chemicals and machinery.",
    path: "/marble-polishing"
  },
  {
    image: './sofaCleaningService.jpg',
    title: "Sofa Cleaning",
    description: "Get your sofas cleaned with Eco-Friendly Chemicals containing only 10% moisture to increase the life of Fabric.",
    path: "/services/sofa-cleaning"
  },
  {
    image: './chairCleaningService.jpg',
    title: "Chair Cleaning",
    description: "Get your Chair cleaned with Eco-Friendly Chemicals containing only 10% moisture to increase the life of Fabric.",
    path: "/services/chair-cleaning"
  },
  {
    image: "./pestControlService.jpg",
    title: "Pest Control",
    description: "Protect your office/Industry against pests by engaging our experts & professionals with 19+ years of experience.",
    path: "/services/pest-control"
  },
  {
    image: "./workstationService.jpg",
    title: "Workstation Panels/Rollers",
    description: "PCS Care improves the Indoor Air Quality by making the panels/rollers allergen and dust free.",
    path: "/services/workstation-cleaning"
  },
  {
    image: "./deepCleaningService.avif",
    title: "Deep Cleaning",
    description: "Our professional team ensures a clean and dust-free office atmosphere with optimum indoor air quality to increase employee productivity.",
    path: "/services/deep-cleaning"
  }
];

const ServiceCard = ({ image, title, description, path }) => {
  return (
    <div className="relative bg-white rounded-xl shadow-md border border-gray-200 flex flex-col items-center px-4 sm:px-6 py-6 sm:py-8 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 w-full max-w-md mx-auto group"
      style={{ minHeight: '420px', minWidth: '260px', maxWidth: '340px' }}
    >
      <Link to={path} className="w-full flex flex-col items-center">
        <img
          src={image}
          alt={title}
          className="h-28 w-28 sm:h-32 sm:w-32 object-cover rounded-md mb-4 sm:mb-6 z-10 relative"
        />
      </Link>
      <div className="flex flex-col items-center w-full z-10 relative flex-1 justify-between">
        <div className="w-full text-center">
          <h3 className="text-xl sm:text-2xl font-poppins text-gray-800 mb-1 sm:mb-3 group-hover:text-white transition-colors">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 font-poppins mb-2 sm:mb-6 group-hover:text-white transition-colors">
            {description}
          </p>
        </div>
        <Link
          to={path}
          className="mt-auto font-poppins text-[#f47b00] font-semibold hover:underline text-base sm:text-lg group-hover:text-white transition-colors"
        >
          Read More
        </Link>
      </div>

      <div className="absolute inset-0 rounded-xl pointer-events-none transition-colors duration-200 group-hover:bg-[#fd7e14] z-0" />
    </div>
  );
};

const CorporateServices = () => (
  <>
    <CorporateOfficialForm />
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-gray-800">
          Our Services
        </h2>
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-center">
            {cardData.slice(0, 3).map((card, idx) => (
              <ServiceCard key={idx} {...card} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-center">
            {cardData.slice(3, 6).map((card, idx) => (
              <ServiceCard key={idx + 3} {...card} />
            ))}
          </div>
          <div className="flex justify-center">
            <div className="w-full sm:w-auto">
              <ServiceCard {...cardData[6]} />
            </div>
          </div>
        </div>
      </div>
    </section>
    <CorporateAbout />
    <CorporateAreasSection />
    <ChooseUs />
  </>
);

export default CorporateServices;