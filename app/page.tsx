import Header from './components/Header';
import ServiceCard from './components/ServiceCard';
import ContactFooter from './components/ContactFooter';
import Image from 'next/image';

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
        {/* Logo Section */}
        <div className="flex justify-center mb-16">
          <Image 
            src="/images/VESAL VISUALS LOGO (Black).png" 
            alt="Vesal Visuals" 
            width={200} 
            height={200}
            className="object-contain"
          />
        </div>

        {/* Vision Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-16">
          <h1 className="text-4xl font-serif text-navy">The Vision</h1>
          <div className="md:w-[600px] flex flex-col gap-2">
            <p className="text-sm text-navy/80 text-right">
              Your story deserves to be captured at any scale.
            </p>
            <p className="text-sm text-navy/80 text-right">
              Let&apos;s collaborate and bring your creative ideas to life.
            </p>
            <p className="text-sm text-navy/80 text-right">
              Schedule a complimentary consultation with Vee to ensure
            </p>
            <p className="text-sm text-navy/80 text-right">
              every detail is perfectly catered to your session.
            </p>
          </div>
        </div>

        {/* Services Section */}
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
