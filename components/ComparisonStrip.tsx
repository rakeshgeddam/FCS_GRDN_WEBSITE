
import React from 'react';

const ComparisonStrip: React.FC = () => {
  return (
    <section className="py-32 px-4 bg-white dark:bg-brandBlack transition-colors duration-300">
      <div className="max-w-5xl mx-auto reveal">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase font-heading tracking-tighter text-brandBlack dark:text-white">The Reality Shift</h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium mt-4 italic">"It's not about doing more. It's about feeling better while doing it."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px rounded-[3rem] overflow-hidden bg-black/5 dark:bg-white/10 border border-black/5 dark:border-white/10 shadow-2xl">
          <div className="p-12 md:p-16 bg-white dark:bg-brandDarkGray/50">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 dark:text-gray-600 mb-8">Without FocusGuardian</h4>
            <ul className="space-y-6">
              {[
                'Scattered Post-it notes and mental lists',
                'Late to meetings due to traffic surprises',
                'Task paralysis from overwhelming lists',
                'Forgetting birthdays and special moments',
                'Burnout from manual re-planning'
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-gray-500">
                  <span className="text-brandRed font-black">✕</span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-12 md:p-16 bg-gray-50/50 dark:bg-white/5 border-l border-black/5 dark:border-white/10">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brandRed mb-8">With FocusGuardian</h4>
            <ul className="space-y-6">
              {[
                'One central, intelligent Someday Stack',
                'Precise alerts calculated via MapKit',
                'Focus Modes that shield your deep work',
                'Automated reminders for what matters',
                'AI-driven schedule recovery'
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-brandBlack dark:text-white">
                  <span className="text-brandRed dark:text-white font-black">✓</span>
                  <span className="font-bold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonStrip;
