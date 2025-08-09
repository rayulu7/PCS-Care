
import React from 'react';


import ChooseUs from '../../Form/ChooseUs';

import CorporatePestCities from './CorporatePestCities';
import CorporatePestAreas from './CorporatePestAreas';
import CorporatePestProcess from './CorporatePestProcess';
import CorporatePestExpectSection from './CorporatePestExpectation';
import CorporatePestQuestions from './CorporatePestQuestions';



const CorporatePestTypes = () => {
  const services = [
    {
      id: 1,
      title: "Encapsulation",
      image: "/carpet1.jpg",
      description:
        "Encapsulation involves a unique chemical solution that is used in the carpet cleaning. The polymers in the Encapsulation Solution encircle and trap the dirt particles in the carpet fibres. When the enclosed dirt dries, it becomes brittle and may be easily vacuumed away. While this low-moisture approach dries quickly and is highly recommended by all carpet manufacturers."
    },
    {
      id: 2,
      title: "Hot Water Injection Extraction (Steam Cleaning)",
      image: "/carpet2.jpg",
      description:
        "Hot Water Injection Extraction process uses hot water and a cleaning solution to treat the carpets. Hot water helps the carpet to loosen dirt and dust whereas the cleaning solution will remove the stains. Further, vacuum is used to extract or remove the dirty water from the carpet."
    },
    {
      id: 3,
      title: "Dry Shampooing",
      image: "/carpet3.jpg",
      description:
        "Special Carpet Shampoo is applied to the carpet using water as medium. The dirt and dust is absorbed by shampoo, which is further removed and carpet is dried. The whole process is worked-out with a Single Disc Machine, which is effective and economic."
    }
  ];

  const ServiceCard = ({ service }) => (
     
     
    <div
      className="
        group
        cursor-pointer
        bg-white
        border border-gray-200
        rounded-2xl
        shadow-lg
        overflow-hidden
        flex flex-col
        w-[400px]
        h-[693.6px]
      "
    >
      
      <img
        src={service.image}
        alt={service.title}
        className="
          object-cover
          w-full
          h-[157px]
          border-b border-gray-200
        "
      />

     
      <div className="p-6 flex-1 flex flex-col">
        <h3
          className="
            text-xl font-bold mb-4
            text-gray-800
            group-hover:text-[#ffc107]
            transition-colors duration-300
          "
        >
          {service.title}
        </h3>
        <p
          className="
            text-[15px]
            leading-[27px]
            pt-4
            pb-5
            text-black
            text-justify
            flex-1
          "
        >
          {service.description}
        </p>
      </div>
    </div>
  );

  return (
    <>
    {/* <div className="py-12">
    
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
        We Handle All Types of Marble Floors
        </h1>
      </div>

      
      <div className="flex justify-center space-x-6 px-4">
        {services.map(s => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
    </div> */}
    <div>
      <img src = "/pest.avif" alt = "pest-control" className = "w-full h-full object-cover" />
    </div>
    <CorporatePestCities />
    <CorporatePestAreas />
    {/* <CorporatePestProcess /> */}
    <CorporatePestExpectSection />
    <ChooseUs />
    <CorporatePestQuestions />
   </>
  );
};

export default CorporatePestTypes;