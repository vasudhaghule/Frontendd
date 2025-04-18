// src/components/Header.jsx
import React from "react";
import logo from "../Assets/logo.png" 

const Header = () => {
  return (
    <header className="w-full px-4 md:px-10 py-4 flex items-center justify-between bg-white shadow-sm fixed top-0 left-0 z-50">
   
      <div className="flex items-center">
      <img src={logo} alt="Osumare Logo" className="h-10 md:h-[100px] w-[172px] object-contain" />

      </div>

 
      <div>
      <button class="border border-black md:w-[216px] md:h-[44px] text-black font-bold  px-6 py-2 rounded-full text-sm md:text-base ml-10 hover:bg-gray-100  transition duration-300">
  Contact Us
</button>


      </div>
    </header>
  );
};

export default Header;

