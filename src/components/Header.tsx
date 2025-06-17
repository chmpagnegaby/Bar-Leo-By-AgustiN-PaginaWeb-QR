
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-20">
          {/* Logo y Nombre */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-serif font-bold text-xl">L</span>
            </div>
            <div className={`font-serif text-2xl font-light tracking-wide transition-colors ${
              isScrolled ? 'text-charcoal-900' : 'text-white'
            }`}>
              LINA
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
