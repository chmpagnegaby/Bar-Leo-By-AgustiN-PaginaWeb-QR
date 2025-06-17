
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-serif font-bold text-xl">R</span>
            </div>
            <div className="font-serif text-2xl font-bold text-charcoal-900">
              Restaurante Elegante
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-charcoal-700 hover:text-gold-500 transition-colors font-medium"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('sobre-nosotros')}
              className="text-charcoal-700 hover:text-gold-500 transition-colors font-medium"
            >
              Sobre Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-charcoal-700 hover:text-gold-500 transition-colors font-medium"
            >
              Menú
            </button>
            <button 
              onClick={() => scrollToSection('galeria')}
              className="text-charcoal-700 hover:text-gold-500 transition-colors font-medium"
            >
              Galería
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-charcoal-700 hover:text-gold-500 transition-colors font-medium"
            >
              Contacto
            </button>
          </nav>

          {/* Reservation Button */}
          <Button 
            className="hidden md:block bg-gold-500 hover:bg-gold-600 text-white font-medium px-6 py-2 transition-all duration-300 transform hover:scale-105"
          >
            Reservar Mesa
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-charcoal-700 hover:text-gold-500 transition-colors font-medium text-left px-4"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('sobre-nosotros')}
                className="text-charcoal-700 hover:text-gold-500 transition-colors font-medium text-left px-4"
              >
                Sobre Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-charcoal-700 hover:text-gold-500 transition-colors font-medium text-left px-4"
              >
                Menú
              </button>
              <button 
                onClick={() => scrollToSection('galeria')}
                className="text-charcoal-700 hover:text-gold-500 transition-colors font-medium text-left px-4"
              >
                Galería
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-charcoal-700 hover:text-gold-500 transition-colors font-medium text-left px-4"
              >
                Contacto
              </button>
              <div className="px-4">
                <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white font-medium">
                  Reservar Mesa
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
