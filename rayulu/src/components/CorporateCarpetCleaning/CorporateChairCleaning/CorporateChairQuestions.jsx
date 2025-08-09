import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const CorporateChairQuestions = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
      {
      question: "What happens if I do not clean my Office Chairs regularly?",
      answer: "Chairs accumulate dust particles, allergens and other pathogens over a period of time. It affects your employees health due to deteriorating Indoor Air Quality and makes them look un-appealing. Therefore, regular chair cleaning (or shampooing) is required.",
    },

     {
      question: "Do you use any machines for cleaning our office chairs?",
      answer: "Spray guns for foam generation and industrial vacuum cleaners are used for extraction.",
    },

    {
      question: "Can chair shampooing remove hard stains?",
      answer: "Over a period of 2 to 3 cleaning cycles most of the stains on office chairs will fade away. But due to a process called “wicking” they can reappear later."
    },
    {
      question: "Which type of chairs do you handle?",
      answer: "PCS Care handles all types of chairs, including fabric chairs, SmartGRID chairs, leather chairs, linen chairs, dining chairs, polyester chairs, and more.",
    },
    {
      question: "How much time does it take to dry a chair naturally after shampooing?",
      answer: "With proper ventilation, an office chair usually takes 3 to 4 hours to dry."
    },
    {
      question: "How often should I clean my office chairs?",
      answer: "It depends on the environment and dust levels. Generally, chairs should be cleaned at least 3 times a year.",
    }

  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
     
        <div className="text-center mb-12">
          <h2 className="font-bold mb-4" style={{ fontSize: '48px', color: '#1c1d3e' }}>
            Frequently Asked Questions
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

export default CorporateChairQuestions;