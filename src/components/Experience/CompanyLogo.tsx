import React from 'react';

interface CompanyLogoProps {
  company: string;
}

const CompanyLogo = ({ company }: CompanyLogoProps) => {
  if (company.includes('Siemens')) {
    return (
      <div className="mb-2 h-16 w-48 flex items-center justify-start">
        <img 
          src="/siemens.png"
          alt="Siemens"
          className="h-12 w-auto object-contain"
        />
      </div>
    );
  }

  if (company.includes('TATA AutoComp')) {
    return (
      <div className="mb-2 h-16 w-48 flex items-center justify-start">
        <img 
          src="/tata.png"
          alt="TATA AutoComp Systems"
          className="h-12 w-auto object-contain"
        />
      </div>
    );
  }

  if (company.includes('UW-Madison')) {
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

  if (company.includes('AICVS')) {
    return (
      <div className="mb-2 h-16 w-48 flex items-center justify-start">
        <img 
          src="/aicvs.png"
          alt="AICVS"
          className="h-12 w-auto object-contain"
        />
      </div>
    );
  }

  if (company.includes('IEEE Chapter')) {
    return (
      <div className="mb-2 h-16 w-48 flex items-center justify-start">
        <img 
          src="/ieee.png"
          alt="IEEE"
          className="h-12 w-auto object-contain"
        />
      </div>
    );
  }

  if (company.includes('Dept. of Electronics')) {
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

export default CompanyLogo;