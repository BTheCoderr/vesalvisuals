'use client';

import Header from './components/Header';
import ServiceCard from './components/ServiceCard';

const services = [
  {
    title: 'Photoshoots',
    price: 230,
    description: 'Professional photography services for all your needs.',
    images: [
      '/images/photoshoot-1.jpg',
      '/images/photoshoot-2.jpg',
      '/images/photoshoot-3.jpg',
    ],
    serviceIncludes: [
      'Events',
      'Lifestyle',
      'Portraits',
      'Studio',
      'Sports',
    ],
  },
  {
    title: 'Visualizers',
    price: 320,
    description: 'High-quality visual content creation for your brand.',
    images: [
      '/images/visualizer-1.jpg',
      '/images/visualizer-2.jpg',
      '/images/visualizer-3.jpg',
    ],
    serviceIncludes: [
      'Reels',
      'Recaps',
      'Vlogs',
      'Short Term Content',
    ],
  },
  {
    title: 'Premium Photo—Visualizer—Bundle',
    price: 720,
    description: 'Complete package combining premium photography and visual content.',
    images: [
      '/images/premium-1.jpg',
      '/images/premium-2.jpg',
      '/images/premium-3.jpg',
    ],
    serviceIncludes: [
      'Customizable Photo & Video Shoot',
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              price={service.price}
              description={service.description}
              images={service.images}
              serviceIncludes={service.serviceIncludes}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
