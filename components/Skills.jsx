
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { SKILLS } from '../constants.jsx';
import { SkillCategory } from '../types.js';
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

const SkillItem = ({ skill }) => (
  <div className="flex flex-col items-center p-4 bg-lightBgAccent dark:bg-darkBgAccent rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
    {skill.icon && <skill.icon className="w-10 h-10 mb-2 text-primary dark:text-primary-dark" />}
    <span className="text-md font-medium text-lightText dark:text-darkText">{skill.name}</span>
  </div>
);
SkillItem.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.oneOf(Object.values(SkillCategory)).isRequired,
    icon: PropTypes.elementType,
  }).isRequired,
};


const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(SkillCategory.ALL);
  
  const observerOptions = useMemo(() => ({ threshold: 0.1 }), []);
  const [sectionRef, isVisible] = useIntersectionObserver(observerOptions, true);

  const categories = useMemo(() => {
    const allCategories = Object.values(SkillCategory);
    const uniqueCategoriesInSkills = Array.from(new Set(SKILLS.map(skill => skill.category)));
    
    let sortedCategories = [SkillCategory.ALL];
    
    allCategories.forEach(cat => {
      if (cat !== SkillCategory.ALL && uniqueCategoriesInSkills.includes(cat)) {
        sortedCategories.push(cat);
      }
    });
    
    return sortedCategories;
  }, []);

  const filteredSkills = useMemo(() => {
    if (activeCategory === SkillCategory.ALL) {
      return SKILLS;
    }
    return SKILLS.filter(skill => skill.category === activeCategory);
  }, [activeCategory]);

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className={`py-16 md:py-24 bg-lightBg dark:bg-darkBg ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>My Skills</SectionTitle>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                ${activeCategory === category 
                  ? 'bg-primary dark:bg-primary-dark text-white shadow-lg' 
                  : 'bg-gray-200 dark:bg-gray-700 text-lightText dark:text-darkText hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {filteredSkills.map(skill => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;