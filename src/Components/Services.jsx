import React from "react";
import autoSEO from "../Assets/Seo.png";
import ppc from "../Assets/PPC.png";
import social from "../Assets/Vector.png";
import content from "../Assets/content.png";
import web from "../Assets/Web design.png";
import data from "../Assets/Data driven.png";
import solutions from "../Assets/Solutions.png";
import video from "../Assets/Video.png";
import { Button } from "../shared/Button";

const services = [
  {
    img: autoSEO,
    title: "Automotive SEO",
    desc: "Drive Your Success with Automotive SEO, Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today"
  },
  {
    img: ppc,
    title: "PPC Precision",
    desc: "Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns."
  },
  {
    img: social,
    title: "Social Acceleration",
    desc: "Engage and influence your audience across social media platforms, amplifying your brand’s presence and generating conversions."
  },
  {
    img: content,
    title: "Content Excellence",
    desc: "Craft compelling, relevant content that resonates with audiences and drives engagement."
  },
  {
    img: web,
    title: "Web Design",
    desc: "Transform visitors into customers with high-performance websites delivering seamless user experiences and increased conversions."
  },
  {
    img: data,
    title: "Data-Driven Insights",
    desc: "Leverage data to refine your strategies, making informed decisions that drive revenue growth."
  },
  {
    img: solutions,
    title: "End-to-End Solutions",
    desc: "From initial awareness to post-sale loyalty, we offer solutions that guide customers through every step of their journey."
  },
  {
    img: video,
    title: "Video Marketing",
    desc: "Unleash the Power of Video Marketing: Captivate, Engage, and Move Your Brand with Compelling Visual Stories."
  }
];

const Services = () => {
  return (
    <div className="bg-white py-20 px-4 md:px-12 mt-[-100px]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-[#000]">
          Our Service Offerings
        </h2>
        <p className="text-gray-600 mt-2 md:text-lg">
          Strategies that Drive Property Market Excellence
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#F9F9F9] rounded-lg p-6 shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-10 h-10 mb-4 object-contain"
              />
              <h3 className="text-lg font-semibold text-[#000]">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button className="w-[180px] md:w-[233px] mt-14" />
      </div>
    </div>
  );
};

export default Services;
