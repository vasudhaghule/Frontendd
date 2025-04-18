import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";
import TestimonialImg from "../Assets/author.png";
import Arrow from "../Assets/arrow.png";
import AuthorImg from "../Assets/Avatar of team.png";

const faqData = [
  {
    question: "How does Osumare measure campaign success?",
    answer:
      "We believe in measurable results. Our data-driven approach means that every campaign’s performance is tracked, analyzed, and refined for optimal outcomes. You receive regular reports that showcase key metrics, giving you clear insights into how our strategies drive growth for your brand.",
  },
  {
    question: "How does Osumare measure campaign success?",
    answer: "Duplicate FAQ for layout. Update or loop real data.",
  },
  {
    question: "How does Osumare measure campaign success?",
    answer: "We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.",
  },
];

const TestimonialAndFAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(2);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-[#f4f9ff] to-white py-16 px-4 md:px-20">
      {/* Testimonial Section */}
      <div className="text-center mb-16">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          What Our Pharma Partners Say
        </h2>
        <p className="text-gray-600 mt-2">
          Driving Transformations, One Brand at a Time
        </p>

        <div className="mt-10 max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-6">
          {/* Testimonial Image with Play Button */}
          <div className="relative">
            <img
              src={TestimonialImg}
              alt="Testimonial"
              className="rounded-md w-72 md:w-64 object-cover"
            />
           
          </div>

          {/* Text Area */}
          <div className="flex-1 text-left">
            <div className="flex items-center gap-3 mb-2">
              <img
                src={AuthorImg}
                alt="Author"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="font-semibold text-sm">Tabish Khan</div>
              <FaQuoteRight className="text-blue-600 text-xl ml-auto" />
            </div>
            <p className="text-gray-700 text-sm md:text-base">
              Osumare’s expertise in pharma marketing is unparalleled. Their
              strategies helped us navigate complex regulations while driving
              remarkable growth.
            </p>
          </div>
        </div>

        {/* Arrow Buttons */}
        <div className="flex justify-center gap-4 mt-6">
         
            <img src={Arrow} alt="Left" className=" transform rotate-180 w-[132px] " />
          
         
        </div>
      </div>

      {/* FAQ Section */}
      {/* FAQ Section */}
<div className="text-center max-w-4xl mx-auto px-4">
  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
    Frequently Asked Questions
  </h2>
  <p className="text-gray-600 mt-2 mb-10">
  Pinpoint your audience with precision, ensuring your marketing efforts reach those most likely to engage with your brand.
        </p>
  <div className="bg-white rounded-xl shadow-md p-4 md:p-6 w-full max-w-2xl mx-auto">
    {faqData.map((faq, index) => {
      const isOpen = openIndex === index;
      return (
        <div key={index} className="mb-2 last:mb-0">
          <button
            onClick={() => toggleFAQ(index)}
            className={`w-full flex justify-between items-center px-4 py-3 rounded ${
              isOpen ? "bg-blue-600 text-white" : "bg-white text-black"
            } transition-all duration-300`}
          >
            <span className="text-sm font-medium text-left">
              {faq.question}
            </span>
            {isOpen ? (
              <ChevronUp className={`w-4 h-4 ${isOpen ? "text-white" : "text-black"}`} />
            ) : (
              <ChevronDown className="w-4 h-4 text-black" />
            )}
          </button>
          {isOpen && (
            <div className="px-4 pt-2 pb-4 bg-white text-sm text-gray-700 border border-t-0 rounded-b-md">
              {faq.answer}
            </div>
          )}
        </div>
      );
    })}
  </div>
</div>
</div>
  );
};

export default TestimonialAndFAQ;
