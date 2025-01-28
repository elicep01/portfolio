import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectData } from './types';

const ProjectCard = ({ 
  title, 
  description, 
  technologies,
  demoUrl, 
  codeUrl 
}: ProjectData) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6">
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <a 
          href={demoUrl} 
          className="text-primary hover:text-primary-dark flex items-center gap-1"
        >
          <ExternalLink size={16} /> Demo
        </a>
        <a 
          href={codeUrl} 
          className="text-primary hover:text-primary-dark flex items-center gap-1"
        >
          <Github size={16} /> Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;