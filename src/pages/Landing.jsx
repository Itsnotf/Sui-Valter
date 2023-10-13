import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Aos from "aos";

function Landing() {
  Aos.init();
  return (

    <div className="w-full h-screen  bg-[#222831] ">
      <Navbar />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}

export default Landing;
