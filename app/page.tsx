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
    <main className="min-h-screen bg-cream">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-navy mb-4">The Vision</h1>
          <p className="text-lg text-navy/80 max-w-2xl mx-auto">
            The Vision can be on any scale you&apos;d like it. Let&apos;s come together and envision the artist within. Schedule a complementary consultation with Vee to ensure every detail is perfectly catered to your Session.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
