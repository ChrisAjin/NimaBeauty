import React from "react";
import video1 from "../assets/video1.mp4";
import LogoNima from "../assets/5.svg";
import ScrollDownArrow from "./ScrollDownArrow";

const Hero = () => {
  return (
    <div className="hero-container">
      {" "}
      {/* Encapsulation supplémentaire */}
      <div className="w-full h-screen relative overflow-hidden">
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
          <img
            src={LogoNima}
            alt="Logo"
            className=" animate-pulse mx-auto mb-4"
          />
        </div>
        <ScrollDownArrow />
      </div>
    </div>
  );
};

export default Hero;
