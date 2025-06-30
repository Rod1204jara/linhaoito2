import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img 
              src="/logo_Prancheta 1.png" 
              alt="Estúdio Linha Oito" 
              className="h-8 w-auto"
              onError={(e) => {
                console.log('Logo não encontrada, usando fallback');
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="text-xl font-bold text-black ml-3">Linha Oito</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-black hover:text-[#000AFF] transition-colors duration-200 font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('projetos')}
              className="text-black hover:text-[#000AFF] transition-colors duration-200 font-medium"
            >
              Projetos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-[#000AFF] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
            <nav className="flex flex-col p-6 space-y-4">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-black hover:text-[#000AFF] transition-colors duration-200 font-medium"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('projetos')}
                className="text-left text-black hover:text-[#000AFF] transition-colors duration-200 font-medium"
              >
                Projetos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left bg-[#000AFF] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium w-fit"
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;