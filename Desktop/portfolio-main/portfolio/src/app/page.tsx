'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Newsletter from '@/components/Newsletter';
import SocialLinks from '@/components/SocialLinks';
import Toast from '@/components/Toast';
import Image from 'next/image';

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };
    let isValid = true;

    if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
      isValid = false;
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setToast({
        message: 'Please fix the errors in the form',
        type: 'error'
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setToast({
        message: 'Message sent successfully!',
        type: 'success'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch {
      setToast({
        message: 'Failed to send message. Please try again.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    // Clear error when user starts typing
    if (errors[id as keyof typeof errors]) {
      setErrors({ ...errors, [id]: '' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                    Maxwell Okosun
                  </span>
                </h1>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4"
              >
                <h2 className="text-2xl text-dark-300 font-medium">
                  <span className="inline-block animate-bounce">👋</span> Frontend Developer & UI/UX Enthusiast
                </h2>
                <p className="text-lg text-dark-400 leading-relaxed">
                  Crafting beautiful, responsive, and user-friendly web experiences with modern technologies.
                  Passionate about creating intuitive interfaces that make a difference.
                </p>

                {/* Tech Stack of the Week */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-4"
                >
                  <h3 className="text-sm font-medium text-dark-300 mb-2">Tech Stack of the Week</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-blue-500/20 rounded-full text-blue-400">Next.js</span>
                    <span className="text-xs px-2 py-1 bg-purple-500/20 rounded-full text-purple-400">TypeScript</span>
                    <span className="text-xs px-2 py-1 bg-pink-500/20 rounded-full text-pink-400">Tailwind CSS</span>
                  </div>
                </motion.div>

                <div className="flex flex-wrap gap-3">
                  <span className="skill-badge">React</span>
                  <span className="skill-badge">Next.js</span>
                  <span className="skill-badge">TypeScript</span>
                  <span className="skill-badge">Tailwind CSS</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex gap-4"
              >
                <a
                  href="https://github.com/Badboixixi77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary group"
                >
                  <span className="flex items-center gap-2">
                    GitHub
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </a>
                <button 
                  onClick={() => setShowContactForm(true)}
                  className="btn btn-secondary group"
                >
                  <span className="flex items-center gap-2">
                    Contact Me
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 4v16m0-16l8 8-8 8" />
                    </svg>
                  </span>
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse" />
                <Image
                  src="/flywithxixi-optimized.jpg"
                  alt="Maxwell Okosun - Frontend Developer"
                  fill
                  className="object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />
                
                {/* Floating Tech Icons */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center"
                >
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-4 left-4 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center"
                >
                  <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </motion.div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-20 animate-pulse delay-1000" />
            </motion.div>
          </div>

          {/* Currently Working On - Moved here */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-6 border border-blue-500/30 shadow-lg max-w-2xl mx-auto"
          >
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              Currently Working On
            </h3>
            <p className="text-white/90 text-base">
              Fly with Xixi - A modern travel platform built with Next.js 14, TypeScript, and Tailwind CSS
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-center mb-8">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card p-4">
              <h3 className="text-lg font-semibold mb-3">Frontend Development</h3>
              <div className="flex flex-wrap gap-1.5">
                <span className="skill-badge text-xs">React</span>
                <span className="skill-badge text-xs">Next.js</span>
                <span className="skill-badge text-xs">TypeScript</span>
                <span className="skill-badge text-xs">Tailwind CSS</span>
                <span className="skill-badge text-xs">JavaScript</span>
                <span className="skill-badge text-xs">HTML5</span>
                <span className="skill-badge text-xs">CSS3</span>
              </div>
            </div>
            <div className="card p-4">
              <h3 className="text-lg font-semibold mb-3">UI/UX Design</h3>
              <div className="flex flex-wrap gap-1.5">
                <span className="skill-badge text-xs">Responsive Design</span>
                <span className="skill-badge text-xs">Figma</span>
                <span className="skill-badge text-xs">Accessibility</span>
                <span className="skill-badge text-xs">User Testing</span>
                <span className="skill-badge text-xs">Wireframing</span>
              </div>
            </div>
            <div className="card p-4">
              <h3 className="text-lg font-semibold mb-3">Development Tools</h3>
              <div className="flex flex-wrap gap-1.5">
                <span className="skill-badge text-xs">Git</span>
                <span className="skill-badge text-xs">VS Code</span>
                <span className="skill-badge text-xs">Chrome DevTools</span>
                <span className="skill-badge text-xs">npm</span>
                <span className="skill-badge text-xs">Vercel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-center mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: 'Kama Main',
                description: 'A modern e-commerce platform built with Next.js and Tailwind CSS, featuring product listings, shopping cart, and user authentication.',
                image: '/kama.png',
                tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
                githubLink: 'https://github.com/Badboixixi77/kama-main.git',
                liveLink: 'https://kama-main.vercel.app'
              },
              {
                title: 'BuySome',
                description: 'An e-commerce application with a focus on user experience, featuring product filtering, search functionality, and responsive design.',
                image: '/buysome.png',
                tags: ['Next.js', 'Tailwind CSS', 'JavaScript'],
                githubLink: 'https://github.com/Badboixixi77/buysome.git',
                liveLink: 'https://buysome.vercel.app'
              },
              {
                title: 'SWK',
                description: 'A web application showcasing modern design principles and interactive features, built with Next.js and Tailwind CSS.',
                image: '/vercel.svg',
                tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
                githubLink: 'https://github.com/Badboixixi77/swk.git',
                liveLink: 'https://swk.vercel.app'
              },
            ].map((project, index) => (
              <div key={index} className="card p-4 group">
                <div className="relative h-40 mb-3 overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-dark-400 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="skill-badge text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/Badboixixi77"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary text-sm flex-1 text-center"
                  >
                    View Code
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary text-sm flex-1 text-center"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="glass-card p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-dark-800/50 border border-dark-700/50 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-dark-800/50 border border-dark-700/50 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 rounded-lg bg-dark-800/50 border border-dark-700/50 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary flex-1"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="btn btn-secondary flex-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <SocialLinks />
            <p className="mt-4 text-gray-400 text-sm">
              © {new Date().getFullYear()} Maxwell. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </motion.button>
    </div>
  );
}
