import React from 'react';
import HeroButtons from './HeroButtons';
import SocialLinks from './SocialLinks';

const HeroContent = () => {
  return (
    <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Hi, I am Elice
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-4 md:mb-6">
        Machine Learning Engineer | AI & Signal Processing Enthusiast
      </p>
      <p className="text-gray-600 mb-6 md:mb-8">
        🚀 Seeking Summer 2025 ML/AI Internships
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
        <HeroButtons />
      </div>
      <div className="mt-6 flex justify-center md:justify-start">
        <SocialLinks />
      </div>
    </div>
  );
};

export default HeroContent