import React, { useState } from 'react';
import { ExperienceData } from './types';
import ExperienceDetails from './ExperienceDetails';
import CompanyLogo from './CompanyLogo';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ExperienceItem = ({ 
  period, 
  company, 
  title, 
  description, 
  achievements 
}: ExperienceData) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow">
      <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
        <div>
          <div className="h-12 md:h-16 flex items-center mb-2 md:mb-4">
            <CompanyLogo company={company} />
          </div>
          <div className="text-sm text-gray-500">{period}</div>
          <div className="font-medium text-gray-800 mt-1">{company}</div>
        </div>
        
        <div className="relative mt-4 md:mt-0">
          {/* Mobile toggle button */}
          <button
            className="md:hidden absolute -top-14 right-0 p-2 touch-manipulation"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
          
          {/* Content */}
          <div className={`md:block ${isExpanded ? 'block' : 'hidden'}`}>
            <ExperienceDetails 
              title={title}
              description={description}
              achievements={achievements}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;