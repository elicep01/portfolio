import React from 'react';
import { SkillCategoryData } from './types';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SkillCategoryProps extends SkillCategoryData {
  isExpanded: boolean;
  onToggle: () => void;
}

const SkillCategory = ({ title, skills, isExpanded, onToggle }: SkillCategoryProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow">
      <div className="relative">
        {/* Mobile toggle button */}
        <button
          className="md:hidden absolute right-0 top-0 p-2 touch-manipulation"
          onClick={onToggle}
          aria-label={isExpanded ? 'Collapse' : 'Expand'}
        >
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        <h3 className="font-semibold text-lg mb-4 pr-12 md:pr-0">{title}</h3>
        
        <div className={`md:block ${isExpanded ? 'block' : 'hidden'}`}>
          <ul className="space-y-2">
            {skills.map((skill, index) => (
              <li key={index} className="text-gray-600">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillCategory;