// src/components/SofaFaq.jsx
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function CorporateSofaQuestions() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do you use any machines for sofa cleaning and shampooing?",
      answer:
        "Spray guns for foam generation and industrial vacuum cleaners are used for extraction."
    },
    {
      question: "Which type of sofa fabric requires more frequent shampooing services?",
      answer:
        "Rather than the type it is the usage, stain formation etc. that determine the frequency of cleaning."
    },
    {
      question: "Can sofa shampooing remove hard stains?",
      answer:
        "Over a period of 2 to 3 cleaning cycles most of the stains fade away. But due to a process called Wicking they reappear later."
    },
    {
      question: "What is Wicking in Sofa Shampooing?",
      answer:
        "While sofa cleaning or shampooing, dirty water pulls the stains up from the cushion's base or depth as it dries, making them reappear due to capillary action of the fibres."
    },
    {
      question: "How much time does it take to dry a sofa naturally after shampooing?",
      answer:
        "With proper ventilation usually it dries up within 3 to 4 hours."
    },
    {
      question: "How often should I clean my sofa?",
      answer:
        "At least 3 times in a year is recommended to clean your sofa."
    },
    {
      question: "How much time does it take to clean or shampoo a sofa?",
      answer:
        "Usually for a 5 seater sofa it takes 2 to 3 hours."
    }
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="font-bold mb-4"
            style={{ fontSize: '48px', color: '#1c1d3e' }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="bg-white rounded-lg overflow-hidden shadow">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggle(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-150 focus:outline-none"
              >
                <h3 className="font-bold flex-1" style={{ fontSize: '22px', color: '#000' }}>
                  {faq.question}
                </h3>
                <div className="w-10 h-10 bg-orange-400 rounded flex items-center justify-center hover:bg-orange-500 transition-colors duration-150">
                  {openIndex === idx ? (
                    <Minus className="w-4 h-4 text-white" />
                  ) : (
                    <Plus className="w-4 h-4 text-white" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
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
}