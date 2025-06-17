import React, { useState, useEffect } from 'react';
import logo from '../imagenes/6001e256-140c-4783-b279-f7079c6caca6-removebg-preview (2).png';
import mc from '../imagenes/monesteriocalidad-removebg-preview-removebg-preview.png';

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
    <header
      className={`h-32 md:h-40 fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between h-full px-4 md:px-10">
        {/* Imagen izquierda (mc) */}
        <div className="w-16 h-16 md:w-20 md:h-20">
          <img
            src={mc}
            alt="MC"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Imagen central (logo) */}
        <div className="w-20 h-20 md:w-24 md:h-24">
          <img
            src={logo}
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Espacio a la derecha para balance visual (puedes usarlo para menú futuro) */}
        <div className="w-16 h-16 md:w-20 md:h-20 invisible" />
      </div>
    </header>
  );
};

export default Header;
