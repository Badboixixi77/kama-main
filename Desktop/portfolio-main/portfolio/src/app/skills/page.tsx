'use client';

import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiSmartphone, FiGlobe } from 'react-icons/fi';

const skills = [
  {
    category: 'Frontend Development',
    icon: <FiCode className="h-6 w-6 text-indigo-500" />,
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 90 },
    ],
  },
  {
    category: 'UI/UX Design',
    icon: <FiLayout className="h-6 w-6 text-indigo-500" />,
    skills: [
      { name: 'Responsive Design', level: 90 },
      { name: 'Figma', level: 85 },
      { name: 'Accessibility', level: 80 },
      { name: 'User Testing', level: 75 },
      { name: 'Wireframing', level: 80 },
    ],
  },
  {
    category: 'Development Tools',
    icon: <FiSmartphone className="h-6 w-6 text-indigo-500" />,
    skills: [
      { name: 'Git', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Chrome DevTools', level: 85 },
      { name: 'npm', level: 85 },
      { name: 'Vercel', level: 80 },
    ],
  },
  {
    category: 'Other Skills',
    icon: <FiGlobe className="h-6 w-6 text-indigo-500" />,
    skills: [
      { name: 'Problem Solving', level: 90 },
      { name: 'Team Collaboration', level: 85 },
      { name: 'Technical Writing', level: 80 },
      { name: 'Agile Methodologies', level: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h1>
          <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  {category.icon}
                </div>
                <h2 className="ml-3 text-xl font-semibold text-white">
                  {category.category}
                </h2>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-indigo-500 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 