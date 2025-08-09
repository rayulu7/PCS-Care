import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const CorporateWorkQuestions = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      question: "Can you handle a large Industrial Plant too?",
      answer:
        "Yes, we have a large team of experts who can handle mini, small, medium and large industrial and production plants, corporate and commercial buildings in Hyderabad, Bangalore, Chennai, Pune and Mumbai."
    },
    {
      question: "Do you use any chemicals for cleaning purposes?",
      answer:
        "Yes, we use chemicals and products that are eco-friendly for office workstation panels cleaning and window blinds cleaning services due to which we are certified by U.S EPA, Woolsafe and Greenseal."
    },
    {
      question: "How often should I clean my workstation panels, window blinds and window rollers?",
      answer:
        "Once in six months is ideal. However, depending upon traffic and usage it varies."
    },
    {
      question: "Can all stains be removed?",
      answer:
        "It depends upon the longevity and origin of stains. Over a period of 2 to 3 cleaning cycles most of the stains fade-away. We make our best effort to remove stains."
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

export default CorporateWorkQuestions;