'use client';

import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  price: number;
  images: string[];
  serviceIncludes: string[];
}

const ServiceCard = ({ title, price, images, serviceIncludes }: ServiceCardProps) => {
  const isPremium = title.includes('Premium');
  
  // Determine gallery section based on title
  const gallerySection = title.toLowerCase().includes('premium') ? 'premium' : 
                        title.toLowerCase().includes('visualizer') ? 'visualizers' : 
                        'photoshoots';

  return (
    <div className="flex flex-col">
      {/* Images Section */}
      {isPremium ? (
        <div className="mb-6">
          <Link href={`/gallery#${gallerySection}`} className="block">
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
          </Link>
        </div>
      ) : (
        <Link href={`/gallery#${gallerySection}`} className="block">
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
        </Link>
      )}

      {/* Text Content */}
      <div className="space-y-2 text-center">
        <Link href={`/gallery#${gallerySection}`} className="inline-block">
          <h3 className="text-2xl font-serif hover:text-navy-light transition-colors">{title}</h3>
        </Link>
        <p className="text-sm">Starting at ${price}</p>
        <div className="text-sm max-w-prose mx-auto">
          <span className="font-medium">Services include:</span>
          <br />
          {serviceIncludes.join(', ')}
        </div>
        <Link
          href={`/contact?service=${encodeURIComponent(title)}`}
          className="inline-block w-full text-center bg-navy text-cream py-2 px-4 rounded mt-4 hover:bg-navy-light transition-colors"
        >
          Book now
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
