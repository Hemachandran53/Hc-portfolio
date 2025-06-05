
import React from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface IconProps {
  className?: string;
}

export enum SkillCategory {
  ALL = 'All Skills',
  LANGUAGES = 'Languages',
  FRONTEND = 'Frontend',
  BACKEND = 'Backend',
  DATABASES = 'Databases',
  TOOLS = 'Tools',
  FRAMEWORKS = 'Frameworks',
  OTHER = 'Other',
}

export interface Skill {
  name: string;
  category: SkillCategory;
  icon?: React.FC<IconProps>; 
}

export interface Project {
  id: string;
  title: string;
  company: string;
  date: string;
  description: string[];
  technologies: string[];
  imageUrl: string;
  liveLink?: string;
  repoLink?: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  resumeUrl: string; // URL for the resume PDF/DOCX
}

export interface NavItem {
  name: string;
  href: string;
}
