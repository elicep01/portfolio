import React, { useState } from 'react';
import Container from '../common/Container';
import NavLinks from './NavLinks';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <Container>
        <div className="h-16 flex items-center justify-between px-4 md:px-0">
          <a href="#" className="font-bold text-xl hover:text-primary transition-colors">
            Elice Priyadarshini
          </a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <NavLinks />
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="py-4 px-4">
              <NavLinks isMobile={true} onItemClick={() => setIsMenuOpen(false)} />
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar