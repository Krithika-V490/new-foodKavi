import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brown-900 text-cream-100">
      <div className="container-max section-padding py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src="/logo_final.png"
                  alt="Kavi Food Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-cream-100">
                  KAVI FOOD PRODUCTS
                </h3>
              </div>
            </div>
            <p className="text-cream-300 mb-4 leading-relaxed">
              Bringing wholesome millet goodness from our kitchen to yours. 
              Traditional recipes, modern quality standards, and a mother's love in every product.
            </p>
            <p className="text-sm font-tamil text-cream-400">
              எங்கள் சமையலறையிலிருந்து உங்கள் வீட்டிற்கு ஆரோக்கியமான சிறுதானிய உணவுகள்
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-cream-100 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-cream-300 hover:text-primary-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#daily-specials" className="text-cream-300 hover:text-primary-400 transition-colors">
                  Daily Specials
                </a>
              </li>
              <li>
                <a href="#products" className="text-cream-300 hover:text-primary-400 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-cream-300 hover:text-primary-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-cream-300 hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-cream-100 mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div className="text-cream-300 text-sm">
                  Abirami Street, Avarampalayam Road,<br />
                  Ganapathy, Coimbatore – 641 006
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+919025252475" className="text-cream-300 hover:text-primary-400 transition-colors text-sm">
                  +91 9025252475
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:kavifoodproducts@gmail.com" className="text-cream-300 hover:text-primary-400 transition-colors text-sm">
                  kavifoodproducts.in@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brown-700 mt-8 pt-8 text-center">
          <p className="text-cream-400 text-sm">
            © 2025 KAVI FOOD PRODUCTS. All rights reserved. | Made with ❤️ in Coimbatore
          </p>
          <p className="text-cream-500 text-xs mt-2 font-tamil">
            பாரம்பரிய சிறுதானிய உணவுகளின் நம்பகமான பிராண்ட்
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
