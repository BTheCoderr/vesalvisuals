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
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={image}
              alt={`${title} example ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold mb-2 text-navy">{title}</h3>
        <p className="text-lg font-semibold text-navy mb-4">
          Starting at ${price}
        </p>
        <p className="text-navy/70 mb-4">{description}</p>
        
        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-navy">Services Include:</h4>
          <ul className="list-disc list-inside text-navy/70">
            {serviceIncludes.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>

        <Link
          href="/contact"
          className="inline-block w-full text-center bg-navy text-cream px-6 py-3 rounded-md hover:bg-navy-light transition-colors"
        >
          Book now
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
