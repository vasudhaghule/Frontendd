import React from "react";
import expertImg from "../Assets/RealEstateInsights.png";
import market from "../Assets/bard-fill.png";
import persona from "../Assets/flashlight-fill.png";
import competitor from "../Assets/shield-check-fill.png";
import content from "../Assets/content.png";


const insights = [
  {
    icon: market,
    title: "Market Trends Analysis",
    desc: "Predictive insights to guide real estate strategies.",
  },
  {
    icon: persona,
    title: "Targeted Buyer Persona",
    desc: "Understand and connect with your ideal property buyers.",
  },
  {
    icon: competitor,
    title: "Competitor Insights",
    desc: "Stand out in the property market with informed strategies.",
  },
  {
    icon: content,
    title: "Visual Content Appeal",
    desc: "Captivate buyers with appealing visuals and immersive experiences.",
  },
];

const RealEstateInsights = () => {
  return (
    <div className="w-full px-4 py-2 md:px-10 bg-white mt-[-60px]">


      <div
        className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-md"
        style={{
         
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
      >
        <div className="p-6 md:p-12">
          {/* Headings */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-[#000]">
              Navigating Real Estate's Digital Landscape
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Insights for Real Estate Marketing Advantage
            </p>
          </div>

          {/* Content Section */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
            {/* Left side - insights list */}
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              {insights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-8 h-8 object-contain"
                  />
                  <div>
                    <h3 className="font-semibold text-[#0F172A] text-base md:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right side - expert image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={expertImg}
                alt="Expert illustration"
                className="max-w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateInsights;
