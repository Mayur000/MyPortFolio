import React from "react";
import { Myphoto } from "../assets/assets.js";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen pt-20 flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden"
    >
      {/* Background/Gradient Effect - Subtle lighting */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob transition-all duration-1000"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 transition-all duration-1000"></div>

      {/* Content Container */}
      <div className="container mx-auto px-6 text-center z-10 py-16">
        <div className="mb-10">
          {/* Profile Image with Ring Effect */}
          <div className="relative w-40 h-40 mx-auto mb-6 p-1 border-1 border-transparent rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transform hover:rotate-2 transition-transform duration-500">
            <img
              src={Myphoto}
              alt="Mayur Narkhede"
              className="w-full h-full rounded-full object-cover border-1 border-white dark:border-gray-900 shadow-2xl transition-all duration-500"
            />
          </div>

          {/* Title and Role */}
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tighter animate-fadeInUp transition-colors duration-500">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Mayur Narkhede
            </span>
          </h1>
          <p className="text-2xl lg:text-3xl font-light text-gray-700 dark:text-cyan-300 mb-6 animate-fadeInUp animation-delay-300 transition-colors duration-500">
            Mern Stack Developer
          </p>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed animate-fadeInUp animation-delay-600 transition-colors duration-500">
            I’m passionate about transforming ideas into impactful digital
            solutions. With a strong foundation in <b>Mern Stack</b>
            , I enjoy building applications that balance{" "}
            <b>clean, intuitive user experiences</b> with{" "}
            <b>efficient and reliable backend systems</b>. Always eager to
            learn, I strive to push boundaries and create software that makes a
            real difference.
          </p>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fadeInUp animation-delay-900">
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 dark:text-white rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 hover:text-white transition-all duration-300 shadow-lg shadow-indigo-500/50"
          >
            <span className="relative px-7 py-3 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-gray-900 dark:text-white text-base font-semibold transition-colors duration-500">
              <svg
                className="w-5 h-5 inline mr-2 -mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              View My Work
            </span>
          </a>

          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-indigo-600 dark:text-cyan-400 rounded-lg border-2 border-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300"
          >
            <span className="relative px-7 py-3 text-base font-semibold transition-colors duration-500">
              <svg
                className="w-5 h-5 inline mr-2 -mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Get In Touch
            </span>
          </a>
        </div>
      </div>

      {/* Add keyframe styles for animations (assuming a custom CSS file or tailwind config for keyframes) */}
      <style jsx>{`
        /* Note: For pure Tailwind, you'd add these keyframes to tailwind.config.js */
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          30% {
            transform: translate(20px, -30px) scale(1.1);
          }
          60% {
            transform: translate(-20px, 30px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-900 {
          animation-delay: 0.9s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
