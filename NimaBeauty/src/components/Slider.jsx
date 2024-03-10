import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LogoNima from "../assets/Imane.jpg";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div>
      <h2 className="text-center font-bold mb-8 text-white font-sofia tit">
        INSTAGRAM
      </h2>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={LogoNima}
            alt="profil"
            className="rounded-2xl mx-4 w-2/3 md:w-full shadow-lg"
            style={{
              width: "30%",
              height: "80%",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}
