// src/app/components/LandingPage.tsx
import React, { useState, useEffect } from 'react';
import HeroSlider from '../HeroSlider/HeroSlider';
import Header from '../Header/Header';

const LandingPage: React.FC = () => {

  return (
    <div>
      
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSlider />

      {/* Features Section */}
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">Luxurious Rooms</h3>
            <p>Experience comfort and luxury in our well-appointed rooms.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">Delicious Dining</h3>
            <p>Enjoy a variety of cuisines from our in-house restaurants.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">Spa & Wellness</h3>
            <p>Relax and rejuvenate with our spa and wellness services.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Hotel Booking. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
