import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 lg:py-32 bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="container mx-auto px-6 text-center">
        
        <div className="max-w-3xl mx-auto p-10 lg:p-12 rounded-2xl bg-white/90 dark:bg-gray-900 shadow-2xl transition-all duration-500 hover:shadow-cyan-500/30 border border-gray-200 dark:border-gray-800">
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4 tracking-tight">
            Resume
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Get a comprehensive look at my professional journey, technical stack, and educational background.
          </p>
          
          <a
            href="/Resume.pdf"
            download="Mayur_Narkhede_Resume.pdf"
            className="
              inline-flex items-center 
              bg-gradient-to-r from-indigo-500 to-cyan-500 
              text-white 
              px-10 py-4 
              rounded-xl 
              font-bold text-lg 
              transition-all duration-300 
              shadow-xl shadow-gray-200 dark:shadow-gray-800 
              transform hover:scale-105 hover:shadow-cyan-500/50
              group
            "
          >
            <svg className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume (PDF)
            
          </a>
          
          <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            *File Format: PDF | Last Updated: September 2025
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Resume;