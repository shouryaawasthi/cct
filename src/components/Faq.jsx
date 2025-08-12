import React, { useState } from 'react';
import faq from '../assets/images/faq.png'

const faqs = [
  {
    question: 'Do you offer online training?',
    answer:
      'Yes, we offer both online and offline training modes. Our online classes are live, interactive, and delivered by experienced instructors to ensure a real-time learning experience.',
  },
  {
    question: 'Are the courses beginner-friendly?',
    answer:
      'Absolutely. Our courses are designed for all levels — whether you\'re a student, a recent graduate, or a working professional looking to upskill.',
  },
  {
    question: 'Do I get a certificate after completion?',
    answer:
      'Yes, we provide an industry-recognized certificate after successful completion of the course, which can be added to your resume and LinkedIn profile.',
  },
  {
    question: 'Are there any live projects included?',
    answer:
      'Yes, we strongly focus on practical learning. Every course includes hands-on live projects and real-world assignments.',
  },
  {
    question: 'Can I get job assistance after the course?',
    answer:
      'Definitely. We offer career support including resume building, mock interviews, and job placement assistance through our hiring partners.',
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-16 px-4  text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* FAQ Content */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-amber-500">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-blue-800 rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left bg-blue-800 hover:bg-blue-700 transition"
                >
                  <span className="text-white font-medium">{faq.question}</span>
                  <span className="text-zinc-50 font-semibold">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>
                <div
                  className={`px-4 pt-2 pt-0 pb-3 text-sm text-gray-700 transition-all duration-300 ease-in-out ${
                    activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Side */}
        <div className="w-full">
          <img
            src={faq}
            alt="Training Illustration"
            className="w-full h-auto "
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;
