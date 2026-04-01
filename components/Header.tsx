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
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-sm py-3 border-b border-slate-200/50' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <h1 className="text-xl md:text-2xl font-bold text-primary tracking-[0.1em] font-serif transition-colors group-hover:text-gold">
            RINALDO TORQUATO
          </h1>
          <div className="flex items-center gap-2">
            <div className="h-px w-4 bg-gold"></div>
            <span className="text-[10px] md:text-xs text-slate-500 uppercase tracking-[0.3em] font-bold">
              Advocacia Tributária
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-600 hover:text-gold font-bold text-[11px] uppercase tracking-[0.2em] transition-all relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-gold hover:after:w-full after:transition-all"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="https://wa.me/5565981126567?text=Ol%C3%A1%20Dr.%20Rinaldo%2C%20gostaria%20de%20uma%20avalia%C3%A7%C3%A3o%20sobre%20isen%C3%A7%C3%A3o%20de%20IR."
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg text-xs font-bold tracking-widest uppercase hover:bg-primary-dark transition-all shadow-lg shadow-primary/10 hover:shadow-primary/20"
          >
            <Phone size={14} className="text-gold" />
            <span>Contato</span>
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