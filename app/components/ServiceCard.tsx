'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface ServiceCardProps {
  title: string;
  price: number;
  description: string;
  images: string[];
  serviceIncludes: string[];
}

const ServiceCard = ({ title, price, description, images, serviceIncludes }: ServiceCardProps) => {
  const [imageError, setImageError] = useState<Record<number, boolean>>({});
  const [imageLoading, setImageLoading] = useState<Record<number, boolean>>({});

  const handleImageLoad = (index: number) => {
    setImageLoading(prev => ({ ...prev, [index]: false }));
  };

  const handleImageError = (index: number) => {
    setImageError(prev => ({ ...prev, [index]: true }));
    setImageLoading(prev => ({ ...prev, [index]: false }));
  };

  const isPremium = title.includes('Premium');

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      {isPremium ? (
        <div className="p-4 space-y-3">
          {/* Top image */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
            <Image
              src={images[0]}
              alt={`${title} main image`}
              fill
              className="object-cover transition-all duration-300 hover:scale-105"
              sizes="(max-width: 640px) 100vw, 66vw"
              priority
              onLoad={() => handleImageLoad(0)}
              onError={() => handleImageError(0)}
              unoptimized
            />
          </div>
          {/* Bottom two images */}
          <div className="grid grid-cols-2 gap-3">
            {images.slice(1).map((image, index) => (
              <div 
                key={index + 1}
                className="relative aspect-[4/3] rounded-lg overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`${title} image ${index + 2}`}
                  fill
                  className="object-cover transition-all duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 33vw"
                  onLoad={() => handleImageLoad(index + 1)}
                  onError={() => handleImageError(index + 1)}
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={images[0]}
            alt={`${title} main image`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority
            onLoad={() => handleImageLoad(0)}
            onError={() => handleImageError(0)}
            unoptimized
          />
        </div>
      )}

      <div className={`px-8 py-6`}>
        <h3 className="text-3xl font-serif font-bold mb-3 text-navy">{title}</h3>
        <p className="text-xl font-medium text-navy mb-4">
          Starting at ${price}
        </p>
        <p className="text-navy/70 text-lg mb-6">{description}</p>
        
        <div className="mb-8">
          <h4 className="font-medium text-lg mb-3 text-navy">Services Include:</h4>
          <ul className="space-y-2 text-navy/70">
            {serviceIncludes.map((service, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2">•</span>
                {service}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/contact"
          className="inline-block w-full text-center bg-navy text-cream px-8 py-4 rounded-lg text-lg font-medium hover:bg-navy-light transition-colors"
        >
          Book now
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
