import React from 'react';
import { SkillCategoryData } from './types';

const SkillCategory = ({ title, skills }: SkillCategoryData) => {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-600">{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCategory;