import React from 'react';
import ExperienceItem from './ExperienceItem';
import { experiences } from './experienceData';

const ExperienceList = () => {
  return (
    <div className="space-y-12">
      {experiences.map((experience, index) => (
        <ExperienceItem key={index} {...experience} />
      ))}
    </div>
  );
};

export default ExperienceList;