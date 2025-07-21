import React from 'react';
import { ShoppingBasket } from 'lucide-react';

const MilletBasket = () => {
  const milletProducts = [
    { english: 'Ragi', tamil: 'ராகி' },
    { english: 'Kambu', tamil: 'கம்பு' },
    { english: 'Cholam', tamil: 'சோளம்' },
    { english: 'Red Cholam', tamil: 'சிவப்பு சோளம்' },
    { english: 'Horse Gram', tamil: 'கொள்ளு' },
    { english: 'Mappillai Samba Rice ', tamil: 'மாப்பிள்ளை சம்பா அரிசி' },
    { english: 'Poongar Rice', tamil: 'பூங்கார் அரிசி' },
    { english: 'Karunguruvai Rice', tamil: 'கருங்குறுவை அரிசி' },
    { english: 'Hand-pounded Rice', tamil: 'கைகுத்தல் அரிசி' },
    { english: 'Kuthiraivali Rice', tamil: 'குதிரைவாலி அரிசி' },
    { english: 'Varagu Rice', tamil: 'வரகு அரிசி' },
    { english: 'Red Rice', tamil: 'சிவப்பு அரிசி' },
    { english: 'Bamboo Rice', tamil: 'மூங்கில் அரிசி' },
    { english: 'Karuppu Kavuni Rice', tamil: 'கருப்பு கவுனி அரிசி' },
    { english: 'Saamai Rice', tamil: 'சாமை அரிசி' },
    { english: 'Thinai Rice', tamil: 'திணை அரிசி' },
    { english: 'Parboiled Varagu', tamil: 'புலுங்கல் வரகு' },
    { english: 'Parboiled Saamai', tamil: 'புலுங்கல் சாமை' },
    { english: 'Parboiled Kuthiraivali', tamil: 'புலுங்கல் குதிரைவாலி' },
    { english: 'Whole Black Gram', tamil: 'உருட்டு உளுந்து' },
    { english: 'Split Urad Dal', tamil: 'உளுந்தம் பருப்பு' },
    { english: 'Cholam Aval', tamil: 'சோள அவல்' },
    { english: 'Kambu Aval', tamil: 'கம்பு அவல்' },
    { english: 'Ragi Aval', tamil: 'ராகி அவல்' },
    { english: 'Red Rice Flakes', tamil: 'சிவப்பு அரிசி அவல்' },
    { english: 'Wheat Flakes', tamil: 'கோதுமை அவல்' },
    { english: 'Nattu Sakkarai', tamil: 'நாட்டு சர்க்கரை' },
    { english: 'Rava', tamil: 'ரவை' },
    { english: 'Semiya', tamil: 'சேமியா' },
    { english: 'Moong Dal', tamil: 'பாசி பயறு' },
  ];

  return (
    <section id="millet-basket" className="py-16 bg-cream-50">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <ShoppingBasket className="w-8 h-8 text-primary-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800">Millet Basket</h2>
          </div>
          <h3 className="text-2xl font-semibold text-brown-700 mb-2">Traditional Grains & Millets</h3>
          <p className="text-lg font-tamil text-brown-600">
            பாரம்பரிய தானியங்கள் மற்றும் சிறுதானியங்கள்
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {milletProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 card-shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-center">
                <h4 className="text-sm sm:text-base font-semibold text-brown-800 mb-1">
                  {product.english}
                </h4>
                <p className="text-xs sm:text-sm font-tamil text-brown-600">{product.tamil}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-primary-100 text-primary-800 rounded-full font-medium text-sm sm:text-base">
            <span className="mr-2">🌾</span>
            All products are naturally processed and chemical-free
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilletBasket;
