import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const ResumeViewer = () => {
  useEffect(() => {
    // Prevent scrolling of the background when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    window.history.back();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-4xl h-[90vh] bg-white rounded-lg shadow-xl">
        <div className="absolute top-4 right-4 z-10">
          <button 
            onClick={handleClose}
            className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
            aria-label="Close resume viewer"
          >
            <X size={24} />
          </button>
        </div>
        <iframe
          src="/Elice_Priyadarshini_Resume.pdf"
          className="w-full h-full rounded-lg"
          title="Resume"
        />
      </div>
    </div>
  );
};

export default ResumeViewer;