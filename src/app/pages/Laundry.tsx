import { useState } from 'react';
import { Calendar, Clock, MapPin, Shirt, Package, CheckCircle, Phone } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Laundry() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    pickupDate: '',
    pickupTime: '',
    serviceType: 'wash-fold',
    specialInstructions: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to a backend
    console.log('Booking submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Thank you, {formData.name}! Your laundry pickup has been scheduled for {formData.pickupDate} at {formData.pickupTime}.
          </p>
          <p className="text-gray-600 mb-8">
            You'll receive a confirmation email at {formData.email} with all the details. Our driver will arrive at your location shortly before the scheduled time.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
          >
            Book Another Pickup
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 via-purple-700/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/25 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1765015981399-8d024b928fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXVuZHJ5JTIwc2VydmljZSUyMGZvbGRlZCUyMGNsb3RoZXN8ZW58MXx8fHwxNzc1NjgxNzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Laundry service"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 inline-block">
            <span className="bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-semibold border border-white/20">
              Convenient Home Laundry Service
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
            Laundry Pickup & Delivery
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-lg font-medium mb-8">
            Never leave home for laundry again — we pick up, wash, and deliver!
          </p>
          <a
            href="#booking"
            className="inline-block bg-white text-purple-900 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Schedule Pickup Now
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple, convenient, and hassle-free</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Schedule</h3>
              <p className="text-gray-600">
                Book a pickup time that works for you using our simple form below.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. We Pickup</h3>
              <p className="text-gray-600">
                Our driver collects your laundry bag right from your doorstep.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shirt className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. We Clean</h3>
              <p className="text-gray-600">
                Your clothes are professionally washed, dried, and folded with care.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">4. We Deliver</h3>
              <p className="text-gray-600">
                Clean laundry delivered back to you fresh and ready to wear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Options</h2>
            <p className="text-xl text-gray-600">Choose the service that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wash & Fold</h3>
              <p className="text-3xl font-bold text-purple-600 mb-4">$1.50/lb</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Professional washing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Machine dried</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Neatly folded</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Eco-friendly detergent</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600">Min. 10 lbs</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-purple-600 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dry Cleaning</h3>
              <p className="text-3xl font-bold text-purple-600 mb-4">$8+/item</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Professional dry cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Expert pressing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Delicate fabric care</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Stain treatment included</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600">Price varies by garment</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Same-Day Service</h3>
              <p className="text-3xl font-bold text-purple-600 mb-4">+50%</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Pickup & delivery same day</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Priority processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Perfect for emergencies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Available 7 days a week</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600">Order before 10 AM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white" id="booking">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your Pickup</h2>
            <p className="text-xl text-gray-600">Fill out the form below to schedule your laundry service</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>

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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="(123) 456-7890"
                />
              </div>
            </div>

            <div className="mb-6">
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                <MapPin className="w-4 h-4 inline mr-1" />
                Pickup Address *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="123 Main St, Apt 4B, City, ST 12345"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="pickupDate" className="block text-sm font-semibold text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Pickup Date *
                </label>
                <input
                  type="date"
                  id="pickupDate"
                  name="pickupDate"
                  required
                  value={formData.pickupDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="pickupTime" className="block text-sm font-semibold text-gray-700 mb-2">
                  <Clock className="w-4 h-4 inline mr-1" />
                  Pickup Time *
                </label>
                <select
                  id="pickupTime"
                  name="pickupTime"
                  required
                  value={formData.pickupTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="">Select a time</option>
                  <option value="08:00 AM">8:00 AM - 10:00 AM</option>
                  <option value="10:00 AM">10:00 AM - 12:00 PM</option>
                  <option value="12:00 PM">12:00 PM - 2:00 PM</option>
                  <option value="02:00 PM">2:00 PM - 4:00 PM</option>
                  <option value="04:00 PM">4:00 PM - 6:00 PM</option>
                  <option value="06:00 PM">6:00 PM - 8:00 PM</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2">
                <Shirt className="w-4 h-4 inline mr-1" />
                Service Type *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                required
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              >
                <option value="wash-fold">Wash & Fold</option>
                <option value="dry-cleaning">Dry Cleaning</option>
                <option value="wash-fold-same-day">Wash & Fold (Same-Day)</option>
                <option value="dry-cleaning-same-day">Dry Cleaning (Same-Day)</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="specialInstructions" className="block text-sm font-semibold text-gray-700 mb-2">
                Special Instructions (Optional)
              </label>
              <textarea
                id="specialInstructions"
                name="specialInstructions"
                value={formData.specialInstructions}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Any specific instructions for washing, folding, or delivery? (e.g., 'Separate whites and colors', 'No fabric softener', 'Leave at front door')"
              />
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Pickup and delivery are completely free! You only pay for the service itself. We'll send you a text 30 minutes before arrival.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Schedule Pickup
            </button>
          </form>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Satisfaction</h3>
              <p className="text-gray-600">
                Not happy? We'll re-clean your items for free or provide a full refund.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shirt className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Care</h3>
              <p className="text-gray-600">
                Trained professionals handle your clothes with the utmost care and attention.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">
                Standard 24-48 hour turnaround, or same-day service when you need it fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Questions? We're Here to Help</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our customer service team is available 7 days a week to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center gap-2 bg-white text-purple-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}