import React from 'react';
import Container from '../common/Container';
import SkillsGrid from './SkillsGrid';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <Container>
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <SkillsGrid />
      </Container>
    </section>
  );
};

export default Skills;