
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-brandBlack text-brandBlack dark:text-white pt-32 pb-16 border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Logo Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brandBlack dark:bg-white rounded-full flex items-center justify-center text-white dark:text-brandBlack relative">
                🛡️
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-brandRed rounded-full border border-white dark:border-brandBlack text-[8px] flex items-center justify-center font-bold">1</div>
              </div>
              <span className="text-2xl font-black uppercase tracking-tighter font-heading">FocusGuardian</span>
            </div>
            <p className="text-gray-500 dark:text-gray-500 leading-relaxed font-medium">
              The AI guardian for your time. Built for elite execution and zero friction.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brandRed mb-8">System</h4>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400 font-bold text-sm">
              <li><a href="#features" className="hover:text-brandBlack dark:hover:text-white transition-colors">FEATURES</a></li>
              <li><a href="#waitlist" className="hover:text-brandBlack dark:hover:text-white transition-colors">JOIN BETA</a></li>
              <li><a href="#" className="hover:text-brandBlack dark:hover:text-white transition-colors">PRIVACY MODEL</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brandRed mb-8">Network</h4>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400 font-bold text-sm">
              <li><a href="#" className="hover:text-brandBlack dark:hover:text-white transition-colors">𝕏 TWITTER</a></li>
              <li><a href="#" className="hover:text-brandBlack dark:hover:text-white transition-colors">LINKEDIN</a></li>
              <li><a href="#" className="hover:text-brandBlack dark:hover:text-white transition-colors">INSTAGRAM</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brandRed mb-8">Contact</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-bold">beta@focusguardian.ai</p>
            <p className="text-gray-400 dark:text-gray-600 text-xs font-medium mt-4">San Francisco, CA</p>
          </div>
        </div>
        
        <div className="pt-12 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-gray-400 dark:text-gray-600 text-[10px] font-black uppercase tracking-[0.2em]">
            © 2026 FocusGuardian Inc. All Rights Reserved.
          </div>
          <div className="flex items-center gap-12 text-[10px] font-black uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-brandBlack dark:hover:text-white">Status</a>
            <a href="#" className="hover:text-brandBlack dark:hover:text-white">Beta Terms</a>
            <a href="#" className="hover:text-brandBlack dark:hover:text-white">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
