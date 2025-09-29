import React from 'react';
// Import icons to visually enhance the summary cards
import { BookOpen, Heart, Target, User } from 'lucide-react'; 

const About = () => {
  // Define data for the highlight cards for easier management
  const highlights = [
    {
      icon: BookOpen,
      title: "Education",
      content: "Pursuing Computer Engineering at Datta Meghe College Of Engineering , Airoli, Mumbai University — graduating in 2027.",
      color: "indigo",
    },
    {
      icon: Heart,
      title: "Interests",
      content: "Full-Stack Development, Artificial Intelligence, Open Source and Cloud Computing.",
      color: "pink",
    },
    {
      icon: Target,
      title: "Goals",
      content: "To grow into a versatile software engineer, contribute to impactful projects, and create technology that benefits people worldwide.",
      color: "purple",
    },
  ];

  return (
    // Outer container with smooth dark mode transition
    <section id="about" className="py-24 bg-gray-100 dark:bg-gray-950 transition-colors duration-500 font-inter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-center mb-16 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-300">
          About Me
        </h2>

        <div className="max-w-6xl mx-auto p-8 rounded-3xl shadow-2xl dark:shadow-indigo-900/50 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            
            {/* Main Bio Content */}
            <div className="md:col-span-2 space-y-8">
              <h3 className="flex items-center text-3xl font-bold text-gray-900 dark:text-white">
                 <User className="w-6 h-6 mr-3 text-indigo-500 dark:text-indigo-400" />
                Hello, I'm Mayur Rajendrakumar Narkhede.
              </h3>
              
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                I’m a <b>Computer Engineering student</b> at Datta Meghe College Of Engineering , Airoli, Mumbai University, passionate about building scalable applications and solving real-world problems through code. Turning complex challenges into simple, practical solutions excites me the most.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                My journey revolves around the <b>Mern-stack</b> & I also exploring <b>ML</b>. I strongly believe in teamwork, continuous learning, and using technology as a tool to drive innovation and impact.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Beyond coding, I enjoy experimenting with new technologies, following the latest industry trends, and developing personal projects that push me to grow as a developer.
              </p>
            </div>
            
            {/* Highlights/Stats Cards */}
            <div className="md:col-span-1 space-y-6">
              {highlights.map((item, index) => {
                const accentClass = `bg-gradient-to-r from-${item.color}-500 to-${item.color}-600`;
                const borderColor = `border-${item.color}-300 dark:border-${item.color}-700`;
                
                return (
                  <div 
                    key={index} 
                    className={`p-6 rounded-xl border-2 ${borderColor} bg-gray-50 dark:bg-gray-800 shadow-md transform hover:scale-[1.02] transition-all duration-300 cursor-pointer`}
                  >
                    <div className="flex items-center mb-3">
                      <item.icon className={`w-6 h-6 text-white p-1 rounded-full mr-3 ${accentClass}`} />
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {item.content}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
