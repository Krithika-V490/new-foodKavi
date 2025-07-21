import { Heart, Leaf, Award, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="py-10 md:py-16 lg:py-24 bg-cover bg-center"
      style={{ backgroundImage: "url('/background.avif')" }}
    >
      <div className="container-max px-4 md:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Tagline */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary-800 mb-4 md:mb-6 leading-tight">
            Wholesome Millet Goodness
          </h1>
          <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold text-brown-700 mb-6 md:mb-8">
            From Our Kitchen to Yours
          </h2>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-10 md:mb-12">
            {[
              {
                icon: <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />,
                title: "100% Natural",
                desc: "Pure, unprocessed millets from trusted farmers",
                bg: "bg-green-100",
              },
              {
                icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />,
                title: "Made with Love",
                desc: "Traditional recipes passed down through generations",
                bg: "bg-primary-100",
              },
              {
                icon: <Award className="w-6 h-6 sm:w-8 sm:h-8 text-cream-600" />,
                title: "Premium Quality",
                desc: "Carefully selected and processed for best nutrition",
                bg: "bg-cream-100",
              },
              {
                icon: <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />,
                title: "FSSAI Certified",
                desc: "Approved & licensed for safe food standards",
                bg: "bg-yellow-100",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-3 sm:p-4 md:p-6 bg-white/70 rounded-xl shadow-md"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 ${item.bg} rounded-full flex items-center justify-center mb-3`}
                >
                  {item.icon}
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-brown-800 mb-1 text-center">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-brown-600 text-center">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Location Badge */}
          <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-primary-600 text-white rounded-full font-medium text-sm md:text-base">
            <span className="mr-2">📍</span>
            Proudly from Coimbatore, Tamil Nadu
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
