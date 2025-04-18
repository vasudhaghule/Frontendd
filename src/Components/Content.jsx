import React from "react";
import HomeImg from "../Assets/Header image.png";
import { Button } from "../shared/Button.jsx";


const Content = () => {
  return (
    <div className="relative bg-white pt-32 overflow-hidden">
      
      {/* 🔵 Right Blue Glow Background */}
      <div
        className="absolute right-0 top-0 w-[700px] h-[700px] bg-gradient-to-br from-blue-400 to-transparent opacity-20 z-0"
        style={{
          transform: "rotate(45deg)",
          filter: "blur(80px)"
        }}
      />

      {/* Main Content */}
      <div className="flex flex-col text-center justify-center w-full h-screen mx-auto max-w-[800px] relative z-10">
        
        {/* Headline */}
        <p className="text-black text-center md:text-5xl sm:text-4xl text-3xl font-[Montserrat]">
          Elevate <span className="text-blue-600">Real Estate Success</span> with<br />
          Osumare's Digital Expertise
        </p>

        {/* Subheadline */}
        <p className="text-[#333333] mt-4 text-base md:text-xl font-medium">
          Tailored Solutions for Thriving in the Digital Real Estate Landscape
        </p>

        {/* CTA Button */}
        
        <Button className="md:text-[24px] w-[180px] md:w-[340px] mx-auto" />
      </div>

      {/* Logo/Image at the bottom */}
      <img
  src={HomeImg}
  alt="Osumare Logo"
  className="h-10 md:mt-[-8%] md:h-[538px] w-[796px] object-contain mx-auto block"
/>

    </div>
  );
};

export default Content;
