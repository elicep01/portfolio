import React from 'react';
import HeroButtons from './HeroButtons';
import SocialLinks from './SocialLinks';

const HeroContent = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-4">
        Hi, I'm Elice
      </h1>
      <p className="text-xl text-gray-600 mb-6">
        Machine Learning Engineer & AI Enthusiast | Building AI Solutions for the Future
      </p>
      <p className="text-gray-600 mb-8">
        Seeking Summer 2025 ML/AI Internships
      </p>
      <HeroButtons />
      <SocialLinks />
    </div>
  );
};

export default HeroContent;