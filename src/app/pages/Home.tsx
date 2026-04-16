import { Link } from 'react-router';
import { Building2, Shirt, CheckCircle, Clock, Shield, Users, MapPin, Phone, Star, ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[620px] sm:h-[750px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/75 via-blue-800/60 to-blue-900/40 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1579141132886-e86d831034ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjbGVhbmluZyUyMHNlcnZpY2UlMjB0ZWFtJTIwd29ya3xlbnwxfHx8fDE3NzU2ODE3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Professional cleaning services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-0 text-center">
          <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 max-w-full">
            <span className="bg-white/20 backdrop-blur-md text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold border border-white/30 shadow-lg max-w-full">
              <MapPin className="w-4 h-4 inline mr-2" />
              Proudly Serving Benin City, Nigeria
            </span>
          </div>
          <h1 className="text-[2.75rem] leading-[0.95] sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-5 sm:mb-6 drop-shadow-2xl">
            Your Trusted Cleaning<br />
            <span className="text-blue-200">Partner in Benin City</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 max-w-[19rem] sm:max-w-3xl mx-auto drop-shadow-lg font-medium leading-relaxed">
            From industrial facilities to your home laundry — we deliver excellence in every clean. Professional, reliable, and affordable cleaning solutions for all of Benin City.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
            <Link
              to="/laundry"
              className="w-full sm:w-auto justify-center bg-white text-blue-900 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-blue-50 transition-all shadow-2xl hover:shadow-blue-500/50 hover:scale-105 flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Book Laundry Pickup
            </Link>
            <Link
              to="/industrial"
              className="w-full sm:w-auto justify-center bg-transparent text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/10 transition-all border-2 border-white shadow-2xl hover:scale-105 flex items-center gap-2"
            >
              <Building2 className="w-5 h-5" />
              Industrial Services
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold">5.0 Rating</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-white/30" />
            <span className="font-semibold">2000+ Happy Clients</span>
            <div className="hidden sm:block h-4 w-px bg-white/30" />
            <span className="font-semibold">24/7 Service</span>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-8 border-b-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">14+</div>
              <div className="text-sm md:text-base text-blue-200">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">2000+</div>
              <div className="text-sm md:text-base text-blue-200">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">50+</div>
              <div className="text-sm md:text-base text-blue-200">Staff Members</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">24/7</div>
              <div className="text-sm md:text-base text-blue-200">Available Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Banner */}
      <section className="bg-blue-50 py-6 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-bold text-gray-900">Serving All of Benin City</p>
                <p className="text-sm text-gray-600">GRA, Ugbowo, Airport Road, Sapele Road & All Environs</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-bold text-gray-900">Call Us Now</p>
                <a href="tel:+2348012345678" className="text-sm text-blue-600 hover:text-blue-700 font-semibold">
                  +234 801 234 5678
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 mt-2">
              Complete Cleaning Solutions for Benin City
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you need industrial cleaning for your business or laundry service for your home, we've got you covered with professional, reliable service.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Industrial Cleaning Card */}
            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent z-10" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1739100631117-de8f69744864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMGNsZWFuaW5nJTIwd29ya2Vyc3xlbnwxfHx8fDE3NzU2ODE3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Industrial cleaning"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-6 z-20">
                  <div className="bg-blue-600 px-4 py-2 rounded-full text-white text-sm font-semibold">
                    For Businesses
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 p-3 rounded-xl shadow-lg">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Industrial & Commercial Cleaning</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Keep your factory, warehouse, or commercial facility spotless and compliant with our professional industrial cleaning services. We serve manufacturing plants, warehouses, and businesses across Benin City.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">Factory & Warehouse Deep Cleaning</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">Equipment & Machinery Maintenance</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">24/7 Emergency Response Available</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">Safety & Compliance Standards</span>
                  </li>
                </ul>
                <Link
                  to="/industrial"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Explore Industrial Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Laundry Service Card */}
            <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100">
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent z-10" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1765015981399-8d024b928fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXVuZHJ5JTIwc2VydmljZSUyMGZvbGRlZCUyMGNsb3RoZXN8ZW58MXx8fHwxNzc1NjgxNzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Laundry service"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-6 z-20">
                  <div className="bg-purple-600 px-4 py-2 rounded-full text-white text-sm font-semibold">
                    For Homes
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-600 p-3 rounded-xl shadow-lg">
                    <Shirt className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Laundry Pickup & Delivery</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Never worry about laundry again! We pick up your clothes from your doorstep anywhere in Benin City, professionally wash and fold them, and deliver back to you fresh and clean. Same-day service available!
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">Free Pickup & Delivery Across Benin City</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">Wash, Dry & Fold from ₦1,500/kg</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">Same-Day Service Available</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">Eco-Friendly Detergents</span>
                  </li>
                </ul>
                <Link
                  to="/laundry"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Book Laundry Pickup Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 mt-2">
              Benin City's Most Trusted Cleaning Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built our reputation on quality, reliability, and exceptional customer service across Benin City.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Available</h3>
              <p className="text-gray-600 leading-relaxed">
                Round-the-clock service for emergencies and flexible scheduling that works around your timetable.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fully Insured</h3>
              <p className="text-gray-600 leading-relaxed">
                Licensed and insured professionals with complete coverage for your peace of mind.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600 leading-relaxed">
                Highly trained cleaning professionals with years of experience serving Benin City clients.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Business</h3>
              <p className="text-gray-600 leading-relaxed">
                Proudly serving Benin City for over 14 years. We understand the local market and needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 mt-2">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it — hear from satisfied customers across Benin City
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Safe Clean has been cleaning our manufacturing facility in Ugbowo for 3 years now. Their team is professional, thorough, and always on time. Highly recommend for industrial cleaning!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center font-bold text-blue-900">
                  CM
                </div>
                <div>
                  <p className="font-bold text-gray-900">Chidi Okoro</p>
                  <p className="text-sm text-gray-600">Operations Manager, Benin City</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg border border-purple-100">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "The laundry pickup service is amazing! They collect from my house in GRA every week, and my clothes always come back fresh and perfectly folded. Best decision I made this year!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center font-bold text-purple-900">
                  AA
                </div>
                <div>
                  <p className="font-bold text-gray-900">Amaka Adeyemi</p>
                  <p className="text-sm text-gray-600">Homeowner, GRA Benin City</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "We had an emergency spill at our warehouse on Sapele Road. Safe Clean responded within 2 hours and had everything cleaned up professionally. Outstanding service!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center font-bold text-blue-900">
                  DO
                </div>
                <div>
                  <p className="font-bold text-gray-900">David Osazuwa</p>
                  <p className="text-sm text-gray-600">Warehouse Manager, Benin City</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience the Best Cleaning Service in Benin City?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-blue-100">
            Join over 2,000 satisfied customers across Benin City who trust Safe Clean Services for their cleaning needs. Get started today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+2348012345678"
              className="bg-white text-blue-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl hover:scale-105 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call +234 801 234 5678
            </a>
            <Link
              to="/laundry"
              className="bg-transparent text-white px-10 py-5 rounded-full font-bold text-lg border-2 border-white hover:bg-white hover:text-blue-900 transition-all shadow-2xl hover:scale-105 flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Schedule Pickup
            </Link>
          </div>
          <p className="mt-8 text-blue-200 text-sm">
            Available 24/7 | Free Quotes | Same-Day Service Available
          </p>
        </div>
      </section>
    </div>
  );
}
