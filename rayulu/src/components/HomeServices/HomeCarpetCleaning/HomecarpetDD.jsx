
import React from 'react';

const Ddcarpet = () => {
  const dos = [
    "Clean your carpet regularly and make sure no dust accumulates daily.",
    "Wipe away any spills (oils, grease, liquids) immediately from your carpet.",
    "After cleaning with chemicals, expose the carpet to good ventilation and air for proper drying.",
    "Schedule regular professional deep cleaning to maintain quality and extend lifespan.",
    "Always test cleaning solutions on a small, hidden area before applying to the entire carpet."
  ];

  const donts = [
    "Avoid over-use of harsh chemicals—they can damage fibers and cause discoloration.",
    "Don’t use abrasive materials (hard brushes, scouring pads) to remove stains or dirt.",
    "Never soak your carpet—too much water leads to backing damage, mold growth, and shrinkage.",
    "Do not leave spills untreated—old stains become permanent and harder to remove.",
    "Don’t walk on freshly cleaned or wet carpets—they re-soil easily and fibers get misshapen."
  ];

  return (
    <section
      id="ddcarpet"
      className="
        font-[Poppins]
        py-24
        bg-gray-50
      "
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2
          className="
            text-5xl md:text-6xl
            font-bold
            text-gray-900
            text-center
            mb-12
          "
        >
          Do’s and Don’ts to Keep Your Carpet Clean and Safe
        </h2>

   
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
         
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">Do’s</h3>
            <ul className="list-disc pl-5 space-y-4 text-lg text-gray-700">
              {dos.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

       
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">Don’ts</h3>
            <ul className="list-disc pl-5 space-y-4 text-lg text-gray-700">
              {donts.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ddcarpet;