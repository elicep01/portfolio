import React from 'react';
import Container from '../common/Container';
import ProjectCard from './ProjectCard';
import { projects } from './projectsData';

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <Container>
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects