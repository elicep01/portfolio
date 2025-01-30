import React from 'react';
import { Mail } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div>
      <p className="text-gray-600 mb-6">
        I'm currently seeking ML/AI internship opportunities for Summer 2025. Feel free to reach out if you'd like to discuss potential collaborations or opportunities.
      </p>
      
      <div className="flex items-center gap-2 text-gray-600">
        <Mail size={20} />
        <a 
          href="mailto:epriyadarshi@wisc.edu"
          className="hover:text-teal-600 transition-colors"
        >
          epriyadarshi[at]wisc[dot]edu
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;