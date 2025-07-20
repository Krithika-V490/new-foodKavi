import React from 'react';
import { Nut } from 'lucide-react';

const Nuts = () => {
  const nutTypes = [
    { name: 'White Sesame', image: 'whitesesame.jpeg' },
    { name: 'Black Sesame', image: 'blacksesame.jpg' },
    { name: 'Peanuts', image: 'peanuts.jpg' },
    { name: 'Athipalam', image: 'athipalam.jpg' },
    { name: 'Pumpkin Seeds', image: 'pumpkinseeds.jpeg' },
    { name: 'Dry Grapes', image: 'drygrapes.jpeg' },
    { name: 'Dates', image: 'dates.jpeg' },
    { name: 'Pista', image: 'pista.webp' },
    { name: 'Walnut', image: 'walnut.jpeg' },
    { name: 'Cashew', image: 'cashew.jpeg' },
    { name: 'Almonds', image: 'almonds.jpeg' }
  ];

  return (
    <section id="nuts" className="py-16 bg-cream-50">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Nut className="w-8 h-8 text-primary-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800">Premium Nuts</h2>
          </div>
          <h3 className="text-2xl font-semibold text-brown-700 mb-2">Fresh & Quality Nuts</h3>
          <p className="text-lg font-tamil text-brown-600">புதிய மற்றும் சிறந்த தரமான கொட்டைகள்</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {nutTypes.map((nut, index) => (
            <div key={index} className="bg-white rounded-xl p-6 card-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-square mb-4 bg-gradient-to-br from-primary-100 to-cream-100 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={`/${nut.image}`}
                  alt={nut.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/fallback.jpg'; // optional fallback if image is missing
                  }}
                />
              </div>

              <div className="text-center">
                <h4 className="text-lg font-semibold text-brown-800">
                  {nut.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-primary-100 text-primary-800 rounded-full font-medium">
            <span className="mr-2">🥜</span>
            Carefully selected premium quality nuts for your health
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nuts;
