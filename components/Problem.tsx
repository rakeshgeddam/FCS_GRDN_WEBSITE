
import React from 'react';

const Problem: React.FC = () => {
  const problems = [
    {
      icon: '🚫',
      title: 'DOUBLE-BOOKED',
      text: 'Your work calendar doesn\'t sync with your personal life. Conflicts happen, stress rises, and you look unprofessional.',
    },
    {
      icon: '⏰',
      title: 'MISSED WINDOWS',
      text: 'Forgot to leave early for traffic? FocusGuardian knows the commute and warns you precisely when to walk out the door.',
    },
    {
      icon: '🧠',
      title: 'COGNITIVE OVERLOAD',
      text: 'Staring at a wall of text on a calendar isn\'t productive. You need a system that prioritizes based on real-time urgency.',
    },
  ];

  return (
    <section className="py-32 bg-white dark:bg-brandBlack text-brandBlack dark:text-white overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-300" id="problem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 reveal">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-8 font-heading tracking-tighter">
            Productivity is <br />
            <span className="text-brandRed">broken.</span>
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            Standard apps just list your failures. We build your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {problems.map((problem, idx) => (
            <div 
              key={idx} 
              className="glass-light p-10 rounded-[3rem] border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-all duration-500 reveal group"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-500">{problem.icon}</div>
              <h3 className="text-xl font-black mb-4 tracking-tight uppercase font-heading">{problem.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">{problem.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
