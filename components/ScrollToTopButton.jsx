import React, { useState, useEffect } from 'react';
import { UpArrowIcon } from '../constants.jsx';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 p-3 bg-primary dark:bg-primary-dark text-white rounded-full shadow-lg hover:bg-primary-light dark:hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary transition-opacity duration-300 ease-in-out"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          <UpArrowIcon className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;