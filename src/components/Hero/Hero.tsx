import React from 'react';
import Container from '../common/Container';
import HeroContent from './HeroContent';
import ProfileImage from './ProfileImage';

const Hero = () => {
  return (
    <header className="pt-24 md:pt-32 pb-16 px-4 md:px-6">
      <Container>
        <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
          <HeroContent />
          <ProfileImage />
        </div>
      </Container>
    </header>
  );
};

export default Hero