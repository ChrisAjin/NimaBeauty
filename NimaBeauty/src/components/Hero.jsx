import React from 'react';
import video1 from '../assets/video1.mp4';
import LogoNima from '../assets/5.svg'
import ScrollDownArrow from './ScrollDownArrow'

const Hero = () => {
  return (
    <div className='w-full h-screen relative overflow-hidden'>
      <video
        className='w-full h-full object-cover fixed z-0 bg-gray-900/30 '
        src={video1}
        autoPlay
        loop
        muted
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
	  	<img src={LogoNima} alt="Logo" className=" animate-pulse mx-auto mb-4" />
      </div>
		<ScrollDownArrow/>
    </div>
  );
};

export default Hero;
