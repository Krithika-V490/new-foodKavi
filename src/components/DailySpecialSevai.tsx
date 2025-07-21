import React from 'react';
import { Calendar } from 'lucide-react';

const DailySpecials = () => {
  const dailySpecials = [
    {
      day: 'MONDAY',
      tamil: 'திங்கள்',
      product: 'Kambu Sevai',
      tamilProduct: 'கம்பு சேவை',
      image: '/kambusevai.jpeg',
    },
    {
      day: 'TUESDAY',
      tamil: 'செவ்வாய்',
      product: 'Karuppu Kavuni Sevai',
      tamilProduct: 'கருப்பு கவுனி சேவை',
      image: '/karuppukavunisevai.jpeg',
    },
    {
      day: 'WEDNESDAY',
      tamil: 'புதன்',
      product: 'Makka Cholam Sevai',
      tamilProduct: 'மக்கா சோளம் சேவை',
      image: '/makkacholasevai.jpeg',
    },
    {
      day: 'THURSDAY',
      tamil: 'வியாழன்',
      product: 'Godhuma Sevai',
      tamilProduct: 'கோதுமை சேவை',
      image: '/godhumasevai.jpeg',
    },
    {
      day: 'FRIDAY',
      tamil: 'வெள்ளி',
      product: 'Red Rice Sevai',
      tamilProduct: 'சிவப்பு அரிசி சேவை',
      image: '/redricesevai.jpeg',
    },
    {
      day: 'SATURDAY',
      tamil: 'சனி',
      product: 'Ragi Sevai',
      tamilProduct: 'ராகி சேவை',
      image: '/ragisevai.jpeg',
    },
  ];

  return (
    <section id="daily-specials" className="py-16 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-8 h-8 text-primary-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800">
              Daily Special Millet Sevai
            </h2>
          </div>
          <h3 className="text-2xl font-semibold text-brown-700 mb-2">Millet Sevai Schedule</h3>
          <p className="text-lg font-tamil text-brown-600">தினசரி சிறுதானிய சேவை அட்டவணை</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {dailySpecials.map((special, index) => (
            <div
              key={index}
              className="bg-cream-50 rounded-xl overflow-hidden card-shadow hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={special.image}
                alt={special.product}
                className="w-full h-36 sm:h-40 md:h-44 object-cover"
              />

              <div className="text-center p-4">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-sm font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full mr-2">
                    {special.day}
                  </span>
                  <span className="text-sm font-tamil text-brown-600">{special.tamil}</span>
                </div>

                <h4 className="text-base font-semibold text-brown-800 mb-1">{special.product}</h4>
                <p className="text-sm font-tamil text-brown-600">{special.tamilProduct}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailySpecials;
