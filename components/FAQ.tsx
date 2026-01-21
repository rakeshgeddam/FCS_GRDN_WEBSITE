
import React, { useState } from 'react';

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/5 dark:border-white/5 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex justify-between items-center text-left hover:text-brandRed transition-colors focus:outline-none"
      >
        <span className="text-lg font-black text-brandBlack dark:text-white uppercase font-heading tracking-tight">{q}</span>
        <span className={`text-3xl transition-transform duration-500 ${isOpen ? 'rotate-45 text-brandRed' : 'text-gray-300 dark:text-gray-700'}`}>
          +
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-8' : 'max-h-0'}`}
      >
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">{a}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: 'When is the public launch?',
      a: 'We are currently in private Beta testing. We expect a wider release later this year once our early users have helped us perfect the AI guardian engine.',
    },
    {
      q: 'Is it really free?',
      a: 'FocusGuardian is currently in Beta testing and is completely free for all approved testers. We will announce a pricing structure for the public release in the coming months.',
    },
    {
      q: 'Does it sync with my work email?',
      a: 'Yes. It integrates directly with the iOS system calendar, meaning any account configured on your iPhone (Google, Outlook, Exchange) works instantly.',
    },
    {
      q: 'How does it protect my privacy?',
      a: 'All calendar processing happens on-device. Your actual event details (who you are meeting, specific notes) are never sent to our servers.',
    },
  ];

  return (
    <section className="py-32 bg-white dark:bg-brandBlack transition-colors duration-300" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <h2 className="text-5xl font-black text-brandBlack dark:text-white mb-6 uppercase font-heading tracking-tighter">FAQ</h2>
          <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">Beta testing phase</p>
        </div>
        <div className="reveal">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
