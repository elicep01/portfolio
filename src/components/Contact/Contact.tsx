import React from 'react';
import Container from '../common/Container';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <Container>
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
};

export default Contact;