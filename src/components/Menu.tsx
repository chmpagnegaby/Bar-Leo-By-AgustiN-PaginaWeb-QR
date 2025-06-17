
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FileText } from 'lucide-react';

const Menu = () => {
  const handleViewMenu = (type: 'comida' | 'vinos') => {
    // Aquí abrirás tu PDF para visualización
    const pdfUrl = type === 'comida' ? '/carta-comida.pdf' : '/carta-vinos.pdf';
    window.open(pdfUrl, '_blank');
  };

  const featuredDishes = [
    {
      name: "Salmón a la Parrilla",
      description: "Salmón fresco con salsa de eneldo y vegetales de temporada",
      price: "€32",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Risotto de Trufa",
      description: "Arroz cremoso con trufa negra y parmesano envejecido",
      price: "€28",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Cordero Confitado",
      description: "Cordero cocido a baja temperatura con hierbas provenzales",
      price: "€38",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
            Nuestro Menú
          </h2>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
            Descubre nuestra selección de platos gourmet y vinos excepcionales
          </p>
        </div>

        {/* Menu Cards */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Card className="p-8 bg-gradient-to-br from-gold-50 to-gold-100 border-gold-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="text-white w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-charcoal-900">
                Carta de Comida
              </h3>
              <p className="text-charcoal-600 mb-6">
                Explora nuestra exquisita selección de platos principales, entrantes y postres
              </p>
              <Button 
                onClick={() => handleViewMenu('comida')}
                className="bg-gold-500 hover:bg-gold-600 text-white font-medium px-8 py-3 transition-all duration-300 transform hover:scale-105"
              >
                Ver Carta de Comida
              </Button>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-charcoal-50 to-charcoal-100 border-charcoal-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <div className="w-16 h-16 bg-charcoal-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="text-white w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4 text-charcoal-900">
                Carta de Vinos
              </h3>
              <p className="text-charcoal-600 mb-6">
                Descubre nuestra cuidada selección de vinos nacionales e internacionales
              </p>
              <Button 
                onClick={() => handleViewMenu('vinos')}
                className="bg-charcoal-800 hover:bg-charcoal-900 text-white font-medium px-8 py-3 transition-all duration-300 transform hover:scale-105"
              >
                Ver Carta de Vinos
              </Button>
            </div>
          </Card>
        </div>

        {/* Featured Dishes */}
        <div className="mb-12">
          <h3 className="font-serif text-3xl font-semibold text-center mb-12 text-charcoal-900">
            Platos Destacados
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full font-semibold">
                    {dish.price}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-serif text-xl font-semibold mb-2 text-charcoal-900">
                    {dish.name}
                  </h4>
                  <p className="text-charcoal-600 leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gold-500 hover:bg-gold-600 text-white font-medium px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
          >
            Reservar Mesa
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
