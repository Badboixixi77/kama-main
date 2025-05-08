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
      { name: 'Adobe Premiere Pro', level: 85 },
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
    <div className="min-h-screen">
      <section className="section">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl text-center mb-12 animate-float">Skills & Expertise</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <h2 className="text-xl font-semibold mb-4">{category.category}</h2>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="skill-badge"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 