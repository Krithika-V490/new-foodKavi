import React from 'react';
import { Heart, Users, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">About Us</h2>
          
          
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-cream-50 rounded-2xl p-8 md:p-12 card-shadow">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-brown-800 mb-4">A Mother's Vision for Purity & Health</h3>
            </div>

            <div className="prose prose-lg max-w-none text-brown-700 leading-relaxed">
              <p className="mb-6">
                Hello! I’m the heart behind KAVI FOOD PRODUCTS. This journey began with one simple dream:
                to give people access to food that’s clean, pure, and just like how we prepare at home.
                My love for traditional recipes and real ingredients led me to start with fresh homemade
                <strong> batter and sevai</strong>, made without shortcuts or preservatives.
              </p>

              <p className="mb-6">
                After gaining a year of hands-on experience as a partner in another brand, I felt it was time to bring
                my own vision to life. On <strong>April 1st, 2025</strong>, I launched KAVI FOOD PRODUCTS —
                and in just a short span, the love from my customers has been overwhelming. From loyal buyers
                to regular catering orders, it’s been all heart.
              </p>

              
              <p>
                What makes this brand truly special? I prepare everything fresh every single day.
                 KAVI FOOD PRODUCTS
                isn’t just a brand. It’s my daily dedication, from my kitchen to yours.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-white rounded-xl">
                <Users className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-brown-800 mb-2">Built on Trust</h4>
                <p className="text-brown-600 text-sm">Loved by loyal customers & trusted for catering orders</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl">
                <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-brown-800 mb-2">Genuine Ingredients</h4>
                <p className="text-brown-600 text-sm">Fresh, unadulterated food prepared with real care</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl">
                <Heart className="w-12 h-12 text-brown-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-brown-800 mb-2">Made Daily</h4>
                <p className="text-brown-600 text-sm">Every product is made fresh daily by the founder herself</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
