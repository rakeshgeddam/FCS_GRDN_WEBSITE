
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 overflow-hidden bg-brandBlack">
      {/* Background Animated Gradient */}
      <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-tr from-brandBlack via-brandDarkGray to-brandBlack opacity-80" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center py-12 lg:py-24">
        {/* Floating Logo Mockup Concept */}
        <div className="mb-12 reveal">
           <div className="relative inline-block">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-[2rem] bg-gradient-to-b from-brandDarkGray to-brandBlack border border-white/10 shadow-2xl flex items-center justify-center mb-6 mx-auto relative group">
                <img src="/applogo.png" alt="FocusGuardian Logo" className="w-20 md:w-32 transition-transform group-hover:scale-110 duration-500" />
                <div className="absolute -top-4 -right-4 w-10 h-10 md:w-14 md:h-14 bg-brandRed rounded-full border-4 border-brandBlack flex items-center justify-center text-white font-extrabold text-xl md:text-2xl shadow-lg">1</div>
              </div>
              <div className="absolute -left-12 top-0 opacity-20 blur-xl w-32 h-32 bg-white rounded-full"></div>
           </div>
        </div>

        <div className="max-w-4xl reveal">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-brandRed font-bold text-xs uppercase tracking-[0.2em] mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandRed opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brandRed"></span>
            </span>
            Beta testing: iOS 17+ Only
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase font-heading">
            Stop organizing. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white">
              Start doing.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            The AI calendar system that thinks ahead—so you don't miss flights, double-book meetings, or burn out on busywork.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6" id="waitlist">
            <button onClick={() => window.dispatchEvent(new CustomEvent('openWaitlist'))} className="w-full sm:w-auto px-12 py-6 bg-white text-brandBlack rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-gray-200 transform hover:-translate-y-1 transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)] active:scale-95">
              Join the waitlist
              <div className="text-[10px] font-bold opacity-50 lowercase tracking-normal">(In Beta testing)</div>
            </button>
          </div>

          <div className="mt-16 flex items-center justify-center gap-12 text-gray-500">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white mb-1">4.9</span>
              <span className="text-[10px] uppercase tracking-widest font-black">Beta Satisfaction</span>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white mb-1">10k+</span>
              <span className="text-[10px] uppercase tracking-widest font-black">Pre-registrations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
