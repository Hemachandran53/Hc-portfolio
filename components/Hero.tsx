
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-16 md:py-24 bg-gradient-to-br from-slate-100 via-lightBg to-sky-100 dark:from-slate-800 dark:via-darkBg dark:to-sky-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        <img 
          src="https://picsum.photos/seed/avatar/150/150" 
          alt={CONTACT_INFO.name}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 shadow-xl border-4 border-lightBgAccent dark:border-darkBgAccent"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          <span className="text-lightText dark:text-darkText">Hi, I'm </span>
          <span className="text-primary dark:text-primary-dark">{CONTACT_INFO.name}</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-lightTextAccent dark:text-darkTextAccent mb-8">
          {CONTACT_INFO.title}
        </p>
        <div className="space-x-4">
          <a
            href="#contact"
            className="inline-block bg-primary hover:bg-primary-light text-white font-semibold py-3 px-8 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 dark:bg-primary-dark dark:hover:bg-primary"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="inline-block bg-lightBgAccent dark:bg-darkBgAccent text-primary dark:text-primary-dark font-semibold py-3 px-8 rounded-lg shadow-md border border-primary dark:border-primary-dark transform hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
