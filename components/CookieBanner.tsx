
import React from 'react';

interface CookieBannerProps {
  onAccept: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onAccept }) => {
  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-sm w-full animate-bounce duration-1000">
      <div className="glass p-6 rounded-3xl shadow-2xl border border-white">
        <div className="flex items-start gap-4">
          <div className="text-3xl">🍪</div>
          <div className="flex-1">
            <h5 className="font-bold text-navy mb-1">Cookie Preferences</h5>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              We use strictly necessary cookies to ensure our site works beautifully for you.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={onAccept}
                className="px-4 py-2 bg-navy text-white text-xs font-bold rounded-xl hover:bg-navy/90 transition-all"
              >
                Accept All
              </button>
              <button 
                onClick={onAccept}
                className="px-4 py-2 bg-gray-100 text-gray-600 text-xs font-bold rounded-xl hover:bg-gray-200 transition-all"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
