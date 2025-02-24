'use client';

import Header from '../components/Header';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const galleryItems = {
  photoshoots: [
    { src: '/images/(1) vertical 1.jpg', title: 'Portrait Session' },
    { src: '/images/(3) vertical 1.jpg', title: 'Studio Photography' },
    { src: '/images/(3) vertical 2.jpg', title: 'Event Coverage' },
    // Add more photoshoot images here
  ],
  visualizers: [
    { src: '/images/(2) vertical 1.jpeg', title: 'Music Video' },
    { src: '/images/(3) horizontal.jpg', title: 'Short Film' },
    // Add more visualizer content here
  ],
  premium: [
    { src: '/images/(3) horizontal.jpg', title: 'Premium Package' },
    { src: '/images/(3) vertical 1.jpg', title: 'Premium Studio' },
    { src: '/images/(3) vertical 2.jpg', title: 'Premium Event' },
    // Add more premium content here
  ]
};

const GalleryPage = () => {
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState('photoshoots');
  
  useEffect(() => {
    const section = searchParams.get('section');
    if (section && section in galleryItems) {
      setActiveSection(section);
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [searchParams]);

  return (
    <main className="min-h-screen bg-cream">
      <Header />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-4xl font-serif text-navy text-center mb-12">Gallery</h1>

        {/* Gallery Navigation */}
        <div className="flex justify-center gap-8 mb-12">
          {Object.keys(galleryItems).map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`text-lg font-serif transition-colors ${
                activeSection === section
                  ? 'text-navy border-b-2 border-navy'
                  : 'text-navy/60 hover:text-navy'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems[activeSection as keyof typeof galleryItems].map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-cream font-serif text-lg">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default GalleryPage; 