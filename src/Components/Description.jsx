import React from "react";
import Laptop from "../Assets/cuate.png";
import { Button } from "../shared/Button.jsx";

const Description = () => {
  return (
    <div className="bg-white w-full px-4 py-16">
      
      <h1 className="text-center max-w-3xl mx-auto px-4 font-bold md:text-4xl md:mt-20 sm:text-3xl text-2xl py-2">
    Real Estate-Focused Digital Mastery
  </h1>
     
  <div className="bg-white w-full px-4 py-16 md:mt-[-20px]">
      <div className="grid md:grid-cols-2 mx-auto max-h-[1240px]">
        <img src={Laptop} alt="/" className="my-4 mx-auto w-[507px] h-[342px]" />

        <div className="justify-center flex flex-col">
        
          <h1 className="font-bold md:text-4xl sm:text-3xl text-2xl py-2 ">
          Unlock the Potential of Digital Real Estate Excellence
          </h1>
          <p className="text-base md:text-[22px] text-[#333333] mt-2">
  At Osumare, we understand that the real estate landscape demands a digital presence that aligns with the intricacies of property marketing. Our range of specialized services is meticulously designed to catapult your brand's success in the ever-evolving digital property market.
</p>


<div className="flex flex-col items-start">
  <Button className="w-[180px] md:w-[233px]" />
</div>

        </div>
      </div>
    </div>
       
      </div>
 
  );
};

export default Description;
