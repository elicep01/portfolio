import React from 'react';

const ResumeViewer = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-4xl h-[90vh] bg-white rounded-lg shadow-xl">
        <div className="absolute top-4 right-4 z-10">
          <button 
            onClick={() => window.history.back()}
            className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <iframe
          src="/resume.pdf"
          className="w-full h-full rounded-lg"
          title="Resume"
        />
      </div>
    </div>
  );
};

export default ResumeViewer;