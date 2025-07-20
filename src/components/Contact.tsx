import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">Contact Us</h2>
          <h3 className="text-2xl font-semibold text-brown-700 mb-2">Get in Touch</h3>
          
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-cream-50 rounded-xl p-8 card-shadow text-center">
            <h3 className="text-xl font-semibold text-brown-800 mb-6">Contact Information</h3>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-2">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="font-semibold text-brown-800 mb-1">Address</h4>
                <p className="text-brown-600">
                  Abirami Street, Avarampalayam Road,<br />
                  Ganapathy, Coimbatore – 641 006<br />
                  Tamil Nadu, India
                </p>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-brown-800 mb-1">Phone</h4>
                <p className="text-brown-600">
                  <a href="tel:+919025252475" className="hover:text-primary-600 transition-colors">
                    +91 9025252475
                  </a>
                </p>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center mb-2">
                  <Mail className="w-6 h-6 text-brown-600" />
                </div>
                <h4 className="font-semibold text-brown-800 mb-1">Email</h4>
                <p className="text-brown-600">
                  <a href="mailto:kavifoodproducts@gmail.com" className="hover:text-primary-600 transition-colors">
                    kavifoodproducts.in@gmail.com
                  </a>
                </p>
              </div>

              {/* Business Hours */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-cream-100 rounded-full flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6 text-cream-600" />
                </div>
                <h4 className="font-semibold text-brown-800 mb-1">Business Hours</h4>
                <p className="text-brown-600">
                  Monday - Saturday: 3:00 PM - 10:00 PM<br />
                  Sunday: 3:00 PM - 9:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Location Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-full font-medium">
              <span className="mr-2">🌾</span>
              Proudly serving fresh millet products from the heart of Coimbatore
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
