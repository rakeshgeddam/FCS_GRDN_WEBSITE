
import React, { useEffect } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-navy/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl transform transition-all animate-in zoom-in-95">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
        >
          ✕
        </button>
        
        <div className="aspect-video relative">
          <img 
            src="https://placehold.co/1920x1080/1A1A2E/white?text=FocusGuardian+Product+Demo+Video" 
            alt="Product Demo Video"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="w-20 h-20 bg-coral rounded-full flex items-center justify-center text-white text-3xl shadow-2xl pl-2">
                ▶
             </div>
          </div>
        </div>

        <div className="bg-white p-6 flex justify-between items-center">
          <div>
            <h4 className="font-bold text-navy text-xl">FocusGuardian in Action</h4>
            <p className="text-gray-500 text-sm">Experience the power of AI-driven focus.</p>
          </div>
          <button 
            className="px-6 py-3 bg-navy text-white rounded-xl font-bold hover:bg-opacity-90 transition-all"
            onClick={onClose}
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
