import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Orientações', href: '#orientacoes' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-4' : 'bg-white/90 backdrop-blur-sm py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-bold text-primary tracking-wide font-serif">
            RINALDO TORQUATO
          </h1>
          <span className="text-xs md:text-sm text-gray-500 uppercase tracking-widest">
            Advogado
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-accent font-medium text-sm uppercase tracking-wide transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="https://wa.me/5565996931198?text=Ol%C3%A1%20Dr.%20Rinaldo%2C%20gostaria%20de%20uma%20avalia%C3%A7%C3%A3o%20sobre%20isen%C3%A7%C3%A3o%20de%20IR."
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary-light transition-colors"
          >
            <Phone size={16} />
            <span>(65) 99693-1198</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-800 hover:text-accent font-medium py-2 border-b border-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;