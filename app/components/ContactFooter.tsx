import Link from 'next/link';

const ContactFooter = () => {
  return (
    <div className="bg-navy py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="text-cream">
            <h2 className="text-4xl font-serif mb-4">Contact Info</h2>
            <p className="text-sm italic mb-6">Up to 20 Minutes of Complimentary Consultation.</p>
            <p className="text-sm">
              Leave a simple message entailing which "Service" you are interested in.
              <br />
              Photoshoots, Visualizer, Or Premium Photo—Visualizer
            </p>
          </div>

          {/* Right Column - Form */}
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-cream/60 mb-1">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-navy-dark border border-cream/20 rounded px-3 py-2 text-cream"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs text-cream/60 mb-1">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-navy-dark border border-cream/20 rounded px-3 py-2 text-cream"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-cream/60 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full bg-navy-dark border border-cream/20 rounded px-3 py-2 text-cream"
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-cream/60 mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-navy-dark border border-cream/20 rounded px-3 py-2 text-cream resize-none"
                  required
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="rounded border-cream/20 bg-navy-dark text-cream"
                />
                <label htmlFor="newsletter" className="text-xs text-cream/60">
                  Sign up for news and updates
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-cream text-navy px-4 py-2 rounded hover:bg-cream/90 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter; 