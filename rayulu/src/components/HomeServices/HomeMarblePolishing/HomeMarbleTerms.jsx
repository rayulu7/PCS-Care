
import React from 'react';

const HomeMarbleTerms = () => {
  const terms = [
    "PCS team will not move any heavy furniture, which has to be done by the client.",
    "Customers are requested to provide Water and Electric connection.",
    "Removal of personal belongings from cabinets and drawers not within the scope of work.",
    "Customers are requested to lock all valuables during the service.",
    "Any other additional work will be charged additionally.",
    "Stain removal cannot be guaranteed 100%. However, best effort will be made to remove them."
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Terms &amp; Conditions:
          </h2>
          <ul className="space-y-4 text-gray-700">
            {terms.map((text, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-orange-500 mr-3 text-xl leading-none">&raquo;</span>
                <p className="flex-1 leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeMarbleTerms;
