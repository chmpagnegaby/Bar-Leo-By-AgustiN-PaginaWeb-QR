
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in-up">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Experiencia
          <br />
          <span className="text-gold-400">Gastronómica</span>
          <br />
          Única
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light max-w-2xl mx-auto">
          Descubre sabores extraordinarios en un ambiente elegante donde cada plato cuenta una historia
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-gold-500 hover:bg-gold-600 text-white font-medium px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => scrollToSection('menu')}
          >
            Ver Nuestro Menú
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-charcoal-900 font-medium px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
          >
            Reservar Mesa
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('sobre-nosotros')}
          className="text-white hover:text-gold-400 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
