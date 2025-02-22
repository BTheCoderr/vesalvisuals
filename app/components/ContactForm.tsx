'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    newsletter: false,
    service: 'Photoshoots' // Default service
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (submitStatus === 'loading') return;
    
    setSubmitStatus('loading');

    try {
      const subject = `New Service Inquiry: ${formData.service}`;
      const body = `
New Service Inquiry Details:
--------------------------
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Service: ${formData.service}
Newsletter: ${formData.newsletter ? 'Yes' : 'No'}

Message:
${formData.message}

--------------------------
Sent from Vesal Visuals website
      `;

      // Send to multiple email addresses
      const emailAddresses = [
        'vesalvisuals@gmail.com',
        'vesalvisuals@outlook.com'
      ].join(',');

      window.location.href = `mailto:${emailAddresses}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        newsletter: false,
        service: 'Photoshoots'
      });
      
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif text-navy mb-2">Contact Info</h1>
      <p className="text-lg italic text-navy/80 mb-6">Up to 20 Minutes of Complimentary Consultation</p>
      
      <p className="mb-6 text-navy/80">
        Leave a simple message entailing which &ldquo;Service&rdquo; you are interested in.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-navy mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              required
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-navy focus:ring-navy"
              value={formData.firstName}
              onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-navy mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              required
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-navy focus:ring-navy"
              value={formData.lastName}
              onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-navy focus:ring-navy"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-navy mb-1">
            Service
          </label>
          <select
            id="service"
            required
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-navy focus:ring-navy"
            value={formData.service}
            onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
          >
            <option value="Photoshoots">Photoshoots</option>
            <option value="Visualizers">Visualizers</option>
            <option value="Premium Photo—Visualizer—Bundle">Premium Photo—Visualizer—Bundle</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={4}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-navy focus:ring-navy"
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          />
        </div>

        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-navy focus:ring-navy"
              checked={formData.newsletter}
              onChange={(e) => setFormData(prev => ({ ...prev, newsletter: e.target.checked }))}
            />
            <span className="text-sm text-navy/80">Sign up for news and updates</span>
          </label>
        </div>

        <div>
          <button
            type="submit"
            disabled={submitStatus === 'loading'}
            className="w-full md:w-auto px-6 py-3 bg-navy text-cream rounded-md hover:bg-navy-light focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {submitStatus === 'loading' ? 'Sending...' : 'Submit'}
          </button>

          {submitStatus === 'success' && (
            <p className="mt-2 text-green-600 font-medium">Message sent successfully!</p>
          )}
          
          {submitStatus === 'error' && (
            <p className="mt-2 text-red-600 font-medium">Error sending message. Please try again.</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
