import Header from './components/Header';
import ServiceCard from './components/ServiceCard';

const services = [
  {
    title: 'Photoshoots',
    price: 230,
    description: 'Professional photography services for all your needs.',
    images: [
      '/images/photoshoot-1.jpg'
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
      '/images/visualizer-1.jpg'
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
      '/images/premium-3.jpg'
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
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-serif text-navy mb-6">The Vision</h1>
          <p className="text-xl text-navy/80 max-w-3xl mx-auto leading-relaxed">
            Choose from our carefully crafted service packages. Each package is designed to bring your vision to life with professional quality and attention to detail. Schedule a complimentary consultation with Vee to ensure every detail is perfectly catered to your Session.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
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
