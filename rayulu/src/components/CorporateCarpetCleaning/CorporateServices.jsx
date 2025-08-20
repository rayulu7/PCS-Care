import React from "react";
import { useNavigate, Link } from "react-router-dom";
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
    path: "/services/hotel-carpet-care"
  },
  {
    image: './sofaCleaningService.jpg',
    title: "Sofa Cleaning",
    description: "Get your sofas cleaned with Eco-Friendly Chemicals containing only 10% moisture to increase the life of Fabric.",
    path: "/services/corporate-sofa-cleaning"
  },
  {
    image: './chairCleaningService.jpg',
    title: "Chair Cleaning",
    description: "Get your Chair cleaned with Eco-Friendly Chemicals containing only 10% moisture to increase the life of Fabric.",
    path: "/services/conference-room-care"
  },
  {
    image: "./pestControlService.jpg",
    title: "Pest Control",
    description: "Protect your office/Industry against pests by engaging our experts & professionals with 19+ years of experience.",
    path: "/services/reception-area-cleaning"
  },
  {
    image: "./workstationService.jpg",
    title: "Workstation Panels/Rollers",
    description: "PCS Care improves the Indoor Air Quality by making the panels/rollers allergen and dust free.",
    path: "/services/workspace-sanitization"
  },
  {
    image: "./deepCleaningService.avif",
    title: "Deep Cleaning",
    description: "Our professional team ensures a clean and dust-free office atmosphere with optimum indoor air quality to increase employee productivity.",
    path: "/services/boardroom-detailing"
  }
];

const ServiceCard = ({ image, title, description, path }) => {
  const navigate = useNavigate();
  return (
    
    <div
      className="relative bg-white rounded-xl shadow-md border border-gray-200 flex flex-col items-center px-6 py-8 sm:px-8 sm:py-12 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 w-full max-w-md mx-auto group cursor-pointer"
      style={{ minHeight: '480px', minWidth: '260px', maxWidth: '340px' }}
      onClick={() => navigate(path)}
    >
      <div className="w-full flex flex-col items-center">
        <img src={image} alt={title} className="h-32 w-32 sm:h-40 sm:w-40 object-cover rounded-md mb-6 z-10 relative" />
      </div>
      <div className="flex flex-col items-center w-full z-10 relative flex-1">
        <h3 className="text-2xl font-poppins text-gray-800 mb-3 text-center group-hover:text-white transition-colors">{title}</h3>
        <p className="text-gray-600 font-poppins  mb-6 text-center group-hover:text-white transition-colors">{description}</p>
        <Link
          to={path}
          className=" font-poppins text-[#f47b00] font-semibold hover:underline text-lg group-hover:text-white transition-colors"
          onClick={(e) => e.stopPropagation()}
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
  <section className="py-12 bg-gray-50">
    <div className="max-w-7xl mx-auto px-2 sm:px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Services</h2>
      <div className="flex flex-col gap-10">
        
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 justify-center">
          {cardData.slice(0, 3).map((card, idx) => (
            <ServiceCard key={idx} {...card} />
          ))}
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 justify-center">
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