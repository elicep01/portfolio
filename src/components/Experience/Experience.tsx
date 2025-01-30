import React from 'react';
import Container from '../common/Container';
import ExperienceList from './ExperienceList';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <ExperienceList />
      </Container>
    </section>
  );
};

export default Experience;