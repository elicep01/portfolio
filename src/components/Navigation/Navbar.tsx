import React from 'react';
import Container from '../common/Container';
import NavLinks from './NavLinks';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <Container>
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-xl hover:text-primary transition-colors">
            Elice Priyadarshini
          </a>
          <NavLinks />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;