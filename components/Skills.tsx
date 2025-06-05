
import React, { useState, useMemo } from 'react';
import { SKILLS } from '../constants';
import { SkillCategory } from '../types'; // Corrected import
import { Skill as SkillType } from '../types'; // Renamed to avoid conflict

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-lightText dark:text-darkText">
    {children}
    <span className="block w-20 h-1 bg-primary dark:bg-primary-dark mx-auto mt-2"></span>
  </h2>
);

const SkillItem: React.FC<{ skill: SkillType }> = ({ skill }) => (
  <div className="flex flex-col items-center p-4 bg-lightBgAccent dark:bg-darkBgAccent rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
    {skill.icon && <skill.icon className="w-10 h-10 mb-2 text-primary dark:text-primary-dark" />}
    <span className="text-md font-medium text-lightText dark:text-darkText">{skill.name}</span>
  </div>
);


const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>(SkillCategory.ALL);

  const categories = useMemo(() => {
    const allCategories = Object.values(SkillCategory);
    const uniqueCategoriesInSkills = Array.from(new Set(SKILLS.map(skill => skill.category)));
    
    // Ensure "All Skills" is always first
    let sortedCategories = [SkillCategory.ALL];
    
    // Add other categories that are present in SKILLS array, maintaining some order if possible (e.g., as defined in SkillCategory enum)
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
    <section id="skills" className="py-16 md:py-24 bg-lightBg dark:bg-darkBg"> {/* Changed background for better contrast with cards */}
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
