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
      className={`h-40 fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="relative h-full w-full">
        {/* Imagen izquierda (mc) */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 w-20 h-20">
          <img src={mc} style={{scale: '1.5', marginLeft: '10%'}} alt="MC" className="w-full h-full object-contain " />
        </div>

        {/* Imagen central (logo) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-150 w-20 h-20">
          <img src={logo} alt="Logo" style={{scale: '2'}} className="w-full h-full object-contain" />
        </div>
      </div>
    </header>
  );
};

export default Header;
