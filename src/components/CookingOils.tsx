import React from 'react';
import { Droplets } from 'lucide-react';

const CookingOils = () => {
  const oilTypes = [
    'நல்லெண்ணெய் (Sesame Oil)',
    'கடலை எண்ணெய் (Groundnut Oil)',
    'தேங்காய் எண்ணெய் (Coconut Oil)'
  ];

  const oilImages = [
    '/sesameoil.jpeg',
    '/groundnutoil.jpeg',
    '/coconutoil.jpg'
  ];

  return (
    <section id="cooking-oils" className="py-16 bg-white">
      <div className="container-max section-padding">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Droplets className="w-8 h-8 text-brown-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800">Cooking Oils</h2>
          </div>
          <h3 className="text-2xl font-semibold text-brown-700 mb-2">Cold-Pressed Traditional Oils</h3>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {oilTypes.map((oil, index) => (
            <div
              key={index}
              className="bg-cream-50 rounded-xl p-4 card-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] mb-4 bg-gradient-to-br from-brown-100 to-cream-100 rounded-lg overflow-hidden">
                <img
                  src={oilImages[index]}
                  alt={oil}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/fallback.jpg';
                  }}
                />
              </div>

              <div className="text-center">
                <h4 className="text-base sm:text-lg font-semibold text-brown-800 mb-1">
                  {oil}
                </h4>
                <p className="text-brown-600 text-xs sm:text-sm">
                  Traditional cold-pressed method
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-brown-100 text-brown-800 rounded-full font-medium">
            <span className="mr-2">🌿</span>
            Extracted using traditional wooden churners - Pure & Natural
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookingOils;
