import React from 'react';
import { Droplets } from 'lucide-react';

const DailyBatter = () => {
  const dailyBatter = [
    {
      day: 'MONDAY',
      tamil: 'திங்கள்',
      product: 'Sivappu Cholam Maavu',
      tamilProduct: 'சிவப்பு சோளம் மாவு',
      image: '/sivappusolammmavu.jpeg'
    },
    {
      day: 'TUESDAY',
      tamil: 'செவ்வாய்',
      product: 'Poongar Maavu',
      tamilProduct: 'பூங்கார் மாவு',
      image: '/poongarmaavu.jpeg'
    },
    {
      day: 'WEDNESDAY',
      tamil: 'புதன்',
      product: 'Ragi Maavu',
      tamilProduct: 'ராகி மாவு',
      image: '/ragimaavu.jpeg'
    },
    {
      day: 'THURSDAY',
      tamil: 'வியாழன்',
      product: 'Mapillai Samba Maavu',
      tamilProduct: 'மாப்பிள்ளை சம்பா மாவு',
      image: '/mapillaisambamaavu.jpeg'
    },
    {
      day: 'FRIDAY',
      tamil: 'வெள்ளி',
      product: 'Kambu Maavu',
      tamilProduct: 'கம்பு மாவு',
      image: '/kambumaavu.jpg'
    },
    {
      day: 'SATURDAY',
      tamil: 'சனி',
      product: 'Karuppu Kavuni Maavu',
      tamilProduct: 'கருப்பு கவுனி மாவு',
      image: '/karuppukavunimaavu.jpeg'
    }
  ];

  return (
    <section className="py-16 bg-cream-50">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Droplets className="w-8 h-8 text-primary-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800">Daily Special Millet Batter</h2>
          </div>
          <h3 className="text-2xl font-semibold text-brown-700 mb-2">Millet Batter Schedule</h3>
          <p className="text-lg font-tamil text-brown-600">தினசரி சிறுதானிய மாவு அட்டவணை</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dailyBatter.map((batter, index) => (
            <div key={index} className="bg-white rounded-xl p-6 card-shadow hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-12 mb-4">
                <img
                  src={batter.image}
                  alt={batter.product}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full mr-2">
                    {batter.day}
                  </span>
                  <span className="text-sm font-tamil text-brown-600">
                    {batter.tamil}
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-brown-800 mb-1">
                  {batter.product}
                </h4>
                <p className="text-base font-tamil text-brown-600">
                  {batter.tamilProduct}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailyBatter;