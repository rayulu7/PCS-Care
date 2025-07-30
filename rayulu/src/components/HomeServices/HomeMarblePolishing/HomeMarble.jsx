import React from 'react';
import HomeMarbleHeading from './HomeMarbleHeading';
import HomeMarbleTerms from './HomeMarbleTerms';
import ContactForm from '../../Form/Form';
import ClientsCarousel from '../../OurClients/Clients';
import TestimonialCarousel from '../../Testimonials/Testimonial';
import Footer from '../../Footer/Footer';

const HomeMarble = () => {
  const features = [
    "19+ Years of Professional Marble Polishing Experience",
    "100% Guaranteed Satisfaction",
    "Certified by U.S EPA, Woolsafe and Greenseal",
    "24/7 Customer Support",
    "Eco-Friendly Green Seal Certified Chemicals"
  ];

  return (
    <div>
      <ContactForm />
      <div className="min-h-screen bg-gray-50 font-poppins">
        <div className="max-w-6xl mx-auto p-8">
          <HomeMarbleHeading />
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <div className="bg-white rounded-lg shadow-sm w-full md:w-[600px] p-6">
              <div className="text-gray-700 text-justify space-y-4">
                <p className="text-base font-normal leading-[27px] m-0">
                  Keep your home neat and hygienic with professional marble polishing services. PCS Care has a team of industry experts who have 19+ years of experience in handling residential and commercial marble polishing.
                </p>
                <p className="text-base font-normal leading-[27px] m-0">
                  Professional maintenance of marble not only restores the shine but also increases the life-span of your floors. Our professionals ensure dust-free, stain-free, and sparkling marble surfaces.
                </p>
                <p className="text-base font-normal leading-[27px] m-0">
                  As our team has decades of expertise, we know how to treat all kinds of marble installed in your home. Marble polishing is done using advanced techniques to keep the marble dust free and last longer.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm w-full md:w-[600px] p-6">
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 text-lg leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <HomeMarbleTerms />
        </div>
        <ClientsCarousel />
        <TestimonialCarousel />
        <Footer />
      </div>
    </div>
  );
};

export default HomeMarble;
