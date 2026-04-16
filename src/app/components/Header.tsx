import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#dbe3ff] bg-[#f5f7ff]/95 backdrop-blur md:border-b-0 md:bg-white">
      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[74px] sm:h-20 gap-3">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
            <div className="bg-blue-600 p-2.5 sm:p-2.5 rounded-2xl group-hover:bg-blue-700 transition-colors shrink-0 shadow-[0_10px_25px_rgba(37,99,235,0.25)]">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="flex items-baseline">
                <span className="text-lg sm:text-2xl font-bold text-blue-900 truncate">Safe Clean</span>
              </div>
              <div className="text-[9px] sm:text-xs text-gray-500 -mt-1 tracking-[0.14em] sm:tracking-wide">PROFESSIONAL SERVICES</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-blue-900 bg-blue-50' : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
              } px-4 py-2 rounded-lg transition-all font-medium`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                isActive('/about') ? 'text-blue-900 bg-blue-50' : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
              } px-4 py-2 rounded-lg transition-all font-medium`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`${
                isActive('/services') ? 'text-blue-900 bg-blue-50' : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
              } px-4 py-2 rounded-lg transition-all font-medium`}
            >
              Services
            </Link>
            <Link
              to="/industrial"
              className={`${
                isActive('/industrial') ? 'text-blue-900 bg-blue-50' : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
              } px-4 py-2 rounded-lg transition-all font-medium`}
            >
              Industrial
            </Link>
            <Link
              to="/laundry"
              className={`${
                isActive('/laundry') ? 'text-blue-900 bg-blue-50' : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
              } px-4 py-2 rounded-lg transition-all font-medium`}
            >
              Laundry
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive('/contact') ? 'text-blue-900 bg-blue-50' : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
              } px-4 py-2 rounded-lg transition-all font-medium`}
            >
              Contact
            </Link>
            <Link
              to="/laundry"
              className="ml-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg font-semibold"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-gray-700 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-colors hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2 rounded-[28px] bg-white p-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
              <Link
                to="/"
                className={`${
                  isActive('/') ? 'text-blue-900 bg-blue-50 font-semibold' : 'text-gray-700 hover:bg-gray-50'
                } py-3 px-4 rounded-lg transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`${
                  isActive('/about') ? 'text-blue-900 bg-blue-50 font-semibold' : 'text-gray-700 hover:bg-gray-50'
                } py-3 px-4 rounded-lg transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`${
                  isActive('/services') ? 'text-blue-900 bg-blue-50 font-semibold' : 'text-gray-700 hover:bg-gray-50'
                } py-3 px-4 rounded-lg transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/industrial"
                className={`${
                  isActive('/industrial') ? 'text-blue-900 bg-blue-50 font-semibold' : 'text-gray-700 hover:bg-gray-50'
                } py-3 px-4 rounded-lg transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Industrial
              </Link>
              <Link
                to="/laundry"
                className={`${
                  isActive('/laundry') ? 'text-blue-900 bg-blue-50 font-semibold' : 'text-gray-700 hover:bg-gray-50'
                } py-3 px-4 rounded-lg transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Laundry
              </Link>
              <Link
                to="/contact"
                className={`${
                  isActive('/contact') ? 'text-blue-900 bg-blue-50 font-semibold' : 'text-gray-700 hover:bg-gray-50'
                } py-3 px-4 rounded-lg transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/laundry"
                className="mt-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg text-center font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
