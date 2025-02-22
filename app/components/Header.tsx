import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-cream/90 backdrop-blur-sm z-50 border-b border-navy/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/logo.svg" alt="Vesal Visuals" width={32} height={32} />
              <span className="ml-3 text-xl font-serif text-navy">VESAL VISUALS</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link href="/services" className="text-navy hover:text-navy-light transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-navy hover:text-navy-light transition-colors">
              Contact
            </Link>
            
            <div className="flex items-center space-x-4">
              <a 
                href="mailto:vesalvisuals@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:text-navy-light transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
                </svg>
              </a>
              
              <a 
                href="https://instagram.com/vesalvisuals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:text-navy-light transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2Z" />
                </svg>
              </a>
              
              <a 
                href="https://youtube.com/@Vesal.Visuals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:text-navy-light transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              
              <Link
                href="/contact"
                className="bg-navy text-cream px-4 py-2 rounded-md hover:bg-navy-light transition-colors"
              >
                Book now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
