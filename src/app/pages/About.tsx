import { Users, Award, CheckCircle, Shield, Target, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[420px] sm:h-[500px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/25 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1627634771100-b78244ffd302?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjB3b3JraW5nJTIwdG9nZXRoZXIlMjBvZmZpY2V8ZW58MXx8fHwxNzc1ODM3MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Our team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-2xl">
            About Safe Clean
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-lg font-medium leading-relaxed">
            Benin City's trusted partner in professional cleaning services since 2010
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 sm:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 sm:mb-6">Our Story</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
                Founded in 2010, Safe Clean Services began with a simple mission: to provide exceptional cleaning services that businesses and homeowners in Benin City can trust. What started as a small local operation has grown into the leading cleaning service provider serving thousands of satisfied clients across Edo State.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
                We specialize in two distinct areas - industrial and commercial cleaning for businesses throughout Benin City's industrial zones, and convenient laundry pickup and delivery services for residential customers in GRA, Ugbowo, Airport Road, Sapele Road, and all surrounding areas.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Today, we're proud to be the preferred cleaning partner for major industrial facilities, warehouses, and thousands of homes across Benin City. Our commitment to excellence, reliability, and customer satisfaction has made us a household name in Edo State.
              </p>
            </div>
            <div className="relative h-[280px] sm:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769739576456-0aefcff3f4b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmclMjB0ZWFtd29ya3xlbnwxfHx8fDE3NzU4MzcwOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Foundation</h2>
            <p className="text-lg sm:text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="bg-blue-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-5 sm:mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver exceptional cleaning services that exceed expectations, creating healthier and more productive environments for our clients while maintaining the highest standards of professionalism and integrity.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="bg-blue-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-5 sm:mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted and innovative cleaning service provider in the region, known for our reliability, quality, and commitment to environmental sustainability and customer satisfaction.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="bg-blue-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-5 sm:mb-6">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Excellence in every service</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Integrity and transparency</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Environmental responsibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Customer-first approach</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose Safe Clean?</h2>
            <p className="text-lg sm:text-xl text-gray-600">What sets us apart from the competition</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Professionally trained and certified cleaning specialists with years of experience.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Insured</h3>
              <p className="text-gray-600">
                Complete insurance coverage and bonding for your peace of mind and protection.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">
                100% satisfaction guarantee on all services or we'll make it right.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">
                Environmentally responsible products and practices in all our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 sm:py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-5xl font-bold mb-2">14+</div>
              <div className="text-base sm:text-xl text-blue-200">Years in Benin City</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-bold mb-2">2,000+</div>
              <div className="text-base sm:text-xl text-blue-200">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-bold mb-2">50+</div>
              <div className="text-base sm:text-xl text-blue-200">Team Members</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-bold mb-2">99%</div>
              <div className="text-base sm:text-xl text-blue-200">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
