import React from 'react';
// Import the Award icon from lucide-react for the timeline marker
import { Award } from 'lucide-react';

// Main Certifications Component
const Certifications = () => {
  // Certifications Data
  const certificationsData = [
    {
      title: "Java Programming Certificate",
      issuer: "Success Classes of Engineeering",
      year: "2025",
      description:
        "Completed a comprehensive Java programming course covering core concepts, object-oriented programming, and advanced topics.",
    },
    {
      title: "Complete Web Development Course Certificate (Frontend and Backend)",
      issuer: "Udemy",
      year: "2025",
      description:
        "Acquired full-stack web development skills including HTML, CSS, JavaScript, React, Node.js, Express, and database management.",
    },
  ];

  return (
    // Outer container with a deep background color and smooth dark mode transition
    <div id="certifications" className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20 font-inter transition-all duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title: Uses a vibrant text gradient */}
        <h1 className="text-5xl font-extrabold text-center mb-16 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500 dark:from-indigo-300 dark:to-pink-300">
          Certifications
        </h1>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">

          {/* Vertical Timeline Line: Centered on desktop, left-aligned on mobile */}
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-1 h-full bg-indigo-200 dark:bg-indigo-900 rounded-full"></div>

          {/* Mapping through certifications items */}
          {certificationsData.map((item, index) => {

            // Logic to alternate card placement on desktop (sm breakpoint and up)
            const isEven = index % 2 === 0;
            // Alignment classes for the text inside the card when it's on the right/left
            const alignment = isEven ? "sm:text-right sm:pr-12" : "sm:text-left sm:pl-12";
            // Wrapper class to push the card to the correct side
            const wrapperClasses = isEven ? "sm:justify-start" : "sm:justify-end";

            return (
              <div
                key={index}
                className={`relative mb-16 flex flex-col sm:flex-row ${wrapperClasses}`}
              >

                {/* Connector/Spacer for desktop view. This takes up half the width to push the card to the side. */}
                <div className={`hidden sm:block sm:w-1/2 ${isEven ? 'order-2' : 'order-1'}`}></div>

                {/* Timeline Dot (always centered on the line) */}
                <div className="absolute top-0 left-4 sm:left-1/2 sm:-translate-x-1/2 -ml-0.5 w-8 h-8 flex items-center justify-center z-10">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500 ring-4 ring-gray-50 dark:ring-gray-950 transform transition-all duration-300 hover:scale-110">
                    <Award className="w-4 h-4 text-white" />
                  </span>
                </div>

                {/* Card Content: Alternates between order-1 and order-2 for left/right placement */}
                <div className={`mt-8 sm:mt-0 w-full sm:w-1/2 group ${isEven ? 'order-1' : 'order-2'} ${alignment}`}>
                  <div className="p-6 md:p-8 rounded-2xl shadow-xl bg-white/90 dark:bg-gray-800/95 backdrop-blur-sm border border-indigo-100 dark:border-indigo-900/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/30 dark:hover:shadow-indigo-500/50">

                    <p className="text-sm font-semibold tracking-wider uppercase mb-1 text-indigo-600 dark:text-indigo-400">
                      {item.year}
                    </p>

                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      {item.title}
                    </h3>

                    <h4 className="text-md font-medium text-purple-600 dark:text-purple-300 mb-3">
                      {item.issuer}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Certifications;