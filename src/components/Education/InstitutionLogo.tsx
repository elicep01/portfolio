import React from 'react';

interface InstitutionLogoProps {
  institution: string;
}

const InstitutionLogo = ({ institution }: InstitutionLogoProps) => {
  if (institution.includes('Wisconsin-Madison')) {
    return (
      <div className="mb-2 h-16 w-48 flex items-center justify-start">
        <img 
          src="/uwmad.jpeg"
          alt="University of Wisconsin-Madison"
          className="h-12 w-auto object-contain"
        />
      </div>
    );
  }
  
  if (institution.includes('Cummins College')) {
    return (
      <div className="mb-2 h-16 w-48 flex items-center justify-start">
        <img 
          src="/ccoew.png"
          alt="Cummins College of Engineering for Women"
          className="h-12 w-auto object-contain"
        />
      </div>
    );
  }
  
  return null;
};

export default InstitutionLogo;