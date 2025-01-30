import React from 'react';

interface CompanyLogoProps {
  company: string;
}

const CompanyLogo = ({ company }: CompanyLogoProps) => {
  if (company.includes('Siemens')) {
    return (
      <div className="mb-2 h-12 w-48 flex items-center">
        <img 
          src="/siemens.png"
          alt="Siemens"
          className="h-8 w-auto object-contain"
        />
      </div>
    );
  }

  if (company.includes('TATA AutoComp')) {
    return (
      <div className="mb-2 h-12 w-48 flex items-center">
        <img 
          src="/tata.jpg"
          alt="TATA AutoComp Systems"
          className="h-8 w-auto object-contain"
        />
      </div>
    );
  }

  if (company.includes('AICVS')) {
    return (
      <div className="mb-2 h-12 w-48 flex items-center">
        <img 
          src="/aicvs.png"
          alt="AICVS"
          className="h-8 w-auto object-contain"
        />
      </div>
    );
  }

  if (company.includes('IEEE Chapter')) {
    return (
      <div className="mb-2 h-12 w-48 flex items-center">
        <img 
          src="/ieee.png"
          alt="IEEE"
          className="h-8 w-auto object-contain"
        />
      </div>
    );
  }

  if (company.includes('Dept. of Electronics')) {
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

export default CompanyLogo;