'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiSmartphone } from 'react-icons/fi';

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl animate-float">About Me</h1>
              <p className="text-dark-400">
                I'm a passionate Frontend Developer with a strong focus on creating beautiful,
                responsive, and user-friendly web applications. My journey in web development
                started with a curiosity about how websites work, and it has grown into a
                deep passion for creating exceptional digital experiences.
              </p>
              <p className="text-dark-400">
                I specialize in modern frontend technologies like React, Next.js, and TypeScript,
                and I'm always eager to learn new technologies and best practices. I believe
                in writing clean, maintainable code and creating intuitive user interfaces
                that make a difference.
              </p>
            </div>
            <div className="relative h-64 md:h-80">
              <Image
                src="/about.jpg"
                alt="About Me"
                fill
                className="object-cover rounded-xl shadow-lg glass-card"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          className="text-center mb-12"
          >
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          <p className="text-gray-400 text-lg">Frontend Developer & UI/UX Enthusiast</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">My Journey</h2>
            <p className="text-gray-300 mb-6">
              I'm a passionate Frontend Developer specializing in creating beautiful, responsive, and user-friendly web applications.
              My journey in web development began with a fascination for creating intuitive user interfaces and
              bringing designs to life through code.
            </p>
            <p className="text-gray-300 mb-6">
              I specialize in modern frontend technologies like React, Next.js, and TypeScript, focusing on
              building performant and accessible web applications. My work emphasizes clean code, responsive design,
              and exceptional user experiences.
            </p>
            <p className="text-gray-300">
              When I'm not coding, I'm exploring new frontend technologies, learning about UI/UX best practices,
              or contributing to the frontend development community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            >
            <h2 className="text-2xl font-semibold text-white mb-4">My Expertise</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <FiCode className="h-6 w-6 text-indigo-500" />
              </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Modern Frontend</h3>
                  <p className="mt-1 text-gray-300">
                    Specializing in React, Next.js, and TypeScript to build modern, maintainable,
                    and scalable frontend applications.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <FiLayout className="h-6 w-6 text-indigo-500" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Responsive Design</h3>
                  <p className="mt-1 text-gray-300">
                    Creating fluid layouts that work seamlessly across all devices, from mobile to desktop,
                    ensuring optimal user experience everywhere.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <FiSmartphone className="h-6 w-6 text-indigo-500" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">UI/UX Focus</h3>
                  <p className="mt-1 text-gray-300">
                    Building intuitive and engaging user interfaces that prioritize accessibility,
                    performance, and user satisfaction.
                  </p>
                </div>
              </div>
            </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 