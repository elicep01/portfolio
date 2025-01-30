import React, { useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { ProjectData } from './types';

const ProjectCard = ({ 
  title, 
  description,
  technologies,
  demoUrl, 
  codeUrl 
}: ProjectData) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="border border-gray-200 rounded-lg p-4 md:p-6">
      <div className="relative">
        {/* Mobile toggle button */}
        <button
          className="md:hidden absolute right-0 top-0 p-2 touch-manipulation"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? 'Collapse' : 'Expand'}
        >
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        <h3 className="font-semibold text-xl mb-2 pr-12 md:pr-0">{title}</h3>
        
        <div className={`md:block ${isExpanded ? 'block' : 'hidden'}`}>
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
          
          <div className="flex flex-wrap gap-4">
            <a 
              href={demoUrl} 
              className="text-primary hover:text-primary-dark flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4" /> Demo
            </a>
            <a 
              href={codeUrl} 
              className="text-primary hover:text-primary-dark flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" /> Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;