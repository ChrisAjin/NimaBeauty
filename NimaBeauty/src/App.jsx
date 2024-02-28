import { useState } from "react";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Histoire from "./components/Histoire";
import Navbar from "./components/Navbar";
import Selects from "./components/Selects";
import video1 from "./assets/video4.mov";

const App = () => (
  <div>
    <div className="video-background">
      <video
        className="w-full h-full object-cover"
        src={video1}
        autoPlay
        loop
        muted
      />
    </div>
    <div className="content">
      <Navbar />
      <Hero />
      <Histoire />
      <Selects />
      <Carousel />
    </div>
    <Footer />
  </div>
);

export default App;
