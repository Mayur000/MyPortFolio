import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('EmailJS Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log('EmailJS Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log('EmailJS Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    console.log('Form Data:', formData);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      alert('Thank you for your message! Email sent successfully.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      alert('Failed to send email. Please try again.');
    }
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-white dark:bg-gray-950 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-16 tracking-tight">
          Let's Connect 🤝
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Contact Info & Details */}
          <div className="p-8 rounded-xl bg-white/90 dark:bg-gray-900 shadow-2xl transition-all duration-500 hover:shadow-indigo-500/30 border border-gray-200 dark:border-gray-800">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b border-indigo-500 pb-3">
              Get In Touch
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I'm always eager to discuss new <strong>software opportunities</strong>, exciting <strong>collaborations</strong>, or just chat about the latest in tech. Drop me a line!
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center group">
                <span className="text-indigo-600 dark:text-cyan-400 mr-4 text-xl">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <a
                  href="mailto:mayurnarkhede@protonmail.com"
                  className="text-gray-700 dark:text-gray-300 font-medium hover:text-cyan-400 transition-colors duration-300"
                >
                  mayurnarkhede23@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center">
                <span className="text-indigo-600 dark:text-cyan-400 mr-4 text-xl">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </span>
                <span className="text-gray-700 dark:text-gray-300 font-medium">+91 XXXXX XXXXX</span>
              </div>

              {/* Social Links */}
              <div className="pt-4 flex space-x-6">
                <a
                  href="https://www.linkedin.com/in/mayur-narkhede-a17a07320/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
                >
                  {/* LinkedIn Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    height="24"
                    width="24"
                    fill="currentColor"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.7 0 32-14.5 32-32.3V64.3c0-17.8-14.3-32.3-32-32.3zM135.4 416H69V202.2h66.4V416zm-33.2-225.4c-33.2 0-60-26.8-60-60s26.8-60 60-60 60 26.8 60 60-26.7 60-60 60zM416 416h-66.4V324.8c0-33.2-.7-75.8-46.2-75.8-46.2 0-53.3 36.2-53.3 73.6V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Mayur000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110"
                >
                  {/* GitHub Icon */}
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.72-4.04-1.61-4.04-1.61-.546-1.385-1.332-1.755-1.332-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.493.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.33-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.125-.3-.535-1.527.117-3.185 0 0 1.008-.323 3.301 1.23a11.524 11.524 0 016 0c2.293-1.553 3.3-1.23 3.3-1.23.653 1.658.243 2.885.12 3.185.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.62-5.474 5.91.43.37.82 1.1.82 2.22 0 1.605-.015 2.89-.015 3.285 0 .318.216.697.825.576C20.565 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="p-8 rounded-xl bg-white/90 dark:bg-gray-900 shadow-2xl transition-all duration-500 hover:shadow-cyan-500/30 border border-gray-200 dark:border-gray-800">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b border-cyan-500 pb-3">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Let me know how I can help..."
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center bg-gradient-to-r from-indigo-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg shadow-gray-200 dark:shadow-gray-800 transform hover:scale-[1.01] hover:shadow-cyan-500/50"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
