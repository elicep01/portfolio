import React from 'react';
import { EducationData } from './types';
import InstitutionLogo from './InstitutionLogo';

const EducationItem = ({ 
  institution, 
  degree, 
  period, 
  specialization, 
  details
}: EducationData) => {
  return (
    <div className="grid md:grid-cols-[200px_1fr] gap-8">
      <div>
        <InstitutionLogo institution={institution} />
        <div className="text-sm text-gray-500">{period}</div>
        <div className="font-medium">{institution}</div>
      </div>
      <div>
        <h3 className="font-semibold text-xl mb-2">{degree}</h3>
        {specialization && (
          <p className="text-gray-700 mb-2">Specialization: {specialization}</p>
        )}
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EducationItem;