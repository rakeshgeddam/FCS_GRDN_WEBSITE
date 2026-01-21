
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "FocusGuardian actually understands that I have a life outside of Zoom calls. The travel alerts are literally a lifesaver.",
      author: "Marcus K.",
      role: "Beta Tester / Product Lead"
    },
    {
      quote: "I used to lose so many good ideas to the 'notes app graveyard'. The Someday Stack is the first system that actually brings them back when I'm ready.",
      author: "Sarah L.",
      role: "Early Access User"
    },
    {
      quote: "The Focus Mode automation alone is worth the waitlist. I don't have to think about silence anymore—it just happens.",
      author: "David R.",
      role: "Creative Director"
    }
  ];

  return (
    <section className="py-32 px-4 bg-white dark:bg-brandBlack transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="reveal glass-light p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 flex flex-col justify-between shadow-lg" style={{ transitionDelay: `${idx * 150}ms` }}>
              <div className="mb-10">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-brandBlack dark:text-white">★</span>)}
                </div>
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300 italic leading-relaxed">"{t.quote}"</p>
              </div>
              <div>
                <h5 className="font-black uppercase tracking-widest text-xs text-brandBlack dark:text-white mb-1">{t.author}</h5>
                <p className="text-[10px] text-gray-400 dark:text-gray-600 font-bold uppercase">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
