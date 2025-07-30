
import React from 'react';
import { ArrowRight, Shield, Clock, Star, CheckCircle } from 'lucide-react';

const HomeCarpetTypes = () => {
  const services = [
    {
      title: "Sofa Cleaning",
      price: "Starts at ₹299",
      originalPrice: "₹399",
      description:
        "Comprehensive deep cleaning for your sofa with advanced stain removal techniques. Professional shampooing and sanitization included.",
      features: ["Deep cleaning", "Stain removal", "Sanitization"],
      image:
        "https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop",
    },
    {
      title: "Mattress Cleaning",
      price: "Starts at ₹999",
      originalPrice: "₹1299",
      description:
        "Specialized deep cleaning for mattresses with allergen removal and dust mite elimination. Health-focused cleaning solutions.",
      features: ["Allergen removal", "Dust mite elimination", "Deep sanitization"],
      image:
        "https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop",
    },
    {
      title: "Chairs & Dining Furniture",
      price: "Starts at ₹50",
      originalPrice: "₹80",
      description:
        "Complete cleaning solution for dining furniture and chairs. Fabric protection and wood care included for lasting results.",
      features: ["Fabric protection", "Wood care", "Complete restoration"],
      image:
        "https://images.pexels.com/photos/4239140/pexels-photo-4239140.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop",
    },
  ];

  const terms = [
    {
      icon: <Shield className="w-4 h-4" />,
      text:
        "PCS team will not move heavy furniture – client responsible for furniture arrangement.",
    },
    {
      icon: <CheckCircle className="w-4 h-4" />,
      text: "Water & electricity connection must be provided by customers.",
    },
    {
      icon: <Star className="w-4 h-4" />,
      text: "Secure all valuables and fragile items before service begins.",
    },
    {
      icon: <Clock className="w-4 h-4" />,
      text:
        "Additional services or extra cleaning areas will be charged separately.",
    },
    {
      icon: <ArrowRight className="w-4 h-4" />,
      text:
        "Stain removal success depends on stain type & age – 100% removal not guaranteed.",
    },
  ];

  return (
    <>
      
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-500">Premium</span> Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional cleaning services with transparent pricing and clear
              terms
            </p>
          </div>

          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
            <div className="space-y-8">
              {services.map((service, idx) => {
                const orig = parseInt(
                  service.originalPrice.replace(/[₹,]/g, "")
                );
                const curr = parseInt(
                  service.price.replace(/[₹,]/g, "").split(" ")[2]
                );
                const savePct = Math.round(((orig - curr) / orig) * 100);
                return (
                  <div
                    key={idx}
                    className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  >
                    <div className="p-6 flex items-start justify-between">
                   
                      <div className="flex-1 pr-4">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-medium mb-2">
                          <Star className="w-3 h-3 mr-1" /> Pro Service
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                          {service.title}
                        </h3>
                        <div className="flex items-baseline space-x-2 mb-3">
                          <span className="text-2xl font-bold text-orange-500">
                            {service.price}
                          </span>
                          <span className="text-sm text-gray-400 line-through">
                            {service.originalPrice}
                          </span>
                          <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
                            Save {savePct}%
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.features.map((f, i2) => (
                            <span
                              key={i2}
                              className="inline-flex items-center bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                            >
                              <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                              {f}
                            </span>
                          ))}
                        </div>
                        <button className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm">
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-600" />
                  </div>
                );
              })}
            </div>

          
            <div>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden sticky top-8">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Terms & Conditions
                  </h3>
                  <p className="text-orange-100 text-sm mt-1">
                    Please read before booking
                  </p>
                </div>
                <div className="p-8 space-y-6">
                  {terms.map((term, i) => (
                    <div key={i} className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 group-hover:bg-orange-200 transition-colors">
                          {term.icon}
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors">
                        {term.text}
                      </p>
                    </div>
                  ))}
                  <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                    <p className="text-xs text-gray-600 text-center">
                      Questions about our terms?
                    </p>
                    <button className="w-full mt-2 text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors">
                      Contact Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hire Experts For Best Home Carpet Cleaning Services in Hyderabad
          </h2>
          <p className="text-base text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Home Carpets accumulate a lot of dust, dirt, stains and germs due to exposure to humans and wind. If not maintained properly carpets become one of the most unhygienic things in your home. A professional cleaning helps you prolong the carpet life and enhances its appearance. Carpet cleaning also keeps your surroundings healthy and hygienic throughout the day. <strong>PCS Care</strong> provides the best home carpet cleaning services in Hyderabad, we have 19+ years of experience in handling the home cleaning services like Carpet Cleaning, Chair Cleaning, Sofa Shampooing, Marble Polishing, Facade Cleaning, Workstation Panels Cleaning, Deep Cleaning and More. You can hire us and stay relaxed, we will take care of your home cleaning and its hygiene. Moreover, our cleaning chemicals are 100% eco-friendly and Green seal certified. Hire us today!
          </p>
        </div>
      </section>
    </>
  );
};

export default HomeCarpetTypes;