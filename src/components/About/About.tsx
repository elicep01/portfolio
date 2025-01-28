import React from 'react';
import Container from '../common/Container';
import SkillsGrid from './SkillsGrid';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <Container>
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 mb-4">
              I'm a Computer Science student at the University of Wisconsin-Madison, passionate about leveraging AI and ML to solve real-world problems. My research focuses on natural language processing and deep learning.
            </p>
            <p className="text-gray-600">
              Currently, I'm conducting independent study research on Large Language Model fine-tuning and working on projects that combine my technical skills with practical applications.
            </p>
          </div>
          <SkillsGrid />
        </div>
      </Container>
    </section>
  );
};

export default About;