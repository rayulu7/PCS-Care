import React from 'react';

const CorporateProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: "Prior Site Inspection",
      description: "Thorough assessment of carpet condition, stains, and fabric type to determine the best cleaning approach.",
    },
    {
      number: 2,
      title: "Prespray for removal of loose dust",
      description: "Application of specialized pre-treatment solution to loosen embedded dirt and prepare fibers for deep cleaning.",
    },
    {
      number: 3,
      title: "Stain Removal",
      description: "Targeted treatment of specific stains using professional-grade solutions tailored to different stain types.",
    },
    {
      number: 4,
      title: "Application of encapsulating/shampooing chemical and agitation",
      description: "Deep cleaning process using advanced encapsulation technology with mechanical agitation for maximum soil removal.",
    },
    {
      number: 5,
      title: "Deep vacuuming to remove encapsulated dust particles",
      description: "High-powered extraction to remove all loosened dirt, chemicals, and moisture, leaving carpets fresh and clean.",
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="text-center mb-16">
          <h2 className="font-bold text-gray-900 mb-6" style={{ fontFamily: '"Poppins", sans-serif', fontSize: '37px', lineHeight: '1.2' }}>
            Our Professional Carpet Cleaning Services
            <span className="block mt-2 text-gray-900">Process</span>
          </h2>
        </div>

       
        <div className="space-y-12">
      
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.slice(0, 3).map((step, index) => {
              return (
                <div
                  key={step.number}
                  className="relative"
                >
            
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 h-full flex flex-col">

                 
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    
                      </div>
                    </div>

                  
                    <h3 className="text-base font-semibold text-gray-900 text-center mb-3">
                      Step {step.number}
                    </h3>

                              
                    <h4 className="text-lg font-bold text-gray-800 text-center mb-4">
                      {step.title}
                    </h4>

                  
                    <p className="text-sm text-gray-600 text-center leading-relaxed flex-grow">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {steps.slice(3, 5).map((step, index) => {
              return (
                <div
                  key={step.number}
                  className="relative"
                >
              
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 h-full flex flex-col">

               
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                   
                      </div>
                    </div>

       
                    <h3 className="text-base font-semibold text-gray-900 text-center mb-3">
                      Step {step.number}
                    </h3>

                                 
                    <h4 className="text-lg font-bold text-gray-800 text-center mb-4">
                      {step.title}
                    </h4>

                 
                    <p className="text-sm text-gray-600 text-center leading-relaxed flex-grow">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateProcessSection;