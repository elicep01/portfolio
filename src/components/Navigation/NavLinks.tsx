import React from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' }
];

const NavLinks = () => {
  return (
    <div className="flex gap-6">
      {links.map(({ href, label }) => (
        <a 
          key={href}
          href={href}
          className="hover:text-primary transition-colors"
        >
          {label}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;