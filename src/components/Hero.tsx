
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import fondo from '@/imagenes/fondo.jpg';

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToMenu = () => {
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(' + fondo + ')',
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div 
        ref={ref}
        className={`relative z-10 text-center text-white max-w-4xl mx-auto px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}
      >
        <h1 className="font-serif text-6xl md:text-8xl font-light mb-[25%] tracking-wide">
          BAR LEO BY AGUSTÍN
        </h1>
        
        
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToMenu}
          className="text-white hover:text-gold-400 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
