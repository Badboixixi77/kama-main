'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Newsletter from '@/components/Newsletter';
import SocialLinks from '@/components/SocialLinks';
import Toast from '@/components/Toast';
import Image from 'next/image';

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
                I create beautiful, responsive, and user-friendly web applications
                using modern technologies.
              </p>
              <div className="flex gap-3">
                <button className="btn btn-primary text-sm">View Projects</button>
                <button className="btn btn-secondary text-sm">Contact Me</button>
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
              <h3 className="text-lg font-semibold mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-1.5">
                <span className="skill-badge text-xs">React</span>
                <span className="skill-badge text-xs">Next.js</span>
                <span className="skill-badge text-xs">TypeScript</span>
                <span className="skill-badge text-xs">Tailwind CSS</span>
              </div>
            </div>
            <div className="card p-4">
              <h3 className="text-lg font-semibold mb-3">Backend</h3>
              <div className="flex flex-wrap gap-1.5">
                <span className="skill-badge text-xs">Node.js</span>
                <span className="skill-badge text-xs">Express</span>
                <span className="skill-badge text-xs">MongoDB</span>
                <span className="skill-badge text-xs">PostgreSQL</span>
              </div>
            </div>
            <div className="card p-4">
              <h3 className="text-lg font-semibold mb-3">Tools</h3>
              <div className="flex flex-wrap gap-1.5">
                <span className="skill-badge text-xs">Git</span>
                <span className="skill-badge text-xs">VS Code</span>
                <span className="skill-badge text-xs">Figma</span>
                <span className="skill-badge text-xs">Docker</span>
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
                title: 'E-commerce Platform',
                description: 'A full-featured e-commerce platform with product management, cart functionality, and user authentication.',
                image: '/project1.jpg',
                tags: ['React', 'Node.js', 'MongoDB'],
              },
              {
                title: 'Task Management App',
                description: 'A collaborative task management application with real-time updates and team features.',
                image: '/project2.jpg',
                tags: ['Next.js', 'TypeScript', 'Firebase'],
              },
              {
                title: 'Portfolio Website',
                description: 'A modern portfolio website showcasing projects and skills with smooth animations.',
                image: '/project3.jpg',
                tags: ['React', 'Tailwind CSS', 'Framer Motion'],
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
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="skill-badge text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-center mb-8">Get in Touch</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent"
                  rows={3}
                  placeholder="Your message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

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
