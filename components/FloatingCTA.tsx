
import React from 'react';

interface FloatingCTAProps {
  isVisible: boolean;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ isVisible }) => {
  return (
    <div 
      className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-40 transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <a 
        href="#waitlist"
        className="glass-light px-10 py-5 rounded-full shadow-2xl flex items-center gap-4 border border-white/10 font-black uppercase text-xs tracking-widest text-white hover:scale-105 active:scale-95 transition-all group"
      >
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-brandBlack text-[10px]">🛡️</div>
        Join Waitlist
        <span className="text-brandRed group-hover:translate-x-1 transition-transform">→</span>
      </a>
    </div>
  );
};

export default FloatingCTA;
