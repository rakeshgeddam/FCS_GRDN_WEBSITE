
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'TALK OR TYPE',
      desc: "Voice: 'Finish report by 3pm, then gym for 45 minutes'",
      icon: '🎙️',
    },
    {
      num: '2',
      title: 'AI SCHEDULES',
      desc: 'Checks conflicts with ALL calendars, finds best time slots, and calculates travel time automatically.',
      icon: '🧠',
    },
    {
      num: '3',
      title: 'FOCUS & DO',
      desc: 'Notifications activate Do Not Disturb, timer auto-starts, and you stay in the zone until the job is done.',
      icon: '🎯',
    },
  ];

  return (
    <section className="py-24 bg-offWhite overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Three steps to clarity.</h2>
          <p className="text-xl text-gray-600">Complex scheduling handled by sophisticated AI.</p>
        </div>

        <div className="relative flex flex-col md:flex-row items-start gap-12 lg:gap-24">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-coral via-turquoise to-accentBlue z-0 opacity-20" />

          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="relative z-10 flex-1 flex flex-col items-center text-center reveal"
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="w-24 h-24 rounded-full bg-white border-4 border-coral flex items-center justify-center text-4xl mb-8 shadow-2xl shadow-coral/10 group hover:scale-110 transition-transform">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-coral rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.num}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
