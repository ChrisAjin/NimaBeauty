import React, { useState, useEffect } from 'react';

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
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 ">
        <div className="text-center mb-2 navbar text-lg discover-text">Découvrir</div>
        <div className="scroll-bar animate-element"></div>
      </div>
    )
  );
};

export default ScrollDownIndicator;
