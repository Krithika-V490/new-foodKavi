// ✅ Just delete this
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DailySpecials from './components/DailySpecialSevai';
import DailyBatter from './components/DailyBatter';
import ProductCollections from './components/ProductCollections';
import MilletBasket from './components/MilletBasket';
import MilletNoodles from './components/MilletNoodles';
import CookingOils from './components/CookingOils';
import Nuts from './components/Nuts';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <Hero />
      <DailySpecials />
      <DailyBatter />
      <ProductCollections />
      <MilletBasket />
      <MilletNoodles />
      <CookingOils />
      <Nuts />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;