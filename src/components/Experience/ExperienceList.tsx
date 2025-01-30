import React, { useState } from 'react';
import { education } from '../Education/educationData';
import EducationItem from '../Education/EducationItem';

const EducationList = () => {
  // Track expanded state for each education item
  const [expandedItems, setExpandedItems] = useState<boolean[]>(
    new Array(education.length).fill(true)
  );

  const handleToggle = (index: number) => {
    setExpandedItems(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="space-y-12">
      {education.map((edu, index) => (
        <EducationItem 
          key={index} 
          {...edu} 
          isExpanded={expandedItems[index]}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default EducationList;