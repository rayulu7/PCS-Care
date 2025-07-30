
import React from "react";
import { useNavigate } from "react-router-dom";
import CorporateOfficialForm from "./CorporateOfficialForm";

const cardData = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400",
    title: "Carpet Cleaning",
    description: "Make your carpets dust-free and allergen-free using our low moisture, eco-friendly and biodegradable chemicals.",
    link: "/services/office-carpet-cleaning"
  },
  {
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400",
    title: "Marble Polishing",
    description: "Our professional team restores the shine of your precious marble floor using the best chemicals and machinery.",
    link: "/services/hotel-carpet-care"
  },
  {
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400",
    title: "Sofa Cleaning",
    description: "Get your sofas cleaned with Eco-Friendly Chemicals containing only 10% moisture to increase the life of Fabric.",
    link: "/services/corporate-sofa-cleaning"
  },
  {
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400",
    title: "Chair Cleaning",
    description: "Get your Chair cleaned with Eco-Friendly Chemicals containing only 10% moisture to increase the life of Fabric.",
    link: "/services/conference-room-care"
  },
  {
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=400",
    title: "Pest Control",
    description: "Protect your office/Industry against pests by engaging our experts & professionals with 19+ years of experience.",
    link: "/services/reception-area-cleaning"
  },
  {
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400",
    title: "Workstation Panels/Rollers",
    description: "PCS Care improves the Indoor Air Quality by making the panels/rollers allergen and dust free.",
    link: "/services/workspace-sanitization"
  },
  {
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400",
    title: "Deep Cleaning",
    description: "Our professional team ensures a clean and dust-free office atmosphere with optimum indoor air quality to increase employee productivity.",
    link: "/services/boardroom-detailing"
  }
];

const ServiceCard = ({ image, title, description, link }) => {
  const navigate = useNavigate();
  return (
    
    <div
      className="relative bg-white rounded-xl shadow-md border border-gray-200 flex flex-col items-center px-6 py-8 sm:px-8 sm:py-12 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 w-full max-w-md mx-auto group cursor-pointer"
      style={{ minHeight: '480px', minWidth: '260px', maxWidth: '340px' }}
      onClick={() => navigate(link)}
    >
      <div className="w-full flex flex-col items-center">
        <img src={image} alt={title} className="h-32 w-32 sm:h-40 sm:w-40 object-cover rounded-md mb-6 z-10 relative" />
      </div>
      <div className="flex flex-col items-center w-full z-10 relative flex-1">
        <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center group-hover:text-white transition-colors">{title}</h3>
        <p className="text-gray-600 text-base mb-6 text-center group-hover:text-white transition-colors">{description}</p>
        <button
          className="mt-auto text-[#f47b00] font-semibold hover:underline text-lg group-hover:text-white transition-colors"
          onClick={e => { e.stopPropagation(); navigate(link); }}
        >
          Read More
        </button>
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
  </>
);

export default CorporateServices;
