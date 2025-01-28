import React from 'react';
import { ExperienceData } from './types';
import ExperienceDetails from './ExperienceDetails';
import CompanyLogo from './CompanyLogo';

const ExperienceItem = ({ 
  period, 
  company, 
  title, 
  description, 
  achievements 
}: ExperienceData) => {
  return (
    <div className="grid md:grid-cols-[200px_1fr] gap-8">
      <div>
        <CompanyLogo company={company} />
        <div className="text-sm text-gray-500">{period}</div>
        <div className="font-medium">{company}</div>
      </div>
      <ExperienceDetails 
        title={title}
        description={description}
        achievements={achievements}
      />
    </div>
  );
};

export default ExperienceItem;