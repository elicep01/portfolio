import React from 'react';
import Container from '../common/Container';
import EducationList from './EducationList';

const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <Container>
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <EducationList />
      </Container>
    </section>
  );
};

export default Education;