'use client';

import { useState } from 'react';

const ContactFooter = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    newsletter: false
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    setErrorMessage('');

    try {
      // Use development endpoint in development, Netlify function in production
      const endpoint = process.env.NODE_ENV === 'development' 
        ? '/api/contact' 
        : '/.netlify/functions/contact';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        newsletter: false
      });
      
      setStatus('success');
      
      // Reset success status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    }
  };

  return (
    <div className="bg-navy py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="text-cream">
            <h2 className="text-4xl font-serif mb-4">Contact Info</h2>
            <p className="text-sm italic mb-6">Up to 20 Minutes of Complimentary Consultation.</p>
            <p className="text-sm">
              Leave a simple message entailing which &quot;Service&quot; you are interested in.
              <br />
              Photoshoots, Visualizer, Or Premium Photo—Visualizer
            </p>
          </div>

          {/* Right Column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-cream/60 mb-1">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-navy-dark border border-cream/20 rounded px-3 py-2 text-cream"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-xs text-cream/60 mb-1">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-navy-dark border border-cream/20 rounded px-3 py-2 text-cream"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-cream/60 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full bg-navy-dark border border-cream/20 rounded px-3 py-2 text-cream"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>

              <div>
                <label className="block text-xs text-cream/60 mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-navy-dark border border-cream/20 rounded px-3 py-2 text-cream resize-none"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="newsletter-footer"
                  className="rounded border-cream/20 bg-navy-dark text-cream"
                  checked={formData.newsletter}
                  onChange={(e) => setFormData(prev => ({ ...prev, newsletter: e.target.checked }))}
                />
                <label htmlFor="newsletter-footer" className="text-xs text-cream/60">
                  Sign up for news and updates
                </label>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full ${
                  status === 'loading' 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-cream hover:bg-cream/90'
                } text-navy px-4 py-2 rounded transition-colors`}
              >
                {status === 'loading' ? 'Sending...' : 'Submit'}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-sm text-center animate-fade-in">
                  Message sent successfully!
                </p>
              )}
              
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center animate-fade-in">
                  {errorMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter; 