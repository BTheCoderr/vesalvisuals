import Link from 'next/link';

const ContactFooter = () => {
  return (
    <div className="bg-cream border-t border-navy/10 py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-serif text-navy mb-2">Contact Info</h2>
          <p className="text-sm italic text-navy/80 mb-6">Up to 20 Minutes of Complimentary Consultation</p>
          
          <p className="text-sm text-navy/80 mb-8">
            Leave a simple message entailing which "Service" you are interested in.
            <br />
            Photoshoots, Visualizer, Or Premium Photo—Visualizer.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-navy text-cream px-8 py-3 rounded-md hover:bg-navy-light transition-colors text-sm"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter; 