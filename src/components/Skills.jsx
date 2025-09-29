import React from "react";

const Skills = () => {
  const skills = [
    "C (Programming Language)",
    "Data Structures in C",
    "Core Java",
    "Java Swing",
    "HTML5",
    "CSS (Cascading Style Sheets)",
    "JavaScript (ES6+)",
    "React.js",
    "Express.js",
    "MySQL / SQL",
    "Git & GitHub",
  ];

  const tools = [
    "Node.js",
    "Tailwind CSS",
    "MongoDB",
    "Vite",
    "AutoCAD",
    "AWS (Basics)",
    "Vercel",
  ];

  return (
    <section
      id="skills"
      className="py-20 lg:py-24 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-16 tracking-tight">
          🚀 Skills & Technologies
        </h2>
        <div className="max-w-5xl mx-auto">
          {/* Main Skills Grid */}
          <div className="grid md:grid-cols-2 gap-16">
            {/* Programming Languages & Core Skills */}
            <div className="bg-white/70 dark:bg-gray-800/70 p-8 rounded-xl shadow-2xl transition-all duration-500 hover:shadow-indigo-500/30 border border-gray-200 dark:border-gray-700">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-indigo-500 pb-3">
                Core Proficiency
              </h3>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-indigo-100 dark:bg-gray-800 text-indigo-600 dark:text-gray-300 border border-indigo-200 dark:border-gray-700 px-5 py-2.5 rounded-lg text-base font-semibold transition-transform duration-300 hover:scale-105 hover:bg-indigo-200 dark:hover:bg-gray-700 transform"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools, Frameworks & Learning */}
            <div className="space-y-12">
              {/* Tools Section */}
              <div className="bg-white/70 dark:bg-gray-800/70 p-8 rounded-xl shadow-2xl transition-all duration-500 hover:shadow-cyan-500/30 border border-gray-200 dark:border-gray-700">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-cyan-500 pb-3">
                  Tools & Frameworks
                </h3>
                <div className="flex flex-wrap gap-4">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-indigo-100 dark:bg-gray-800 text-indigo-600 dark:text-gray-300 border border-indigo-200 dark:border-gray-700 px-5 py-2.5 rounded-lg text-base font-semibold transition-transform duration-300 hover:scale-105 hover:bg-indigo-200 dark:hover:bg-gray-700 transform"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Learning Section */}
              <div className="bg-white/70 dark:bg-gray-800/70 p-8 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  🌟 Learning & Exploring
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Currently strengthening my skills in the <b>MERN stack</b>,
                  diving deeper into advanced React.js (Node.js and more ...).
                  I’m also expanding my knowledge of{" "}
                  <b>cloud platforms (AWS, Vercel)</b> to build scalable and
                  production-ready applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
