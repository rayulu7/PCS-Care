import React from 'react';

const ServiceCard = ({ title, description, iconSrc, iconAlt, btnText, href }) => (
  <div className="rounded-lg shadow-lg overflow-hidden bg-white border border-gray-200">
    <div className="p-8 space-y-4 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-md mx-auto">
        <img src={iconSrc} alt={iconAlt} className="w-10 h-10 object-contain" />
      </div>
      <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-800 opacity-90">{description}</p>
      <a
        href={href}
        className="mt-4 inline-block px-6 py-2 bg-orange-600 text-white rounded-full font-medium"
      >
        {btnText}
      </a>
    </div>
  </div>
);

export default function TwoServiceBoxes() {
  return (
    <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
      <ServiceCard
        title="Corporate/Industrial"
        description="We provide professional service to take best care of your carpets, upholstery, floors etc. using eco-friendly, bio-degradable chemicals."
        iconSrc= "/desk.png"
        iconAlt="Corporate icon"
        btnText="Schedule Site Visit"
        href="/corporate"
      />
      <ServiceCard
        title="Home"
        description="Home Cleaning and Maintenance service by professionals with 19+ years of experience."
        iconSrc= "/property.png"
        iconAlt="Home icon"
        btnText="Book Now"
        href="/home"
      />
    </div>
  );
}