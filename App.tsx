
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import Comparison from './components/Comparison';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import CookieBanner from './components/CookieBanner';
import WaitlistModal from './components/WaitlistModal';

const App: React.FC = () => {
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [showCookies, setShowCookies] = useState(true);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);

  useEffect(() => {
    const handleOpenWaitlist = () => setShowWaitlistModal(true);
    window.addEventListener('openWaitlist', handleOpenWaitlist);
    return () => window.removeEventListener('openWaitlist', handleOpenWaitlist);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      setShowFloatingButton(scrollPosition > (documentHeight - windowHeight) * 0.4);

      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-brandBlack text-white overflow-x-hidden selection:bg-brandRed selection:text-white">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-brandRed z-[100] transition-all duration-150"
        id="scroll-progress"
      />

      <Navbar />
      
      <main>
        <Hero />
        <Problem />
        <Features />
        <Comparison />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />

      <FloatingCTA isVisible={showFloatingButton} />
      {showCookies && <CookieBanner onAccept={() => setShowCookies(false)} />}
      <WaitlistModal isOpen={showWaitlistModal} onClose={() => setShowWaitlistModal(false)} />

      {/* Global click handler for waitlist buttons */}
      <script>{`
        document.addEventListener('click', (e) => {
          const target = e.target as HTMLElement;
          if (target.textContent?.includes('Join the waitlist') || target.closest('[data-waitlist-btn]')) {
            window.dispatchEvent(new CustomEvent('openWaitlist'));
          }
        });
      `}</script>
    </div>
  );
};

export default App;
