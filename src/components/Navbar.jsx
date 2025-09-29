import React, { useState, useEffect } from 'react';

const Navbar = () => {
  // Initial state should ideally read from localStorage or system preference
  const [darkMode, setDarkMode] = useState(true); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Sync dark mode state with the document element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Scroll listener for sticky/scrolled effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Use the native scrollIntoView with smooth behavior
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Close mobile menu after clicking a link
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav 
      className={`
        fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md 
        ${isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 shadow-xl' 
          : 'bg-transparent dark:bg-transparent shadow-none'
        }
      `}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center h-14">
          {/* Logo/Name */}
          <div 
            className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400 cursor-pointer transition-transform duration-300 hover:scale-[1.03] whitespace-nowrap overflow-hidden"
            onClick={() => scrollToSection('hero')}
          >
            Mayur Narkhede
          </div>

          <div className="flex items-center space-x-4">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className="text-gray-700 dark:text-gray-300 text-sm font-semibold relative group p-1 transition-colors duration-300 hover:text-indigo-500 dark:hover:text-cyan-400"
                >
                  {item.name}
                  {/* Underline hover effect */}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-indigo-500 dark:bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-lg text-gray-700 dark:text-yellow-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            {/* Mobile Menu Button (Hamburger/Close) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`md:hidden overflow-hidden transition-max-height duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
          style={{ transitionProperty: 'max-height, opacity, margin-top' }}
        >
          <div className="flex flex-col space-y-2 py-4 border-t border-gray-200 dark:border-gray-700">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className="text-left py-2 px-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-all duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;