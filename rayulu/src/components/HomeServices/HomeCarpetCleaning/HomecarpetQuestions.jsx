import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Ddcarpet from './HomecarpetDD';

const Homecarpetquestions = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      question: "What is the perfect time to hire a carpet cleaning expert?",
      answer: "There is nothing like a perfect time for carpet cleaning, it depends on how much dust, look and stains. Moreover, a timely carpet cleaning is also suggestable to make your carpet long-lasting."
    },
    {
      question: "Which type of carpet cleaning is best suitable for me?",
      answer: "Choosing the type of carpet cleaning depends upon your carpet type and its current stage."
    },
    {
      question: "Can you remove pet stains on my carpet?",
      answer: "Yes, we can remove any type of stain including pet stains but the methodology of treating carpet will vary, which costs different compared to regular carpet cleaning services."
    },
    {
      question: "Shall we clean our carpet ourself?",
      answer: "Yes, you can clean your carpet yourself but a proper carpet cleaning service requires good machinery, chemicals or solutions and expertise too. According to your available tools, you can clean your carpet but we are sure that you won’t get the output as we do."
    },
    {
      question: "Can carpet cleaning improve room fragrance?",
      answer: "Carpet cleaning not only removes dust, dirt and removes odour it also adds fragrance to your carpet too (but not much). To make your room more fragrant, you can add extra fragrances to your carpet."
    },
    {
      question: "Does carpet cleaning dull my carpet original colour?",
      answer: "Never, Carpet cleaning service never dull your carpets original colour and do not spoil it. Moreover, it will help to regain its original colour and look better after removing dust, dirt and stains."
    },
      {
    
      question: "What is whicking in carpet cleaning?",
      answer: "While Carpet cleaning, dirty water pulls the stains up from the base or depth as it dries, making them reappear due to capillary action of the fibres."
    },
    
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <>
    <Ddcarpet />
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
    </>
  );
};

export default Homecarpetquestions;