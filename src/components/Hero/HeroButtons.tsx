import React from 'react';
import Button from '../common/Button';

const HeroButtons = () => {
  return (
    <div className="flex gap-4 mb-8">
      <Button href="#contact">Get in Touch</Button>
      <Button href="#resume" variant="secondary">View Resume</Button>
    </div>
  );
};

export default HeroButtons;