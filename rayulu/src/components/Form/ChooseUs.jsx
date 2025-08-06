import React from 'react';
import { FaBuilding, FaLeaf, FaCertificate, FaTools } from 'react-icons/fa';

const ChooseUs = () => {
  const features = [
    {
      title: "Serving Corporate & Retail since 2005",
      description: "Nearly two decades of trusted service to businesses and retail establishments across the region.",
      bgColor: "bg-green-100",
      iconColor: "text-green-700",
      icon: <FaBuilding className="text-2xl" />
    },
    {
      title: "Eco-Friendly, Bio-degradable chemicals",
      description: "Safe, environmentally responsible cleaning solutions that protect your family and the planet.",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-700",
      icon: <FaLeaf className="text-2xl" />
    },
    {
      title: "Certified by U.S EPA, Woolsafe, and Green Seal",
      description: "Industry-leading certifications ensuring the highest standards of quality and environmental responsibility.",
      bgColor: "bg-green-100",
      iconColor: "text-green-700",
      icon: <FaCertificate className="text-2xl" />
    },
    {
      title: "State-of-the-art machinery",
      description: "Advanced equipment and cutting-edge technology for superior cleaning results every time.",
      bgColor: "bg-green-100",
      iconColor: "text-green-700",
      icon: <FaTools className="text-2xl" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Why Choose Us
          </h2>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              feature={feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ index, feature }) => (
  <div
    className="text-center group"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="flex justify-center mb-6">
      <div className={`w-20 h-20 ${feature.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        <div className={`${feature.iconColor}`}>
          {feature.icon}
        </div>
      </div>
    </div>

    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
      {feature.title}
    </h3>
    
  </div>
);

export default ChooseUs;
