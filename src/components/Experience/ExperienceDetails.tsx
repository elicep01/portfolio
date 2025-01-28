import React from 'react';

interface ExperienceDetailsProps {
  title: string;
  description: string;
  achievements?: string[];
}

const ExperienceDetails = ({ title, description, achievements }: ExperienceDetailsProps) => {
  return (
    <div>
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {achievements && achievements.length > 0 && (
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExperienceDetails;