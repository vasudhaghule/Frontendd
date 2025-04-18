import React from 'react';

// ✅ Accept props: onClick and className
export const Button = ({ onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#0078FF] hover:bg-blue-700 text-white py-3 my-6 font-medium text-base  rounded-full outline-none focus:outline-none transition-all duration-300 ${className}`}
    >
      Get Started
    </button>
  );
};
