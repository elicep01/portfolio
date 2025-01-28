import React from 'react';
import Container from '../common/Container';
import HeroContent from './HeroContent';
import ProfileImage from './ProfileImage';

const Hero = () => {
  return (
    <header className="pt-32 pb-16">
      <Container>
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <HeroContent />
          <ProfileImage />
        </div>
      </Container>
    </header>
  );
};

export default Hero;