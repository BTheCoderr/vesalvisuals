import Header from './components/Header';
import ServiceCard from './components/ServiceCard';

const services = [
  {
    title: 'Photoshoots',
    price: 230,
    description: 'Professional photography services for all your needs.',
    images: [
      '/images/(1) vertical 1.jpg'
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
      '/images/(2) vertical 1.jpeg'
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
      '/images/(3) horizontal.jpg',
      '/images/(3) vertical 1.jpg',
      '/images/(3) vertical 2.jpg'
    ],
    serviceIncludes: [
      'Customizable Photo & Video Shoot',
      'Combined Photography and Visual Content',
      'Premium Editing and Post-Production',
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-serif text-navy mb-3 sm:mb-4">The Vision</h1>
          <p className="text-base sm:text-lg text-navy/80 max-w-2xl mx-auto leading-relaxed">
            Your story deserves to be captured at any scale. Let&apos;s collaborate and bring your creative ideas to life. Schedule a complimentary consultation with Vee to ensure every detail is perfectly catered to your session.
          </p>
        </div>

        <div id="services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
