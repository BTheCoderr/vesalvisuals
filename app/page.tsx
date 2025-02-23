import Header from './components/Header';
import ServiceCard from './components/ServiceCard';

const services = [
  {
    title: 'Photoshoots',
    price: 230,
    description: 'Capture your moments.',
    images: [
      '/images/(1) vertical 1.jpg'
    ],
    serviceIncludes: [
      'Events',
      'Lifestyle',
      'Portraits',
    ],
  },
  {
    title: 'Visualizers',
    price: 320,
    description: 'Bring your vision to life.',
    images: [
      '/images/(2) vertical 1.jpeg'
    ],
    serviceIncludes: [
      'Reels',
      'Recaps',
      'Vlogs',
    ],
  },
  {
    title: 'Premium Bundle',
    price: 720,
    description: 'The complete package.',
    images: [
      '/images/(3) horizontal.jpg',
      '/images/(3) vertical 1.jpg',
      '/images/(3) vertical 2.jpg'
    ],
    serviceIncludes: [
      'Custom Photo & Video',
      'Premium Editing',
      'Full Rights',
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif text-navy">The Vision</h1>
          <p className="text-sm text-navy/80 max-w-xl text-right">
            The Vision can be on any scale you&apos;d like it. Let&apos;s come together and envision the artist within. Schedule a complementary consultation with Vee to ensure every detail is perfectly catered to your Session.
          </p>
        </div>

        <div id="services" className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${
                index === 1 ? 'md:mt-12 lg:mt-16' : 
                index === 2 ? 'md:-mt-12 lg:mt-0' : ''
              }`}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
