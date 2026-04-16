import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Contact form submitted:', formData);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">Contact Us</h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team - we're here to help with all your cleaning needs
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-white p-5 sm:p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-blue-600 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
              <a href="tel:+2348012345678" className="text-blue-600 hover:text-blue-700 font-semibold break-all">
                +234 801 234 5678
              </a>
              <p className="text-sm text-gray-500 mt-1">Available 24/7</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-5 sm:p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-blue-600 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <a href="mailto:info@safeclean.ng" className="text-blue-600 hover:text-blue-700 font-semibold break-all">
                info@safeclean.ng
              </a>
              <p className="text-sm text-gray-500 mt-1">We reply within 2 hours</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-5 sm:p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-blue-600 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600 text-sm">
                45 Airport Road<br />
                Near Ramat Park<br />
                Benin City, Edo State
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-5 sm:p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-blue-600 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Business Hours</h3>
              <p className="text-gray-600 text-sm">
                24/7 Service<br />
                Office: Mon-Fri<br />
                8:00 AM - 6:00 PM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Send Us a Message</h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">Fill out the form below and we'll get back to you as soon as possible</p>
            </div>

            {submitted && (
              <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-green-900">Message Sent Successfully!</h3>
                  <p className="text-green-700">Thank you for contacting us. We'll respond within 2 hours.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl shadow-xl p-5 sm:p-8">
              <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-5 sm:mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-5 sm:mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="industrial">Industrial Cleaning</option>
                    <option value="laundry">Laundry Service</option>
                    <option value="quote">Request a Quote</option>
                    <option value="support">Customer Support</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 sm:px-8 py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Visit Our Office</h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">Stop by for a consultation or to discuss your cleaning needs</p>
          </div>
          <div className="bg-gray-300 rounded-2xl overflow-hidden shadow-xl h-72 sm:h-96 flex items-center justify-center px-6">
            <div className="text-center text-gray-600">
              <MapPin className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4" />
              <p className="text-base sm:text-lg font-semibold">45 Airport Road, Near Ramat Park</p>
              <p className="text-base mt-2">Benin City, Edo State, Nigeria</p>
              <p className="text-sm mt-4 text-gray-500">Map integration available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
