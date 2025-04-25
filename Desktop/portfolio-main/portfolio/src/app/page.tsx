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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl animate-float">Maxwell Okosun</h1>
              <h2 className="text-xl text-gray-600 dark:text-gray-300">
                Frontend Developer & UI/UX Enthusiast
              </h2>
              <p className="text-base">
                I specialize in creating beautiful, responsive, and user-friendly web applications
                using modern frontend technologies like React, Next.js, and TypeScript. I focus on building
                intuitive interfaces and delivering exceptional user experiences.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Badboixixi77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-sm"
                >
                  GitHub
                </a>
                <button 
                  onClick={() => setShowContactForm(true)}
                  className="btn btn-secondary text-sm"
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className="relative h-64 md:h-80">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover rounded-xl shadow-lg"
                priority
              />
            </div>
          </div>
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
      <section className="section bg-gray-50 dark:bg-gray-800">
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
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
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
                    GitHub Profile
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Contact Me</h2>
              <button
                onClick={() => setShowContactForm(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>
                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                className="w-full btn btn-primary"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

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
