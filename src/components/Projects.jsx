import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Virtual Banking System',
      description: 'Developed a desktop-based management application using Java and MySQL. Implemented modules for user login, record management, and admin functionalities.',
      techStack: ['Java', 'Swing', 'MySQL'],
      github: 'https://github.com/Mayur000/Virtual_Banking_System',
      // demo: '#',
      image: '/Project1.jpg',
    },
    {
      title: 'Wavely',
      description: 'Created a music player front-end application with song list display, play/pause controls. Planned and partially implemented a search feature for songs. ',
      techStack: ['JavaScript', 'HTML', 'CSS','Local Storage'],
      github: 'https://github.com/Mayur000/Wavely',
      demo: 'https://wavely-sooty.vercel.app/',
      image: '/Project2.jpg',
    },
    {
  title: "Smart Water Management Platform",
  description:
    "A digital platform tackling urban India's water crisis by enabling households and societies to monitor water usage, detect leaks with AI, and access a transparent tanker marketplace with GPS tracking and digital payments.",
  techStack: [
    "React",
    "Node.js",
    "Express",
    "MongoDB / PostgreSQL",
    "Python (AI/ML)",
    "Google Maps API",
    "Razorpay / Stripe"
  ],
  github: "https://github.com/Mayur000/Smart_Water_Management",
  // demo: "#", // optional demo link
  image: "/Project3.jpg"
}

  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
                  >
                    GitHub
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
