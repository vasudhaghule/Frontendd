import React from "react";
import Trust from "../Assets/Trust.png";
import Conversion from "../Assets/conversion.png";
import Medal from "../Assets/medal.png";
import Weather from "../Assets/weather.png"

const Experties=()=>{
  const data = [
    {
      img: Weather,
      title: "Effective CTAs",
      desc: "See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency.",
    },
    {
      img: Conversion,
      title: "Conversion-Optimized Landing Pages",
      desc: "Explore a case study where our landing page optimization increased property lead conversion rates by 30%",
    },
    {
      img: Trust,
      title: "Trust Building with Social Proof",
      desc: "Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project",
    },
    {
      img: Medal,
      title: "Mobile-First Success:",
      desc: "Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency.",
    },
  ];

  return (
    <div className="py-16 px-4 md:px-20 bg-white text-center">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-12">
      Our Expertise in Action
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center px-4">
            <img src={item.img} alt={item.title} className="w-14 h-14 mb-4" />
            <h3 className="font-semibold text-base md:text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experties;
