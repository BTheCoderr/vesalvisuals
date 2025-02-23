import Header from './components/Header';
import ServiceCard from './components/ServiceCard';

const services = [
  {
    title: 'Photoshoots',
    price: 230,
    description: 'Professional photography services for all your needs.',
    images: [
      'https://images.unsplash.com/photo-1542038784456-1ea8e935640e'
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
      'https://images.unsplash.com/photo-1601506521793-dc748fc80b67'
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
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
      'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd',
      'https://images.unsplash.com/photo-1603574670812-d24560880210'
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
        <div className="text-center mb-12 sm:mb-20">
          <h1 className="text-4xl sm:text-6xl font-serif text-navy mb-4 sm:mb-6">The Vision</h1>
          <p className="text-lg sm:text-xl text-navy/80 max-w-3xl mx-auto leading-relaxed">
            The Vision can be on any scale you&apos;d like it. Let&apos;s come together and envision the artist within. Schedule a complementary consultation with Vee to ensure every detail is perfectly catered to your Session.
          </p>
        </div>

        <div id="services" className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
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
