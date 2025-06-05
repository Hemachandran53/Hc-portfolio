
import React from 'react';
import { CONTACT_INFO, LinkedInIcon, GitHubIcon } from '../constants.jsx';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-lightBg dark:bg-darkBg border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-lightTextAccent dark:text-darkTextAccent hover:text-primary dark:hover:text-primary-dark transition-colors"
          >
            <LinkedInIcon className="w-6 h-6" />
          </a>
          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-lightTextAccent dark:text-darkTextAccent hover:text-primary dark:hover:text-primary-dark transition-colors"
          >
            <GitHubIcon className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm text-lightTextAccent dark:text-darkTextAccent">
          &copy; {currentYear} {CONTACT_INFO.name}. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
