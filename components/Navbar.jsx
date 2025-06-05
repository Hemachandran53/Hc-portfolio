
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Theme } from '../types.js';
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from '../constants.jsx';

const Navbar = ({ name, navItems, currentTheme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-lightBgAccent/80 dark:bg-darkBgAccent/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-primary dark:text-primary-dark transition-colors">
              {name}
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-lightText dark:text-darkText hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full text-lightTextAccent dark:text-darkTextAccent hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {currentTheme === Theme.LIGHT ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
            </button>
          </div>
          <div className="md:hidden flex items-center">
             <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 mr-2 rounded-full text-lightTextAccent dark:text-darkTextAccent hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {currentTheme === Theme.LIGHT ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
            </button>
            <button
              onClick={handleToggleMobileMenu}
              aria-label="Toggle mobile menu"
              className="p-2 rounded-md text-lightTextAccent dark:text-darkTextAccent hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isMobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-lightBgAccent dark:bg-darkBgAccent shadow-lg py-2 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavLinkClick}
                className="block px-3 py-2 rounded-md text-base font-medium text-lightText dark:text-darkText hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  })).isRequired,
  currentTheme: PropTypes.oneOf(Object.values(Theme)).isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Navbar;