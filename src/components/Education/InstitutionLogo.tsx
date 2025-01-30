import React from 'react';

interface InstitutionLogoProps {
  institution: string;
}

const InstitutionLogo = ({ institution }: InstitutionLogoProps) => {
  if (institution.includes('Wisconsin-Madison')) {
    return (
      <div className="mb-2 h-12 w-48 flex items-center">
        <img 
          src="/uwmad.jpeg"
          alt="University of Wisconsin-Madison"
          className="h-full w-full object-contain object-left"
        />
      </div>
    );
  }
  
  if (institution.includes('Cummins College')) {
    return (
      <div className="mb-2 h-12 w-48 flex items-center">
        <img 
          src="/ccoew.png"
          alt="Cummins College of Engineering for Women"
          className="h-8 w-auto object-contain"
        />
      </div>
    );
  }
  
  return null;
};

export default InstitutionLogo;