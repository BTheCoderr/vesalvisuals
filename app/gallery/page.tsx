'use client';

import Header from '../components/Header';
import Image from 'next/image';
import { useState } from 'react';

const galleryItems = {
  photoshoots: [
    { 
      src: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc',
      title: 'Portrait Session', 
      category: 'Portrait',
      description: 'Professional studio portraits'
    },
    { 
      src: 'https://images.unsplash.com/photo-1533662635785-9050edb07d21',
      title: 'Studio Photography', 
      category: 'Studio',
      description: 'Creative studio sessions'
    },
    { 
      src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
      title: 'Event Coverage', 
      category: 'Event',
      description: 'Special moments captured'
    },
  ],
  visualizers: [
    { 
      src: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1',
      title: 'Music Video', 
      category: 'Music',
      description: 'Professional music video production'
    },
    { 
      src: 'https://images.unsplash.com/photo-1585840887185-57a8557f0163',
      title: 'Short Film', 
      category: 'Film',
      description: 'Cinematic storytelling'
    },
    { 
      src: 'https://images.unsplash.com/photo-1579965342575-16428a7c8881',
      title: 'Video Production', 
      category: 'Production',
      description: 'High-quality video content'
    },
  ],
  premium: [
    { 
      src: 'https://images.unsplash.com/photo-1576824303923-1c2437339744',
      title: 'Premium Package', 
      category: 'Bundle',
      description: 'Complete media package'
    },
    { 
      src: 'https://images.unsplash.com/photo-1617575521317-d2974f3b56d2',
      title: 'Premium Studio', 
      category: 'Studio',
      description: 'High-end studio sessions'
    },
    { 
      src: 'https://images.unsplash.com/photo-1571624436279-b272aff752b5',
      title: 'Premium Event', 
      category: 'Event',
      description: 'Luxury event coverage'
    },
  ]
};

const GalleryPage = () => {
  const [hoveredItem, setHoveredItem] = useState<{section: string, index: number} | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = (src: string) => {
    setLoadedImages(prev => new Set(prev).add(src));
  };

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
              
              <div className="flex flex-nowrap gap-8 overflow-x-auto pb-4 snap-x snap-mandatory">
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
                      src={`${item.src}?auto=format&fit=crop&w=1200&h=800&q=80`}
                      alt={item.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, 600px"
                      onLoad={() => handleImageLoad(item.src)}
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
    </main>
  );
};

export default GalleryPage; 