import React, { useState, useEffect } from 'react';
import ScrollDown from './scrolldown.json'
import Lottie from 'lottie-react'

const ScrollDownIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  const checkScroll = () => {
    const halfway = window.innerHeight + document.querySelector('#selects').getBoundingClientRect().top / 2;
    if (window.scrollY > halfway) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    isVisible && (
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 mt-12">
        <div style={{ width: '300px', height: '300px' }} >
			<Lottie animationData={ScrollDown}/>
		</div>
      </div>
    )
  );
};

export default ScrollDownIndicator;
