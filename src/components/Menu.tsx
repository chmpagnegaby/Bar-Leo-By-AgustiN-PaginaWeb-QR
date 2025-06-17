
import React from 'react';
import { FileText } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import vinos from '@/imagenes/vinos.jpg';
import comidas from '@/imagenes/comida.jpg';
const Menu = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  const handleViewMenu = (type: 'comida' | 'vinos') => {
    const pdfUrl = type === 'comida' ? '/carta-comida.pdf' : '/carta-vinos.pdf';
    window.open(pdfUrl, '_blank');
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal-900 mb-6 tracking-wide">
            CARTA
          </h2>
          
          <div className="w-24 h-px bg-charcoal-400 mx-auto mb-8"></div>
          
          <p className="text-charcoal-600 font-light tracking-wide">
            Descubre nuestra propuesta gastronómica
          </p>
        </div>

        {/* Menu Cards */}
        <div 
          ref={cardsRef}
          className={`grid md:grid-cols-2 gap-12 mb-20 transition-all duration-1000 delay-300 ${
            cardsVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}
        >
          {/* Carta de Comida */}
          <div className="text-center group cursor-pointer" onClick={() => handleViewMenu('comida')}>
            <div className="relative overflow-hidden mb-6">
              <img
                src={comidas}
                alt="Carta de Comida"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 p-4 rounded-full group-hover:bg-white transition-all duration-300">
                  <FileText className="w-8 h-8 text-charcoal-900" />
                </div>
              </div>
            </div>
            
            <h3 className="font-serif text-2xl font-light mb-4 text-charcoal-900 tracking-wide">
              COMIDA
            </h3>
            
            <p className="text-charcoal-600 font-light">
              Nuestra selección de platos principales
            </p>
          </div>

          {/* Carta de Vinos */}
          <div className="text-center group cursor-pointer" onClick={() => handleViewMenu('vinos')}>
            <div className="relative overflow-hidden mb-6">
              <img
                src={vinos}
                alt="Carta de Vinos"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 p-4 rounded-full group-hover:bg-white transition-all duration-300">
                  <FileText className="w-8 h-8 text-charcoal-900" />
                </div>
              </div>
            </div>
            
            <h3 className="font-serif text-2xl font-light mb-4 text-charcoal-900 tracking-wide">
              VINOS
            </h3>
            
            <p className="text-charcoal-600 font-light">
              Nuestra cuidada selección de vinos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
