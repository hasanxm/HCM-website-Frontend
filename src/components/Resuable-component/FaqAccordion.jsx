import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FaqAccordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto   sm:px-6 md:px-1">
      {data.map((item, index) => (
        <div
          key={index}
          className="mb-3 bg-[#f9f9f9] border border-gray-200 rounded-lg overflow-hidden shadow-sm transition"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center px-4 py-3 text-left text-[#1d4076] font-medium text-base hover:bg-[#f0f0f0] focus:outline-none"
          >
            <span className="text-sm sm:text-base">{item.head}</span>
            <span className="ml-4 text-gray-500">
              {openIndex === index ? (
                <FaChevronUp className="transition duration-200" />
              ) : (
                <FaChevronDown className="transition duration-200" />
              )}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-600 text-sm sm:text-base">
              {item.para}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
