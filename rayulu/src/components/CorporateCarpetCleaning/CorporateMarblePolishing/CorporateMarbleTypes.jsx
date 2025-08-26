import React from 'react';
import CorporateAreasSection from '../CorporateAreas';
import CorporateMarbleCities from './CorporateMarbleCities';
import CorporateMarbleAreas from './CorporateMarbleAreas';
import CorporateMarbleProcess from './CorporateMarbleProcess';
import CorporateMarbleExpectSection from './CorporateMarbleExpectation';
import ChooseUs from '../../Form/ChooseUs';
import CorporateMarbleQuestions from './CorporateMarbleQuestions';
import CorporateMarbleService from './CorporateMarbleServices';

const CorporateMarbleTypes = () => {
  const services = [
    {
      id: 1,
      title: "Indian Marbles",
      image: "/indian_marble1.avif",
      description: "Indian Marble Floors have a wide variety of patterns, different colour choices and elegance. They are notable for their luxurious look, affordable price and durability and are suitable for any type of space. A Few Indian Floor Marbles are Makrana White, Rajasthani Green, Indian Statuario, Onyx Marble and Many more."
    },
    {
      id: 2,
      title: "Italian Marbles",
      image: "/italian_mable1.avif",
      description: "Besides Indian Marble Floors, the other notable ones are Italian Marbles. Italian Marble Floors are also elegant in their look, style and elevates the beauty of any space. Few Italian Marbles are Carrara Marble, Calacatta Marble, Statuario Marble and Many more."
    },
    {
      id: 3,
      title: "All Types of Floors",
      image: "/marble2.avif",
      description: "Along with Indian Marbles and Italian Marbles, there are a wide variety of marble floors that are utilised in homes, offices, industries and other commercial spaces. PCS Care is capable of handling any type of marble floors to make them shiny and clean."
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
        w-full
        max-w-[400px]
        md:w-[400px]
        h-auto
        md:h-[693.6px]
        mx-auto
      "
    >
      <img
        src={service.image}
        alt={service.title}
        className="
          object-cover
          w-full
          h-[157px]
          md:h-[157px]
          border-b border-gray-200
        "
      />

      <div className="p-4 md:p-6 flex-1 flex flex-col">
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
            pt-2 md:pt-4
            pb-3 md:pb-5
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
      <div className="py-8 md:py-12">
        <div className="text-center mb-6 md:mb-8 px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
            We Handle All Types of Marble Floors
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-6 px-4">
          {services.map(s => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div>
      <CorporateMarbleCities />
      <CorporateMarbleAreas />
      <CorporateMarbleProcess />
      <CorporateMarbleService />
      <CorporateMarbleExpectSection />
      <ChooseUs />
      <CorporateMarbleQuestions />
    </>
  );
};

export default CorporateMarbleTypes;