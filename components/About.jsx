
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { CONTACT_INFO, PROFESSIONAL_SUMMARY, DownloadIcon } from '../constants.jsx';
import useIntersectionObserver from '../hooks/useIntersectionObserver.js';

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-lightText dark:text-darkText">
    {children}
    <span className="block w-20 h-1 bg-primary dark:bg-primary-dark mx-auto mt-2"></span>
  </h2>
);

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};


const About = () => {
  const observerOptions = useMemo(() => ({ threshold: 0.1 }), []);
  const [sectionRef, isVisible] = useIntersectionObserver(observerOptions, true);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className={`py-16 md:py-24 bg-lightBg dark:bg-darkBg ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>About Me</SectionTitle>
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-4 text-lg text-lightTextAccent dark:text-darkTextAccent mb-8">
            {PROFESSIONAL_SUMMARY.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <a
            href={CONTACT_INFO.resumeUrl}
            target="_blank" 
            rel="noopener noreferrer"
            download
            className="inline-flex items-center bg-secondary hover:bg-secondary-light text-white font-semibold py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 dark:bg-secondary-dark dark:hover:bg-secondary"
          >
            <DownloadIcon className="w-5 h-5 mr-2" />
            Download Resume
          </a>
           <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;