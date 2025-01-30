import React from 'react';
import Container from '../common/Container';
import SkillsGrid from './SkillsGrid';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <Container>
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          <div className="bg-gray-50 p-4 md:p-6 rounded-lg h-full">
            <h3 className="font-semibold text-lg mb-6">Background</h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                I am a Master's student in Electrical and Computer Engineering at the University of Wisconsin-Madison, specializing in Machine Learning and Signal Processing. I have over three years of experience as a Software Engineer, building AI-driven solutions and scalable ML applications.
              </p>
              <p className="text-gray-600">
                My focus areas include Large Language Models (LLMs), Reinforcement Learning, Natural Language Processing (NLP), Deep Learning, and AI for real-world applications. I have worked on fine-tuning LLMs, developing process reward models, and optimizing ML pipelines.
              </p>
              <p className="text-gray-600">
                Currently, I am conducting independent research on fine-tuning open-source LLMs and contributing to open-source ML projects.
              </p>
            </div>
          </div>
          <SkillsGrid />
        </div>
      </Container>
    </section>
  );
};

export default About