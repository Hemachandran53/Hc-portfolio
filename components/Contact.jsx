
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { CONTACT_INFO, MailIcon, PhoneIcon, LocationIcon, LinkedInIcon, GitHubIcon } from '../constants.jsx';
import useIntersectionObserver from '../hooks/useIntersectionObserver.js';

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-lightText dark:text-darkText">
    {children}
    <span className="block w-20 h-1 bg-primary dark:bg-primary-dark mx-auto mt-2"></span>
  </h2>
);
SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

const ContactInfoItem = ({ icon: Icon, text, href }) => (
  <div className="flex items-center space-x-3">
    <span className="flex-shrink-0 w-10 h-10 bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-dark rounded-full flex items-center justify-center">
      <Icon className="w-5 h-5" />
    </span>
    {href ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-lightTextAccent dark:text-darkTextAccent hover:text-primary dark:hover:text-primary-dark transition-colors break-all">
        {text}
      </a>
    ) : (
      <span className="text-lightTextAccent dark:text-darkTextAccent break-all">{text}</span>
    )}
  </div>
);
ContactInfoItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
};


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  const observerOptions = useMemo(() => ({ threshold: 0.1 }), []);
  const [sectionRef, isVisible] = useIntersectionObserver(observerOptions, true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=Contact from ${formData.name} (${formData.email})&body=${encodeURIComponent(formData.message)}`;
    
    window.location.href = mailtoLink;
    setStatusMessage('Your message is ready to be sent via your email client!');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatusMessage(''), 5000);
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className={`py-16 md:py-24 bg-lightBgAccent dark:bg-darkBgAccent ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Get In Touch</SectionTitle>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-lightText dark:text-darkText mb-4">Contact Information</h3>
            <p className="text-lightTextAccent dark:text-darkTextAccent">
              Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <ContactInfoItem icon={MailIcon} text={CONTACT_INFO.email} href={`mailto:${CONTACT_INFO.email}`} />
            <ContactInfoItem icon={PhoneIcon} text={CONTACT_INFO.phone} href={`tel:${CONTACT_INFO.phone}`} />
            <ContactInfoItem icon={LocationIcon} text={CONTACT_INFO.location} />
            <div className="flex space-x-4 pt-4">
              <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                 className="p-2 rounded-full text-lightTextAccent dark:text-darkTextAccent hover:text-primary dark:hover:text-primary-dark transition-colors">
                <LinkedInIcon className="w-6 h-6" />
              </a>
              <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                 className="p-2 rounded-full text-lightTextAccent dark:text-darkTextAccent hover:text-primary dark:hover:text-primary-dark transition-colors">
                <GitHubIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-lightText dark:text-darkText mb-4">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-lightTextAccent dark:text-darkTextAccent mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-primary focus:border-primary dark:bg-darkBg dark:text-darkText transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-lightTextAccent dark:text-darkTextAccent mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-primary focus:border-primary dark:bg-darkBg dark:text-darkText transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-lightTextAccent dark:text-darkTextAccent mb-1">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-primary focus:border-primary dark:bg-darkBg dark:text-darkText transition-colors"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-light text-white font-semibold py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 dark:bg-primary-dark dark:hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Send Message
                </button>
              </div>
              {statusMessage && (
                <p className="text-sm text-center text-green-600 dark:text-green-400 animate-fade-in-down">{statusMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;