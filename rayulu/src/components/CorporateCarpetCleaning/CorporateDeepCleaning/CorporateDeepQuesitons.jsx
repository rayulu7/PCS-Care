import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const CorporateDeepQuestions = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      question: "What is the difference between regular cleaning and deep cleaning?",
      answer:
        "Regular cleaning involves sweeping, mopping, dusting and emptying of trash. This goes in regular intervals like weekly or bi-weekly which takes an hour to complete. Regular cleaning just keeps your space neat and clean. Deep cleaning involves in-depth cleaning of your space. This goes twice or thrice in a year and involves cleaning of carpet, sofas, chairs, floor, etc. Deep cleaning removes dust and allergens. Moreover, it makes your space clean and fresh compared to regular cleaning."
    },
    {
      question: "What is the purpose of deep cleaning?",
      answer:
        "Deep cleaning helps to remove dust, removes allergens and pathogens, keeps your office space clean, removes odours and looks fresh and hygienic."
    },
      {
      question: "Do you provide deep cleaning for Medium-Scale and Large-Scale Industries?",
      answer:
        "Yes, we are capable of providing deep cleaning to any sized spaces and businesses including medium-scale and large-scale industries in Hyderabad, Bengaluru, Pune, Chennai and Mumbai."
    },
    {
      question: "Do you use eco-friendly products for deep cleaning services?",
      answer:
        "Yes, we use only eco-friendly products for deep cleaning and other cleaning services for our clients due to which we are certified by U.S EPA, Woolsafe and Greenseal."
    },
     {
      question: "How much time does the deep cleaning process take?",
      answer:
        "Consumption of time for Deep cleaning depends upon the type of space, area size and other few factors. So, usually deep cleaning takes a minimum of one day and it goes one depending upon the above factors."
    },
    {
      question: "How often should I deep clean my office?",
      answer:
        "You can deep clean your commercial space or corporate office at least once or twice in a year to keep your surroundings clean and dust-free."
    },
    
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
     
        <div className="text-center mb-12">
          <h2 className="font-bold mb-4" style={{ fontSize: '48px', color: '#1c1d3e' }}>
            Have Your Any Question Look Here Now
          </h2>
        </div>

       
        <div className="bg-white">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
            
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none hover:bg-gray-50 transition-colors duration-150"
              >
                <h3 className="font-bold pr-6 flex-1" style={{ fontSize: '22px', color: 'black' }}>
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 w-10 h-10 bg-orange-400 rounded flex items-center justify-center hover:bg-orange-500 transition-colors duration-150">
                  {openQuestion === index ? (
                    <Minus className="w-4 h-4 text-white" />
                  ) : (
                    <Plus className="w-4 h-4 text-white" />
                  )}
                </div>
              </button>

        
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openQuestion === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <div className="bg-gray-100 rounded p-4">
                    <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateDeepQuestions;