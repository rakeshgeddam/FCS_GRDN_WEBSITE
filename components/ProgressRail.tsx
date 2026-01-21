
import React, { useEffect, useState } from 'react';

const ProgressRail: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { id: 'story-capture', label: '1 Capture' },
    { id: 'story-plan', label: '2 Plan' },
    { id: 'story-focus', label: '3 Focus' },
    { id: 'story-remember', label: '4 Remember' },
    { id: 'story-celebrate', label: '5 Celebrate' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = steps.findIndex(s => s.id === entry.target.id);
            if (index !== -1) setActiveStep(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    steps.forEach(step => {
      const el = document.getElementById(step.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-6 pointer-events-none">
      <div className="h-48 w-px bg-black/10 dark:bg-white/10 relative">
        <div 
          className="absolute top-0 left-0 w-px bg-brandRed transition-all duration-500"
          style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
        />
      </div>
      {steps.map((step, idx) => (
        <div 
          key={step.id} 
          className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
            activeStep === idx ? 'text-brandBlack dark:text-white translate-x-2' : 'text-gray-300 dark:text-gray-600'
          }`}
        >
          {step.label}
        </div>
      ))}
    </div>
  );
};

export default ProgressRail;
