
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import ProgressRail from './components/ProgressRail';
import NarrativeStory from './components/NarrativeStory';
import ComparisonStrip from './components/ComparisonStrip';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import CookieBanner from './components/CookieBanner';
import WaitlistModal from './components/WaitlistModal';

const App: React.FC = () => {
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [showCookies, setShowCookies] = useState(true);
  const [showWaitlist, setShowWaitlist] = useState(false);

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

  useEffect(() => {
    const open = () => setShowWaitlist(true);
    window.addEventListener('openWaitlist', open as EventListener);
    return () => window.removeEventListener('openWaitlist', open as EventListener);
  }, []);

  return (
    <div className="relative min-h-screen bg-white dark:bg-brandBlack text-brandBlack dark:text-white overflow-x-hidden selection:bg-brandRed selection:text-white transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-brandRed z-[100] transition-all duration-150"
        id="scroll-progress"
      />

      <Navbar />
      
      <main>
        <Hero />
        <Problem />
        
        {/* New Narrative Experience */}
        <div className="relative">
          <ProgressRail />
          <NarrativeStory />
        </div>

        <ComparisonStrip />
        <Testimonials />
        
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />

      <FloatingCTA isVisible={showFloatingButton} />
      {showCookies && <CookieBanner onAccept={() => setShowCookies(false)} />}
      <WaitlistModal isOpen={showWaitlist} onClose={() => setShowWaitlist(false)} />
    </div>
  );
};

export default App;
