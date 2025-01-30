import React from 'react';

interface NavLinksProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' }
];

const NavLinks = ({ isMobile, onItemClick }: NavLinksProps) => {
  return (
    <div className={`${isMobile ? 'flex flex-col space-y-4' : 'flex gap-6'}`}>
      {links.map(({ href, label }) => (
        <a 
          key={href}
          href={href}
          className="hover:text-primary transition-colors"
          onClick={onItemClick}
        >
          {label}
        </a>
      ))}
    </div>
  );
};

export default NavLinks