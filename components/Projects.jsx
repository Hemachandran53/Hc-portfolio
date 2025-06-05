
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { PROJECTS, ExternalLinkIcon, GitHubIcon } from '../constants.jsx';
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

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-lightBgAccent dark:bg-darkBgAccent rounded-lg shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
      <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-primary dark:text-primary-dark">{project.title}</h3>
        <p className="text-sm text-lightTextAccent dark:text-darkTextAccent mb-1">{project.company} | {project.date}</p>
        <ul className="list-disc list-inside text-sm text-lightTextAccent dark:text-darkTextAccent mb-4 space-y-1 flex-grow">
          {project.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-1 text-lightText dark:text-darkText">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span key={tech} className="px-2 py-1 bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-dark text-xs font-medium rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto flex items-center space-x-4">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-secondary dark:text-secondary-dark hover:underline"
            >
              <ExternalLinkIcon className="w-4 h-4 mr-1" /> Live Demo
            </a>
          )}
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-lightTextAccent dark:text-darkTextAccent hover:text-primary dark:hover:text-primary-dark"
            >
              {/* <GitHubIcon className="w-4 h-4 mr-1" /> View Code */}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageUrl: PropTypes.string.isRequired,
    liveLink: PropTypes.string,
    repoLink: PropTypes.string,
  }).isRequired,
};

const Projects = () => {
  const observerOptions = useMemo(() => ({ threshold: 0.1 }), []);
  const [sectionRef, isVisible] = useIntersectionObserver(observerOptions, true);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className={`py-16 md:py-24 bg-lightBg dark:bg-darkBg ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;