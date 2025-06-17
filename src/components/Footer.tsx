
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer className="bg-charcoal-900 text-white py-12">
      <div 
        ref={ref}
        className={`container mx-auto px-4 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}
      >
        <h3 className="font-serif text-2xl font-light mb-4 tracking-wide">
          LINA RESTAURANTE
        </h3>
        
        <div className="w-24 h-px bg-white/30 mx-auto mb-6"></div>
        
        <div className="space-y-2 text-sm font-light tracking-wide">
          <p>Calle Principal, 123</p>
          <p>28001 Madrid</p>
          <p>+34 123 456 789</p>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-xs text-white/60 tracking-wide">
            © 2024 Lina Restaurante. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
