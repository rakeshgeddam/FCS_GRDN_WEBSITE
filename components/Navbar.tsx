
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Process', href: '#how-it-works' },
    { name: 'Beta Info', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/applogo.png" alt="FocusGuardian" className="w-10 h-10 shadow-lg transition-transform group-hover:scale-110" />
            <span className="text-xl font-extrabold tracking-tighter uppercase font-heading">
              Focus<span className="text-gray-400">Guardian</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-semibold tracking-wide uppercase transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              onClick={() => window.dispatchEvent(new CustomEvent('openWaitlist'))}
              className="bg-white text-brandBlack px-6 py-2.5 rounded-full font-bold text-sm tracking-wide uppercase hover:bg-gray-200 transform hover:scale-105 active:scale-95 transition-all shadow-lg cursor-pointer"
            >
              Join the waitlist
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? (
                <span className="text-2xl">✕</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-brandBlack border-t border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-4 text-base font-bold uppercase text-gray-400 hover:text-white rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <a
            onClick={() => {
              setIsMenuOpen(false);
              window.dispatchEvent(new CustomEvent('openWaitlist'));
            }}
            className="block w-full text-center bg-brandRed text-white py-4 rounded-xl font-bold uppercase tracking-widest cursor-pointer"
          >
            Join the waitlist
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
