'use client';

import Header from '../components/Header';
import ContactFooter from '../components/ContactFooter';
import Image from 'next/image';
import { useState, useEffect, Suspense, useRef } from 'react';

interface GalleryItem {
  src: string;
  title: string;
  category: string;
  description: string;
  aspect: string;
}

const galleryItems = {
  portraits: [
    { 
      src: '/images/2ND02732.JPG',
      title: 'Portrait 2ND02732', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: '/images/2ND02760.JPG',
      title: 'Portrait 2ND02760', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: '/images/2ND02777.JPG',
      title: 'Portrait 2ND02777', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: '/images/2ND02790.JPG',
      title: 'Portrait 2ND02790', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: '/images/2ND02924.JPG',
      title: 'Portrait 2ND02924', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: '/images/2ND02989.JPG',
      title: 'Portrait 2ND02989', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: '/images/2ND03148.JPG',
      title: 'Portrait 2ND03148', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: '/images/2ND03177.JPG',
      title: 'Portrait 2ND03177', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: '/images/2ND03188.JPG',
      title: 'Portrait 2ND03188', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: '/images/2ND03217.JPG',
      title: 'Portrait 2ND03217', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: '/images/2ND05173.JPG',
      title: 'Portrait 2ND05173', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: '/images/2ND05219-2.JPG',
      title: 'Portrait 2ND05219-2', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: '/images/2ND05404-2.JPG',
      title: 'Portrait 2ND05404-2', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: '/images/2ND06370.JPG',
      title: 'Portrait 2ND06370', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: '/images/2ND06568.JPG',
      title: 'Portrait 2ND06568', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: '/images/2ND06818.JPG',
      title: 'Portrait 2ND06818', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: '/images/2ND07006.JPG',
      title: 'Portrait 2ND07006', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: '/images/2ND07198.JPG',
      title: 'Portrait 2ND07198', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    }
  ],
  studio: [
    { 
      src: '/images/093A4824.JPG',
      title: 'Studio 093A4824', 
      category: 'Studio',
      description: 'Professional studio photography',
      aspect: 'portrait'
    },
    { 
      src: '/images/093A4852.JPG',
      title: 'Studio 093A4852', 
      category: 'Studio',
      description: 'Professional studio photography',
      aspect: 'portrait'
    },
    { 
      src: '/images/093A6993.JPG',
      title: 'Studio 093A6993', 
      category: 'Studio',
      description: 'Professional studio photography',
      aspect: 'portrait'
    },
    { 
      src: '/images/093A7005.JPG',
      title: 'Studio 093A7005', 
      category: 'Studio',
      description: 'Professional studio photography',
      aspect: 'portrait'
    },
    { 
      src: '/images/093A7035.JPG',
      title: 'Studio 093A7035', 
      category: 'Studio',
      description: 'Professional studio photography',
      aspect: 'portrait'
    },
    { 
      src: '/images/093A7038.JPG',
      title: 'Studio 093A7038', 
      category: 'Studio',
      description: 'Professional studio photography',
      aspect: 'portrait'
    },
    { 
      src: '/images/093A7069.JPG',
      title: 'Studio 093A7069', 
      category: 'Studio',
      description: 'Professional studio photography',
      aspect: 'portrait'
    },
    { 
      src: '/images/093A7085.JPG',
      title: 'Studio 093A7085', 
      category: 'Studio',
      description: 'Professional studio photography',
      aspect: 'portrait'
    },
    { 
      src: '/images/093A7101.JPG',
      title: 'Studio 093A7101', 
      category: 'Studio',
      description: 'Professional studio photography',
      aspect: 'portrait'
    },
    { 
      src: '/images/093A7142.JPG',
      title: 'Studio 093A7142', 
      category: 'Studio',
      description: 'Professional studio photography',
      aspect: 'portrait'
    }
  ],
  events: [
    { 
      src: '/images/20250604-DSC00682.JPG',
      title: 'Event 20250604-DSC00682', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250604-DSC00703.JPG',
      title: 'Event 20250604-DSC00703', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250604-DSC00789.JPG',
      title: 'Event 20250604-DSC00789', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250604-DSC00854.JPG',
      title: 'Event 20250604-DSC00854', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250604-DSC00877.JPG',
      title: 'Event 20250604-DSC00877', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250604-DSC00884.JPG',
      title: 'Event 20250604-DSC00884', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250604-DSC00888.JPG',
      title: 'Event 20250604-DSC00888', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250604-DSC00913.JPG',
      title: 'Event 20250604-DSC00913', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250604-DSC00927.JPG',
      title: 'Event 20250604-DSC00927', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250604-DSC00945.JPG',
      title: 'Event 20250604-DSC00945', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250604-DSC00965.JPG',
      title: 'Event 20250604-DSC00965', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250604-DSC00975.JPG',
      title: 'Event 20250604-DSC00975', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250720-A7_00169.JPG',
      title: 'Event 20250720-A7_00169', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250720-A7_00245.JPG',
      title: 'Event 20250720-A7_00245', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250720-A7_00351.JPG',
      title: 'Event 20250720-A7_00351', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250720-A7_00388.JPG',
      title: 'Event 20250720-A7_00388', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250720-A7_00475.JPG',
      title: 'Event 20250720-A7_00475', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250720-A7_00537.JPG',
      title: 'Event 20250720-A7_00537', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250720-A7_00931.JPG',
      title: 'Event 20250720-A7_00931', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250720-A7_01070.JPG',
      title: 'Event 20250720-A7_01070', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    }
  ],
  lifestyle: [
    { 
      src: '/images/20250727-A7_00041.JPG',
      title: 'Lifestyle 20250727-A7_00041', 
      category: 'Lifestyle',
      description: 'Professional lifestyle photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250727-A7_00146.JPG',
      title: 'Lifestyle 20250727-A7_00146', 
      category: 'Lifestyle',
      description: 'Professional lifestyle photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250727-A7_00185.JPG',
      title: 'Lifestyle 20250727-A7_00185', 
      category: 'Lifestyle',
      description: 'Professional lifestyle photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250727-A7_00268.JPG',
      title: 'Lifestyle 20250727-A7_00268', 
      category: 'Lifestyle',
      description: 'Professional lifestyle photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250727-A7_00285.JPG',
      title: 'Lifestyle 20250727-A7_00285', 
      category: 'Lifestyle',
      description: 'Professional lifestyle photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250727-A7_00291.JPG',
      title: 'Lifestyle 20250727-A7_00291', 
      category: 'Lifestyle',
      description: 'Professional lifestyle photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250727-A7_00387.JPG',
      title: 'Lifestyle 20250727-A7_00387', 
      category: 'Lifestyle',
      description: 'Professional lifestyle photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250727-A7_00410.JPG',
      title: 'Lifestyle 20250727-A7_00410', 
      category: 'Lifestyle',
      description: 'Professional lifestyle photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250727-A7_00474.JPG',
      title: 'Lifestyle 20250727-A7_00474', 
      category: 'Lifestyle',
      description: 'Professional lifestyle photography',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250727-A7_00481.JPG',
      title: 'Lifestyle 20250727-A7_00481', 
      category: 'Lifestyle',
      description: 'Professional lifestyle photography',
      aspect: 'landscape'
    }
  ],
  collections: [
    { 
      src: '/images/20250807-DSC00041.jpg',
      title: 'Collection 20250807-DSC00041', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250807-DSC00052.jpg',
      title: 'Collection 20250807-DSC00052', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250807-DSC00070.jpg',
      title: 'Collection 20250807-DSC00070', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250807-DSC00072.jpg',
      title: 'Collection 20250807-DSC00072', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250807-DSC00076.jpg',
      title: 'Collection 20250807-DSC00076', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250807-DSC00078.jpg',
      title: 'Collection 20250807-DSC00078', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250807-DSC00082.jpg',
      title: 'Collection 20250807-DSC00082', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250807-DSC00096.jpg',
      title: 'Collection 20250807-DSC00096', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250807-DSC00101.jpg',
      title: 'Collection 20250807-DSC00101', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250807-DSC00112.jpg',
      title: 'Collection 20250807-DSC00112', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250807-DSC00121.jpg',
      title: 'Collection 20250807-DSC00121', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250807-DSC00125.jpg',
      title: 'Collection 20250807-DSC00125', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250807-DSC00153.jpg',
      title: 'Collection 20250807-DSC00153', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250807-DSC00156.jpg',
      title: 'Collection 20250807-DSC00156', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250816-DSC01586.JPG',
      title: 'Collection 20250816-DSC01586', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250816-DSC01634.JPG',
      title: 'Collection 20250816-DSC01634', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250816-DSC01656.JPG',
      title: 'Collection 20250816-DSC01656', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250816-DSC01657.JPG',
      title: 'Collection 20250816-DSC01657', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250816-DSC01696.JPG',
      title: 'Collection 20250816-DSC01696', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250816-DSC01710.JPG',
      title: 'Collection 20250816-DSC01710', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250816-DSC01726.JPG',
      title: 'Collection 20250816-DSC01726', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/20250816-DSC01795.JPG',
      title: 'Collection 20250816-DSC01795', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/14.JPG',
      title: 'Collection 14', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/15.JPG',
      title: 'Collection 15', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/24.JPG',
      title: 'Collection 24', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/ALD_2687.JPG',
      title: 'Collection ALD_2687', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/ALD_2727.JPG',
      title: 'Collection ALD_2727', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/ALD_2728.JPG',
      title: 'Collection ALD_2728', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/DSC00041.JPG',
      title: 'Collection DSC00041', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/DSC00289.JPG',
      title: 'Collection DSC00289', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/DSC00290.JPG',
      title: 'Collection DSC00290', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    }
  ]
};



const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize intersection observer for lazy loading
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleImages(prev => new Set([...prev, index]));
          }
        });
      },
      {
        rootMargin: '100px', // Start loading 100px before image comes into view
        threshold: 0.1
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Observe images when they're added to DOM
  useEffect(() => {
    imageRefs.current.forEach((ref) => {
      if (ref && observerRef.current) {
        observerRef.current.observe(ref);
      }
    });
  }, [visibleImages]);

  const getFilteredItems = (): GalleryItem[] => {
    return Object.values(galleryItems).flat();
  };

  // Optimized image loading with priority for first few images
  const shouldPrioritize = (index: number) => index < 12; // First 12 images load immediately

  return (
    <main className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-navy py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto">
            Capturing life&apos;s most precious moments with professional photography and videography services
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
            {getFilteredItems().map((item: GalleryItem, index: number) => (
              <div
                key={index}
                ref={(el) => {
                  imageRefs.current[index] = el;
                }}
                data-index={index}
                className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                  item.aspect === 'portrait' ? 'aspect-[3/4]' : 
                  item.aspect === 'landscape' ? 'aspect-[4/3]' : 
                  'aspect-square'
                }`}
                onClick={() => setSelectedImage(item)}
              >
                {/* Placeholder while loading */}
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                
                {/* Actual image with lazy loading */}
                {visibleImages.has(index) && (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    priority={shouldPrioritize(index)}
                    loading={shouldPrioritize(index) ? 'eager' : 'lazy'}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    onLoad={() => {
                      // Remove placeholder when image loads
                      const element = imageRefs.current[index];
                      if (element) {
                        const placeholder = element.querySelector('.bg-gray-200');
                        if (placeholder) {
                          placeholder.classList.add('opacity-0');
                          setTimeout(() => placeholder.remove(), 300);
                        }
                      }
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 text-white p-2 rounded-full hover:bg-white/30 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-white/90">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      <Suspense fallback={<div className="bg-navy py-16"><div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-cream">Loading contact form...</div></div>}>
        <ContactFooter />
      </Suspense>
    </main>
  );
};

export default GalleryPage; 