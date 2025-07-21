import React from 'react';
import { ShoppingBasket, Wheat, Droplets, Nut } from 'lucide-react';

const ProductCollections = () => {
  const collections = [
    {
      title: 'Millet Basket',
      tamil: 'சிறுதானிய வகைகள் ',
      icon: ShoppingBasket,
      description: 'Premium collection of traditional millets and grains',
      tamilDesc: 'பாரம்பரிய சிறுதானியங்கள் மற்றும் தானியங்களின் சிறந்த தொகுப்பு',
      color: 'primary',
      href: '#millet-basket',
    },
    {
      title: 'Millet Noodles',
      tamil: 'சிறுதானிய நூடுல்ஸ்',
      icon: Wheat,
      description: 'Healthy and delicious millet-based noodles',
      tamilDesc: 'ஆரோக்கியமான மற்றும் சுவையான சிறுதானிய நூடுல்ஸ்',
      color: 'green',
      href: '#millet-noodles',
    },
    {
      title: 'Cooking Oils',
      tamil: 'சமையல் எண்ணெய்கள்',
      icon: Droplets,
      description: 'Cold-pressed traditional cooking oils',
      tamilDesc: 'குளிர் அழுத்தம் பாரம்பரிய சமையல் எண்ணெய்கள்',
      color: 'brown',
      href: '#cooking-oils',
    },
    {
      title: 'Nuts',
      icon: Nut,
      description: 'Fresh and premium quality nuts',
      color: 'primary',
      href: '#nuts',
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white';
      case 'green':
        return 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white';
      case 'cream':
        return 'bg-cream-100 text-cream-600 group-hover:bg-cream-600 group-hover:text-white';
      case 'brown':
        return 'bg-brown-100 text-brown-600 group-hover:bg-brown-600 group-hover:text-white';
      default:
        return 'bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white';
    }
  };

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">Product Collections</h2>
          <h3 className="text-2xl font-semibold text-brown-700 mb-2">Our Premium Range</h3>
          <p className="text-lg font-tamil text-brown-600">எங்கள் சிறந்த தரமான பொருட்கள்</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <a
              key={index}
              href={collection.href}
              className="group bg-cream-50 rounded-xl p-6 sm:p-8 card-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-center">
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 ${getColorClasses(
                    collection.color
                  )}`}
                >
                  <collection.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>

                <h4 className="text-base sm:text-xl font-semibold text-brown-800 mb-2">
                  {collection.title}
                </h4>
                <p className="text-sm sm:text-base font-tamil text-brown-600 mb-2">{collection.tamil}</p>
                <p className="text-brown-600 text-sm sm:text-base mb-1">{collection.description}</p>
                <p className="text-sm font-tamil text-brown-500">{collection.tamilDesc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCollections;
