import React from 'react';
import { Droplets } from 'lucide-react';

const MilletRava = () => {
  const ravaTypes = [
    { name: 'Ragi Rava', tamil: 'ராகி ரவை' },
    { name: 'Kambu Rava', tamil: 'கம்பு ரவை' },
    { name: 'Cholam Rava', tamil: 'சோளம் ரவை' },
    { name: 'Varagu Rava', tamil: 'வரகு ரவை' },
    { name: 'Saamai Rava', tamil: 'சாமை ரவை' },
    { name: 'Thinai Rava', tamil: 'திணை ரவை' },
    { name: 'Kuthiraivali Rava', tamil: 'குதிரைவாலி ரவை' },
    { name: 'Mixed Millet Rava', tamil: 'கலப்பு சிறுதானிய ரவை' }
  ];

  return (
    <section id="millet-rava" className="py-16 bg-cream-50">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Droplets className="w-8 h-8 text-cream-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800">Millet Rava</h2>
          </div>
          <h3 className="text-2xl font-semibold text-brown-700 mb-2">Premium Semolina Collection</h3>
          <p className="text-lg font-tamil text-brown-600">சிறந்த தரமான சிறுதானிய ரவை தொகுப்பு</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ravaTypes.map((rava, index) => (
            <div key={index} className="bg-white rounded-xl p-6 card-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-square mb-4 bg-gradient-to-br from-cream-100 to-brown-100 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={`https://images.pexels.com/photos/4110${String(index + 250).padStart(3, '0')}/pexels-photo-4110${String(index + 250).padStart(3, '0')}.jpeg?auto=compress&cs=tinysrgb&w=300`}
                  alt={rava.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=300';
                  }}
                />
              </div>
              
              <div className="text-center">
                <h4 className="text-lg font-semibold text-brown-800 mb-1">
                  {rava.name}
                </h4>
                <p className="text-sm font-tamil text-brown-600">
                  {rava.tamil}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-cream-100 text-cream-800 rounded-full font-medium">
            <span className="mr-2">🥣</span>
            Perfect for upma, idli, dosa and traditional recipes
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilletRava;