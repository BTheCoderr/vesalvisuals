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
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-lg font-semibold text-blue-900 mb-4">
          Starting at ${price}
        </p>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Services Include:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {serviceIncludes.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>

        <Link
          href="/contact"
          className="inline-block w-full text-center bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors"
        >
          Book now
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
