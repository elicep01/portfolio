import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

interface SocialLinksProps {
  size?: number;
}

const SocialLinks = ({ size = 24 }: SocialLinksProps) => {
  return (
    <div className="flex gap-6">
      <a 
        href="https://github.com/elicep01" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-teal-600 transition-colors"
        aria-label="GitHub Profile"
      >
        <Github size={size} />
      </a>
      <a 
        href="https://linkedin.com/in/elicepriyadarshini" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-teal-600 transition-colors"
        aria-label="LinkedIn Profile"
      >
        <Linkedin size={size} />
      </a>
      <a 
        href="mailto:epriyadarshi@wisc.edu"
        className="text-gray-600 hover:text-teal-600 transition-colors"
        aria-label="Email Me"
      >
        <Mail size={size} />
      </a>
      <a 
        href="/resume.pdf"
        className="text-gray-600 hover:text-teal-600 transition-colors"
        aria-label="Download Resume"
      >
        <FileText size={size} />
      </a>
    </div>
  );
};

export default SocialLinks;