'use client';

import Header from '../components/Header';
import Image from 'next/image';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const GalleryPage = () => {
  const searchParams = useSearchParams();
  const section = searchParams.get('section');

  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [section]);

  return (
    <main className="min-h-screen bg-cream">
      <Header />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-4xl font-serif text-navy text-center mb-12">Gallery</h1>

        {/* Photoshoots Section */}
        <section id="photoshoots" className="mb-16">
          <h2 className="text-3xl font-serif text-navy mb-8 text-center">Photoshoots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add your photoshoot images here */}
          </div>
        </section>

        {/* Visualizers Section */}
        <section id="visualizers" className="mb-16">
          <h2 className="text-3xl font-serif text-navy mb-8 text-center">Visualizers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add your visualizer content here */}
          </div>
        </section>

        {/* Premium Section */}
        <section id="premium" className="mb-16">
          <h2 className="text-3xl font-serif text-navy mb-8 text-center">Premium Photo—Visualizer—Bundle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add your premium content here */}
          </div>
        </section>
      </div>
    </main>
  );
};

export default GalleryPage; 