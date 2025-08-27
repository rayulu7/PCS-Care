import React from 'react';
import CorporateCities from './CorporateCities.jsx';
import CorporateCarpetAreasSection from './CorporateCarpetArea.jsx';
import CorporateAreasSection from './CorporateAreas.jsx';

const CorporateCarpetCleaningTypes = () => {
  const services = [
    {
      id: 1,
      title: "Encapsulation",
      image: "/Carpet 1.jpg",
      description:
        "Encapsulation involves a unique chemical solution that is used in the carpet cleaning. The polymers in the Encapsulation Solution encircle and trap the dirt particles in the carpet fibres. When the enclosed dirt dries, it becomes brittle and may be easily vacuumed away. While this low-moisture approach dries quickly and is highly recommended by all carpet manufacturers."
    },
    {
      id: 2,
      title: "Hot Water Injection Extraction (Steam Cleaning)",
      image: "/Carpet 2.jpg",
      description:
        "Hot Water Injection Extraction process uses hot water and a cleaning solution to treat the carpets. Hot water helps the carpet to loosen dirt and dust whereas the cleaning solution will remove the stains. Further, vacuum is used to extract or remove the dirty water from the carpet."
    },
    {
      id: 3,
      title: "Dry Shampooing",
      image: "/Carpet 3.jpg",
      description:
        "Special Carpet Shampoo is applied to the carpet using water as medium. The dirt and dust is absorbed by shampoo, which is further removed and carpet is dried. The whole process is worked-out with a Single Disc Machine, which is effective and economic."
    }
  ];

  const ServiceCard = ({ service }) => (
    <div
      className="
        group cursor-pointer
        bg-white border border-gray-200 rounded-2xl shadow-lg
        overflow-hidden flex flex-col
        w-full max-w-[420px] mx-auto
        transition-transform duration-300 hover:scale-[1.02]
      "
    >
      {/* Image with consistent ratio */}
      <div className="w-full aspect-[16/9] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
        <h3
          className="
            text-lg sm:text-xl font-bold mb-3 sm:mb-4
            text-gray-800 group-hover:text-[#ffc107]
            transition-colors duration-300
          "
        >
          {service.title}
        </h3>
        <p
          className="
            text-sm sm:text-[15px]
            leading-6 sm:leading-[27px]
            pt-2 sm:pt-4 pb-3 sm:pb-5
            text-black text-justify flex-1
          "
        >
          {service.description}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <div className="py-8 sm:py-10 md:py-12">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Types of Carpet Cleaning
          </h1>
        </div>

        {/* Services Grid */}
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
            {services.map(s => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </div>

      <CorporateCities />
      <CorporateAreasSection />
    </>
  );
};

export default CorporateCarpetCleaningTypes;
