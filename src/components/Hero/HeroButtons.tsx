import React from 'react';
import Button from '../common/Button';

const HeroButtons = () => {
  const handleGetInTouch = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
    
    // Trigger social links animation
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach((link, index) => {
      link.classList.add('animate-bounce');
      // Remove animation after it completes
      setTimeout(() => {
        link.classList.remove('animate-bounce');
      }, 1000 + (index * 100));
    });
  };

  const handleViewResume = (e: React.MouseEvent) => {
    e.preventDefault();
    // Open resume in a new tab
    window.open('/ElicePriyadarshini_Resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex gap-4 mb-8">
      <Button onClick={handleGetInTouch} href="#contact">Get in Touch</Button>
      <Button 
        onClick={handleViewResume} 
        href="/ElicePriyadarshini_Resume.pdf"
        variant="secondary"
      >
        View Resume
      </Button>
    </div>
  );
};

export default HeroButtons;