'use client';

import Header from '../components/Header';
import ContactFooter from '../components/ContactFooter';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const galleryItems = {
  photoshoots: [
    { 
      src: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e',
      title: 'Portrait Session', 
      category: 'Portrait',
      description: 'Professional studio portraits'
    },
    { 
      src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
      title: 'Studio Photography', 
      category: 'Studio',
      description: 'Creative studio sessions'
    },
    { 
      src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
      title: 'Event Coverage', 
      category: 'Event',
      description: 'Special moments captured'
    },
  ],
  visualizers: [
    { 
      src: 'https://images.unsplash.com/photo-1540655037529-dec987208707',
      title: 'Video Production', 
      category: 'Production',
      description: 'High-quality video content'
    },
    { 
      src: 'https://images.unsplash.com/photo-1533702165324-66678e2069b2',
      title: 'Behind the Scenes', 
      category: 'Production',
      description: 'Professional video production setup'
    },
    { 
      src: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0',
      title: 'Studio Setup',
      category: 'Production',
      description: 'Professional studio equipment'
    }
  ],
  premium: [
    { 
      src: 'https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e',
      title: 'Premium Package', 
      category: 'Bundle',
      description: 'Complete media package'
    },
    { 
      src: 'https://images.unsplash.com/photo-1593414220166-085caeae0382',
      title: 'Premium Studio', 
      category: 'Studio',
      description: 'High-end studio sessions'
    },
    { 
      src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
      title: 'Premium Event', 
      category: 'Event',
      description: 'Luxury event coverage'
    },
  ]
};

const GalleryPage = () => {
  const [hoveredItem, setHoveredItem] = useState<{section: string, index: number} | null>(null);

  useEffect(() => {
    // Scroll to section if hash is present
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <main className="min-h-screen bg-cream">
      <Header />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-4xl font-serif text-navy text-center mb-16 animate-fade-in">Gallery</h1>

        <div className="space-y-24">
          {Object.entries(galleryItems).map(([section, items]) => (
            <section key={section} id={section} className="scroll-mt-24">
              <h2 className="text-2xl font-serif text-navy mb-8 text-center">
                {section === 'premium' ? 'Premium Photo—Visualizer—Bundle' : section.charAt(0).toUpperCase() + section.slice(1)}
              </h2>
              
              <div className="flex flex-nowrap gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="group relative aspect-[16/9] w-[600px] flex-shrink-0 overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl bg-gray-100 snap-center"
                    onMouseEnter={() => setHoveredItem({ section, index })}
                    onMouseLeave={() => setHoveredItem(null)}
                    style={{
                      transform: hoveredItem?.section === section && hoveredItem?.index === index 
                        ? 'scale(1.02)' 
                        : 'scale(1)',
                      transition: 'transform 0.5s ease-out'
                    }}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, 600px"
                      unoptimized
                    />
                    
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                      style={{
                        transform: hoveredItem?.section === section && hoveredItem?.index === index 
                          ? 'translateY(0)' 
                          : 'translateY(20px)',
                      }}
                    >
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500">
                        <span className="text-cream/80 text-sm font-medium mb-2 block">{item.category}</span>
                        <h3 className="text-cream font-serif text-xl mb-2">{item.title}</h3>
                        <p className="text-cream/90 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <ContactFooter />
    </main>
  );
};

export default GalleryPage; 