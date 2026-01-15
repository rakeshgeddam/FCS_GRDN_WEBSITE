
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: '🎙️',
      title: 'VOICE INTENT',
      subtitle: 'Talk naturally',
      desc: "Say 'meeting with Sarah tomorrow at 10, make sure I have 15m travel time'. Done.",
    },
    {
      icon: '🛡️',
      title: 'CONFLICT SHIELD',
      subtitle: 'Zero Overlaps',
      desc: 'Deep integration with iOS Calendar prevents booking over any existing life event.',
    },
    {
      icon: '🚗',
      title: 'BUFFER ENGINE',
      subtitle: 'Proactive Travel',
      desc: 'Calculates Apple Maps travel data in real-time. If traffic builds, your alert comes earlier.',
    },
    {
      icon: '📵',
      title: 'FOCUS LOCK',
      subtitle: 'Auto-DND',
      desc: 'Tasks automatically trigger system Focus Modes. No distractions, just execution.',
    },
  ];

  return (
    <section className="py-32 bg-brandBlack" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 reveal gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase font-heading tracking-tighter">
              The Guardian <br /> <span className="text-gray-500">System.</span>
            </h2>
            <p className="text-xl text-gray-400 font-medium">
              Elite productivity features, simplified for the everyday high-achiever.
            </p>
          </div>
          <a href="#waitlist" className="bg-white text-brandBlack px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-gray-200 transition-all">
            Join Beta
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-brandDarkGray/50 border border-white/5 rounded-[3rem] p-12 hover:bg-brandDarkGray hover:border-white/10 transition-all duration-500 reveal group"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-6 mb-8">
                <span className="text-5xl group-hover:rotate-12 transition-transform">{feature.icon}</span>
                <div>
                  <h4 className="text-xs font-black text-brandRed tracking-[0.3em] uppercase mb-1">{feature.title}</h4>
                  <h3 className="text-2xl font-black text-white uppercase font-heading">{feature.subtitle}</h3>
                </div>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed font-medium">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
