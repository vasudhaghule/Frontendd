import React from "react";
import CallIcon from "../Assets/callto.png";
import LandingIcon from "../Assets/Landing.png";
import SocialProofIcon from "../Assets/Social.png";
import MobileIcon from "../Assets/Mobile.png"
const PropertyInquiries = () => {
  const data = [
    {
      img: CallIcon,
      title: "Call-to-Action Optimization",
      desc: "Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.",
    },
    {
      img: LandingIcon,
      title: "Landing Page Efficiency",
      desc: "Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission.",
    },
    {
      img: SocialProofIcon,
      title: "Social Proof Utilization",
      desc: "Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action.",
    },
    {
      img: MobileIcon,
      title: "Mobile-Friendly Experience",
      desc: "With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers.",
    },
  ];

  return (
    <div className="py-16 px-4 md:px-20 bg-white text-center">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-12">
        Driving Property Inquiries to Conversions
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

export default PropertyInquiries;
