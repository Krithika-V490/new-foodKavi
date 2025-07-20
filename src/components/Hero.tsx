
import { Heart, Leaf, Award, ShieldCheck } from 'lucide-react'; // added ShieldCheck for FSSAI

const Hero = () => {
  return (
    <section
      id="home"
      className="py-16 lg:py-24 bg-cover bg-center"
      style={{ backgroundImage: "url('/background.avif')" }} // 👈 Your aesthetic background
    >
      <div className="container-max section-padding">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Tagline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-800 mb-6 leading-tight">
            Wholesome Millet Goodness
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-brown-700 mb-8">
            From Our Kitchen to Yours
          </h2>

          {/* Features */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-white/70 rounded-xl card-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-brown-800 mb-2">100% Natural</h3>
              <p className="text-brown-600 text-center">Pure, unprocessed millets from trusted farmers</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/70 rounded-xl card-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-brown-800 mb-2">Made with Love</h3>
              <p className="text-brown-600 text-center">Traditional recipes passed down through generations</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/70 rounded-xl card-shadow">
              <div className="w-16 h-16 bg-cream-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-cream-600" />
              </div>
              <h3 className="text-lg font-semibold text-brown-800 mb-2">Premium Quality</h3>
              <p className="text-brown-600 text-center">Carefully selected and processed for best nutrition</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/70 rounded-xl card-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-brown-800 mb-2">FSSAI Certified</h3>
              <p className="text-brown-600 text-center">Approved & licensed for safe food standards</p>
            </div>
          </div>

          {/* Location Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-full font-medium">
            <span className="mr-2">📍</span>
            Proudly from Coimbatore, Tamil Nadu
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
