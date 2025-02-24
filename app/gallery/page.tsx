'use client';

import Header from '../components/Header';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const galleryItems = {
  photoshoots: [
    { src: '/images/(1) vertical 1.jpg', title: 'Portrait Session', category: 'Portrait' },
    { src: '/images/(3) vertical 1.jpg', title: 'Studio Photography', category: 'Studio' },
    { src: '/images/(3) vertical 2.jpg', title: 'Event Coverage', category: 'Event' },
    { src: '/images/photoshoot-1.jpg', title: 'Professional Headshots', category: 'Portrait' },
    { src: '/images/photoshoot-2.jpg', title: 'Event Photography', category: 'Event' },
    { src: '/images/photoshoot-3.jpg', title: 'Studio Session', category: 'Studio' },
  ],
  visualizers: [
    { src: '/images/(2) vertical 1.jpeg', title: 'Music Video', category: 'Music' },
    { src: '/images/(3) horizontal.jpg', title: 'Short Film', category: 'Film' },
    { src: '/images/visualizer-1.jpg', title: 'Video Production', category: 'Production' },
    { src: '/images/visualizer-2.jpg', title: 'Film Making', category: 'Film' },
    { src: '/images/visualizer-3.jpg', title: 'Camera Work', category: 'Production' },
  ],
  premium: [
    { src: '/images/(3) horizontal.jpg', title: 'Premium Package', category: 'Bundle' },
    { src: '/images/(3) vertical 1.jpg', title: 'Premium Studio', category: 'Studio' },
    { src: '/images/(3) vertical 2.jpg', title: 'Premium Event', category: 'Event' },
    { src: '/images/premium-1.jpg', title: 'Professional Studio', category: 'Studio' },
    { src: '/images/premium-2.jpg', title: 'Cinematography', category: 'Film' },
    { src: '/images/premium-3.jpg', title: 'Premium Photography', category: 'Portrait' },
  ]
};

const GalleryPage = () => {
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState('photoshoots');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
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
        <h1 className="text-4xl font-serif text-navy text-center mb-12 animate-fade-in">Gallery</h1>

        {/* Gallery Navigation */}
        <div className="flex justify-center gap-8 mb-12">
          {Object.keys(galleryItems).map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`text-lg font-serif transition-all duration-300 transform hover:-translate-y-0.5 ${
                activeSection === section
                  ? 'text-navy border-b-2 border-navy scale-105'
                  : 'text-navy/60 hover:text-navy'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {galleryItems[activeSection as keyof typeof galleryItems].map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: hoveredIndex === index ? 'scale(1.02)' : 'scale(1)',
                transition: 'transform 0.5s ease-out'
              }}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500">
                  <span className="text-cream/80 text-sm font-medium mb-2 block">{item.category}</span>
                  <h3 className="text-cream font-serif text-xl">{item.title}</h3>
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