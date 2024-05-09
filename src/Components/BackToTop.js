import React, { useState, useEffect } from 'react';
import "./Stylesheet/styles.css";
import 'remixicon/fonts/remixicon.css'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button className='back-to-top-btn'
          onClick={scrollToTop}
        >
          <i class="ri-arrow-up-line"></i>
        </button>
      )}
    </>
  );
};

export default BackToTopButton;