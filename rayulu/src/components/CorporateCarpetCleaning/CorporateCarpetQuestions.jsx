import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const CorporateCarpetQuestions = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      question: "What is the need of Carpet Shampooing?",
      answer: "Carpet Shampooing or Carpet Cleaning helps to remove dirt, stains, kills allergens and viruses, keeps hygiene and improves air quality in the space."
    },
    {
      question: "How much time does it take for Carpet Drying?",
      answer: "Generally, it takes 2 to 4 hours of time for drying the Carpet once it is done with cleaning or shampooing."
    },
    {
      question: "How much time does it take to clean a carpet of 1,00,000 sq.ft?",
      answer: "Our team can clean one lakh sq ft of carpet in 48- 60 hours."
    },
    {
      question: "How often should I go for Carpet Cleaning Services?",
      answer: "It depends upon the footfall in a particular area. In high footfall areas like entrances,pathways we recommend heavy duty vacuuming regularly and professional carpet shampooing once in a month."
    },
    {
      question: "What machines do you use for carpet cleaning?",
      answer: "We use different machines depending upon the condition of the carpet and the budget of the client.\nWe use a Vonschrader (USA) LMX machine for heavily soiled carpets.\nWe use Multicare Trio (USA) machine for moderate to heavily soiled areas."
    },
    {
      question: "Can carpet cleaning remove hard stains?",
      answer: "Stain removal depends upon factors like origin of stain and age of stain. If the stain causing material is identified and if it is a recent stain then it is relatively easy to remove. As the stain ages it is difficult to remove as it keeps popping up due to a process called \"WICKING\"."
    },
    {
      question: "Do carpet cleaning require chemicals?",
      answer: "Yes, carpet cleaning requires chemicals. The usage of chemicals depends upon the type of carpet, stains it observed, etc. All over the chemicals are eco-friendly and child-friendly."
    },
    {
      question: "Is carpet cleaning expensive?",
      answer: "Yes, For ensuring long life of carpet regular maintenance is required. When compared to the cost of replacement, regular cleaning is not expensive."
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

export default CorporateCarpetQuestions;