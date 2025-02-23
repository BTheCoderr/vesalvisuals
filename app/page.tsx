import Header from './components/Header';
import ServiceCard from './components/ServiceCard';
import ContactFooter from './components/ContactFooter';

const services = [
  {
    title: 'Photoshoots',
    price: 230,
    description: '',
    images: [
      '/images/(1) vertical 1.jpg'
    ],
    serviceIncludes: ['Events, Lifestyle, Portraits, Studio, & Sports'],
  },
  {
    title: 'Visualizers',
    price: 320,
    description: '',
    images: [
      '/images/(2) vertical 1.jpeg'
    ],
    serviceIncludes: ['Reels, Recaps, Vlogs, &Short-Term Content'],
  },
  {
    title: 'Premium Photo—Visualizer—Bundle',
    price: 720,
    description: '',
    images: [
      '/images/(3) horizontal.jpg',
      '/images/(3) vertical 1.jpg',
      '/images/(3) vertical 2.jpg'
    ],
    serviceIncludes: ['Customizable Photo & Video Shoot'],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 className="text-4xl font-serif text-navy">The Vision</h1>
          <p className="text-sm text-navy/80 w-[600px] text-right">
            The Vision can be on any scale you&apos;d like it. Let&apos;s come together and envision the artist within. Schedule a complimentary consultation with Vee to ensure every detail is perfectly catered to your Session.
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

      <ContactFooter />
    </main>
  );
}
