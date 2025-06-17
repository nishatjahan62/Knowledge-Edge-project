import React from "react";
import Hero from "../../Components/Hero/Hero";
import SelfMadeSection from "../../Components/SelfMadeSection/SelfMadeSection";

const Home = () => {
  return (
    <div className="pt-25 min-h-screen" >
     <Hero></Hero>
     <SelfMadeSection></SelfMadeSection>
    </div>
  );
};

export default Home;
