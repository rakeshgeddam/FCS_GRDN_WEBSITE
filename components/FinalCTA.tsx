
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 px-4 bg-brandBlack overflow-hidden" id="waitlist-final">
      <div className="max-w-7xl mx-auto relative reveal">
        {/* Main Background Card */}
        <div className="bg-white rounded-[4rem] p-12 lg:p-24 text-center text-brandBlack relative overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.05)]">
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] uppercase font-heading tracking-tighter">
              Secure your <br /> <span className="text-brandRed">Beta access.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 font-medium max-w-2xl mx-auto">
              Be the first to reclaim your focus. Join thousands of high-performers currently testing the system.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <button className="w-full sm:w-auto px-16 py-8 bg-brandBlack text-white rounded-[2rem] font-black text-xl uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl group">
                Join the waitlist
                <div className="text-xs font-bold opacity-40 lowercase tracking-normal mt-1">(In Beta testing)</div>
              </button>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap justify-center items-center gap-10 opacity-60">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black mb-1">4.9/5</span>
                <span className="text-[10px] uppercase font-black tracking-widest">User Rating</span>
              </div>
              <div className="w-px h-10 bg-brandBlack/10 hidden sm:block" />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold mb-1">iOS 17</span>
                <span className="text-[10px] uppercase font-black tracking-widest">Optimized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
