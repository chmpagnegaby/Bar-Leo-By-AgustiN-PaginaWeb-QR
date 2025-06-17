
import React from 'react';
import { Card } from '@/components/ui/card';
import { Award, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre-nosotros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
              Nuestra Historia
            </h2>
            
            <p className="text-lg text-charcoal-700 leading-relaxed">
              Desde 1985, hemos sido pioneros en la alta cocina, combinando técnicas tradicionales 
              con innovación culinaria. Nuestro compromiso con la excelencia nos ha convertido en 
              referente gastronómico.
            </p>
            
            <p className="text-lg text-charcoal-700 leading-relaxed">
              Cada plato es una obra de arte, elaborado con ingredientes de la más alta calidad 
              y presentado con la elegancia que nos caracteriza. Nuestro equipo de chefs, liderado 
              por el Chef Ejecutivo, crea experiencias gastronómicas inolvidables.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-500 mb-2">38+</div>
                <div className="text-sm text-charcoal-600">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-500 mb-2">50k+</div>
                <div className="text-sm text-charcoal-600">Clientes Satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-500 mb-2">5</div>
                <div className="text-sm text-charcoal-600">Estrellas Michelin</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-scale-in">
            <img
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Interior del restaurante"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-500 rounded-lg flex items-center justify-center">
              <Award className="text-white w-16 h-16" />
            </div>
          </div>
        </div>
        
        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-gold-500 w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-4">Calidad Premium</h3>
            <p className="text-charcoal-600">
              Ingredientes seleccionados de los mejores proveedores locales e internacionales.
            </p>
          </Card>
          
          <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-gold-500 w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-4">Pasión Culinaria</h3>
            <p className="text-charcoal-600">
              Cada plato es preparado con amor y dedicación por nuestro equipo de chefs expertos.
            </p>
          </Card>
          
          <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-gold-500 w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-4">Servicio Excepcional</h3>
            <p className="text-charcoal-600">
              Atención personalizada que hace de cada visita una experiencia memorable.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
