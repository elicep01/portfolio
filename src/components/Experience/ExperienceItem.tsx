import React from 'react';
import { EducationData } from './types';
import InstitutionLogo from '../Education/InstitutionLogo';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface EducationItemProps extends EducationData {
  isExpanded: boolean;
  onToggle: () => void;
}

const EducationItem = ({ 
  institution, 
  degree, 
  period, 
  specialization, 
  details,
  isExpanded,
  onToggle
}: EducationItemProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow">
      <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
        <div>
          <div className="h-12 md:h-16 flex items-center mb-2 md:mb-4">
            <InstitutionLogo institution={institution} />
          </div>
          <div className="text-sm text-gray-500">{period}</div>
          <div className="font-medium text-gray-800 mt-1">{institution}</div>
        </div>
        
        <div className="relative mt-4 md:mt-0">
          {/* Mobile toggle button */}
          <button
            className="md:hidden absolute -top-14 right-0 p-2 touch-manipulation"
            onClick={onToggle}
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
          
          {/* Content */}
          <div className={`md:block ${isExpanded ? 'block' : 'hidden'}`}>
            <h3 className="font-semibold text-xl mb-2 pr-12 md:pr-0">{degree}</h3>
            {specialization && (
              <p className="text-gray-700 mb-2">Specialization: {specialization}</p>
            )}
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {details.map((detail, index) => (
                <li key={index} className="break-words">{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationItem;