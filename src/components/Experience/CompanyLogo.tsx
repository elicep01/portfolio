import React from 'react';

interface CompanyLogoProps {
  company: string;
}

const CompanyLogo = ({ company }: CompanyLogoProps) => {
  if (company.includes('Siemens')) {
    return (
      <div className="mb-2">
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
      <div className="mb-2">
        <img 
          src="https://www.tataautocomp.com/images/taco-logo.png"
          alt="TATA AutoComp Systems"
          className="h-8 w-auto object-contain"
        />
      </div>
    );
  }

  if (company.includes('AICVS')) {
    return (
      <div className="mb-2">
        <img 
          src="https://www.cumminscollege.org/wp-content/uploads/2021/05/aicvs-logo.png"
          alt="AICVS"
          className="h-8 w-auto object-contain"
        />
      </div>
    );
  }
  
  return null;
};

export default CompanyLogo;