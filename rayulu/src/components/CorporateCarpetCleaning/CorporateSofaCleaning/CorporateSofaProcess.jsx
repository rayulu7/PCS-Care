import React from 'react';

const CorporateSofaProcess = () => {
  const steps = [
    { number: 1, title: "Pre-Vacuuming to extract the dust" },
    { number: 2, title: "Applies foam to trap dust particles." },
    { number: 3, title: "Removal of foam along with dust particles using heavy duty vacuum cleaner." },
    
    
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="font-bold text-gray-900 mb-6"
            style={{ fontFamily: '"Poppins", sans-serif', fontSize: '37px', lineHeight: '1.2' }}
          >
            Our Professional Sofa Cleaning Services
            <span className="block mt-2 text-gray-900">Process</span>
          </h2>
        </div>

        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.slice(0, 3).map((step) => (
              <div key={step.number} className="relative">
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 h-full flex flex-col items-center">
                  <h3 className="text-xl font-extrabold text-orange-500 mb-3">
                    Step {step.number}
                  </h3>
                  <h4 className="text-lg font-bold text-gray-800 text-center">
                    {step.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {steps.slice(3, 4).map((step) => (
              <div key={step.number} className="relative">
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 h-full flex flex-col items-center">
                  <h3 className="text-xl font-extrabold text-orange-500 mb-3">
                    Step {step.number}
                  </h3>
                  <h4 className="text-lg font-bold text-gray-800 text-center">
                    {step.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateSofaProcess;
