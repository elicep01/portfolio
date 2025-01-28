import React from 'react';
import { skillsData } from './skillsData';
import SkillCategory from './SkillCategory';

const SkillsGrid = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skillsData.map((category, index) => (
        <SkillCategory key={index} {...category} />
      ))}
    </div>
  );
};

export default SkillsGrid;