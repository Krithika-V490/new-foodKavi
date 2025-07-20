import React from 'react';

const MilletNoodles = () => {
  const noodles = [
    { name: 'Multi-Millet Noodles', image: 'multimilletnoodles.jpeg' },
    { name: 'Kambu Noodles', image: 'kambunoodles.jpeg' },
    { name: 'Kaikuthal Arisi Noodles', image: 'kaikuthalarisinoodles.jpeg' },
    { name: 'Red Rice Noodles', image: 'red ricenoodles.jpeg' },
    { name: 'Egg Noodles', image: 'wheatnoodles.jpeg' },
    { name: 'Wheat Noodles', image: 'eggnoodles.jpeg' },
    { name: 'Masala Noodles', image: 'masalanoodles.jpeg' },
    { name: 'Samai Noodles', image: 'samainoodles.jpeg' },
    { name: 'Kudhirai Vaali Noodles', image: 'kuthiraivaalinoodles.jpeg' },
    { name: 'Karuppu Kavuni Noodles', image: 'karuppukavuninoodles.jpeg' },
  ];

  return (
    <div id="millet-noodles" className="bg-[#fff9f0] min-h-screen py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#634832]">Our Millet Noodles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {noodles.map((noodle, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-md overflow-hidden bg-white transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={`/${noodle.image}`}
              alt={noodle.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-[#634832]">{noodle.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MilletNoodles;
