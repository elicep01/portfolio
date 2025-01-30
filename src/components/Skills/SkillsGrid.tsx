import React, { useState } from 'react';
import { skillsData } from './skillsData';
import SkillCategory from './SkillCategory';

const SkillsGrid = () => {
  // Track expanded state for each skill category
  const [expandedItems, setExpandedItems] = useState<boolean[]>(
    new Array(skillsData.length).fill(true)
  );

  const handleToggle = (index: number) => {
    setExpandedItems(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {skillsData.map((category, index) => (
        <SkillCategory 
          key={index} 
          {...category} 
          isExpanded={expandedItems[index]}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default SkillsGrid;