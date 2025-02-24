'use client';

import Header from '../components/Header';
import Image from 'next/image';
import { useState } from 'react';

// Helper function to generate placeholder image URLs
const getPlaceholderImage = (category: string) => {
  const width = 1200;
  const height = 800;
  const keywords = {
    Portrait: 'professional+portrait',
    Studio: 'studio+photography',
    Event: 'event+photography',
    Music: 'music+video+production',
    Film: 'film+production',
    Production: 'video+production',
    Bundle: 'photography+studio',
  };
  
  return `https://source.unsplash.com/${width}x${height}/?${keywords[category as keyof typeof keywords] || 'photography'}`;
};

const galleryItems = {
  photoshoots: [
    { 
      src: '/images/(1) vertical 1.jpg', 
      placeholder: getPlaceholderImage('Portrait'),
      title: 'Portrait Session', 
      category: 'Portrait' 
    },
    { 
      src: '/images/(3) vertical 1.jpg', 
      placeholder: getPlaceholderImage('Studio'),
      title: 'Studio Photography', 
      category: 'Studio' 
    },
    { 
      src: '/images/(3) vertical 2.jpg', 
      placeholder: getPlaceholderImage('Event'),
      title: 'Event Coverage', 
      category: 'Event' 
    },
  ],
  visualizers: [
    { 
      src: '/images/(2) vertical 1.jpeg', 
      placeholder: getPlaceholderImage('Music'),
      title: 'Music Video', 
      category: 'Music' 
    },
    { 
      src: '/images/(3) horizontal.jpg', 
      placeholder: getPlaceholderImage('Film'),
      title: 'Short Film', 
      category: 'Film' 
    },
    { 
      src: '/images/visualizer-1.jpg', 
      placeholder: getPlaceholderImage('Production'),
      title: 'Video Production', 
      category: 'Production' 
    },
  ],
  premium: [
    { 
      src: '/images/(3) horizontal.jpg', 
      placeholder: getPlaceholderImage('Bundle'),
      title: 'Premium Package', 
      category: 'Bundle' 
    },
    { 
      src: '/images/(3) vertical 1.jpg', 
      placeholder: getPlaceholderImage('Studio'),
      title: 'Premium Studio', 
      category: 'Studio' 
    },
    { 
      src: '/images/(3) vertical 2.jpg', 
      placeholder: getPlaceholderImage('Event'),
      title: 'Premium Event', 
      category: 'Event' 
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
                    {/* Placeholder Image */}
                    <Image
                      src={item.placeholder}
                      alt={`${item.title} placeholder`}
                      fill
                      className={`object-cover transition-opacity duration-300 ${
                        loadedImages.has(item.src) ? 'opacity-0' : 'opacity-100'
                      }`}
                      priority
                    />
                    
                    {/* Main Image */}
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className={`object-cover transition-all duration-700 group-hover:scale-110 ${
                        loadedImages.has(item.src) ? 'opacity-100' : 'opacity-0'
                      }`}
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
                        <h3 className="text-cream font-serif text-xl">{item.title}</h3>
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