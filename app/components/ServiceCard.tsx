'use client';

import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  price: number;
  description: string;
  images: string[];
  serviceIncludes: string[];
}

const ServiceCard = ({ title, price, description, images, serviceIncludes }: ServiceCardProps) => {
  const isPremium = title.includes('Premium');

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col">
      {isPremium ? (
        <div className="p-4 space-y-3">
          {/* Top image */}
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={images[0]}
              alt={`${title} main image`}
              fill
              priority
              className="object-cover transition-all duration-300 hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          {/* Bottom two images */}
          <div className="grid grid-cols-2 gap-3">
            {images.slice(1).map((image, index) => (
              <div 
                key={index + 1}
                className="relative aspect-[3/4] rounded-lg overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`${title} image ${index + 2}`}
                  fill
                  className="object-cover transition-all duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="relative aspect-[3/4]">
          <Image
            src={images[0]}
            alt={`${title} main image`}
            fill
            priority
            className="object-cover transition-all duration-300 hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="p-3 flex flex-col flex-grow">
        <div>
          <h3 className="text-lg font-serif font-bold mb-1 text-navy">{title}</h3>
          <p className="text-sm font-medium text-navy mb-1">
            Starting at ${price}
          </p>
          <p className="text-navy/70 text-xs mb-2">{description}</p>
          
          <div className="mb-3">
            <h4 className="font-medium text-xs mb-1 text-navy">Services:</h4>
            <ul className="space-y-0.5 text-navy/70 text-xs">
              {serviceIncludes.map((service, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-1">•</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          href="/contact"
          className="block w-full text-center bg-navy text-cream px-4 py-1.5 rounded text-xs font-medium hover:bg-navy-light transition-colors mt-auto"
        >
          Book now
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
