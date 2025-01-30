import React, { useState } from 'react';
import { education } from './educationData';
import EducationItem from './EducationItem';

const EducationList = () => {
  // Initialize all items as expanded by default
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