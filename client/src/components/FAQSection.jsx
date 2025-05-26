import React, { useState } from "react";

const faqs = [
  {
    question: "What is StraviX?",
    answer:
      "StraviX is a skill-based learning platform designed to help individuals upskill and unlock high-impact opportunities through curated digital courses.",
  },
  {
    question: "How long does it take to complete the course?",
    answer:
      "The course is designed to be completed within the suggested duration. However, since it is a self-paced course, you have the flexibility to progress based on your own schedule and learning speed.",
  },
  {
    question: "Do I need any prior knowledge before enrolling in the course?",
    answer:
      "No prior knowledge is required. Our courses are designed to be beginner-friendly and accessible to individuals from all backgrounds.",
  },
  {
    question: "How long does it take for the course to be activated?",
    answer:
      "The course is usually activated instantly after purchase. If you do not receive access or face any issues, please feel free to reach out to our support team for assistance.",
  },
  {
    question: "Can I download the course videos?",
    answer:
      "No, the course videos are not available for download. They can be accessed exclusively through our website.",
  },
  {
    question: "What should I do if I’m facing issues accessing the course?",
    answer:
      "All users typically gain access to the course within 48 hours or less after payment. If you experience any difficulties or are stuck, please contact our support team for assistance at: customerfirst@stravix.in",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#FFF5E4]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row gap-10 items-center">
        {/* Left: Accordion */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">FAQs <span className="text-base font-normal">(Frequently Asked Questions)</span></h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded shadow hover:shadow-md transition"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left px-5 py-4 flex justify-between items-center font-medium text-[#252525]"
                >
                  <span className="italic">{index + 1}. {faq.question}</span>
                  <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/images/Faqs.png"
            alt="FAQ Illustration"
            className="max-w-md w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
