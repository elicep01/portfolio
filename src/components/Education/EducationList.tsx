import React from 'react';
import { education } from './educationData';
import EducationItem from './EducationItem';

const EducationList = () => {
  return (
    <div className="space-y-12">
      {education.map((edu, index) => (
        <EducationItem key={index} {...edu} />
      ))}
    </div>
  );
};

export default EducationList;