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
    <div className="flex flex-col">
      {/* Images Section */}
      {isPremium ? (
        <div className="mb-6">
          <div className="relative aspect-video mb-4">
            <Image
              src={images[0]}
              alt={`${title} main image`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {images.slice(1).map((image, index) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={image}
                  alt={`${title} image ${index + 2}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="relative aspect-[3/4] mb-6">
          <Image
            src={images[0]}
            alt={`${title} main image`}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}

      {/* Text Content */}
      <div className="space-y-2">
        <h3 className="text-2xl font-serif">{title}</h3>
        <p className="text-sm">Starting at ${price}</p>
        <div className="text-sm">
          <span className="font-medium">Services include:</span> {serviceIncludes.join(', ')}
        </div>
        <Link
          href="/contact"
          className="inline-block w-full text-center bg-navy text-cream py-2 px-4 rounded mt-4 hover:bg-navy-light transition-colors"
        >
          Book now
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
