import React from "react";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Description from "./Components/Description";
import Services from "./Components/Services";
import RealEstateInsights from "./Components/RealEstateInsights"
import Footer from "./Components/Footer";
import ContactForm  from "./Components/ContactForm"
import TestimonialAndFAQ from "./Components/TestimonialAndFAQ"
import PropertyInquiries from "./Components/PropertyInquiries";
import Experties from "./Components/Experties";
import Peace from "./Components/Peace";
import OptimizedPurchase from "./Components/Optimizepurchase";

function App() {
  return (
    <>
      <Header />
      <Content />
      <Description />
      <Services />
      <RealEstateInsights />
      <OptimizedPurchase />
      <PropertyInquiries />
      <Experties />
      
           <TestimonialAndFAQ />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
