
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-gray-50">
      <div 
        ref={ref}
        className={`container mx-auto px-4 max-w-4xl text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}
      >
        <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal-900 mb-8 tracking-wide">
          NUESTRA FILOSOFÍA
        </h2>
        
        <div className="w-24 h-px bg-charcoal-400 mx-auto mb-12"></div>
        
        <div className="space-y-8 text-lg text-charcoal-700 font-light leading-relaxed">
          <p>
            En Lina creemos en la simplicidad de los buenos ingredientes y en el respeto 
            hacia las tradiciones culinarias que nos han precedido.
          </p>
          
          <p>
            Cada plato es una celebración de los sabores auténticos, presentados con 
            la elegancia y el cuidado que merecen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
