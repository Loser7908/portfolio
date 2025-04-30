import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { isDarkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const [imageErrors, setImageErrors] = useState({});

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const skills = {
    'Frontend': [
      { name: 'React', icon: '/skills/react.svg' },
      { name: 'JavaScript', icon: '/skills/javascript.svg' },
      { name: 'HTML5', icon: '/skills/html5.svg' },
      { name: 'CSS3', icon: '/skills/css3.svg' },
      { name: 'TailwindCSS', icon: '/skills/tailwindcss.svg' },
    ],
    'Backend': [
      { name: 'Node.js', icon: '/skills/nodejs.svg' },
      { name: 'Express', icon: '/skills/express.svg' },
      { name: 'MongoDB', icon: '/skills/mongodb.svg' },
      { name: 'PostgreSQL', icon: '/skills/postgresql.svg' },
    ],
    'Tools & Others': [
      { name: 'Git', icon: '/skills/git.svg' },
      { name: 'GitHub', icon: '/skills/github.svg' },
      { name: 'VS Code', icon: '/skills/vscode.svg' },
      { name: 'Figma', icon: '/skills/figma.svg' },
      { name: 'Docker', icon: '/skills/docker.svg' },
      { name: 'Ansible', icon: '/skills/ansible.svg' },
      { name: 'Jenkins', icon: '/skills/jenkins.svg' },
    ]
  };

  const handleImageError = (skillName) => {
    setImageErrors(prev => ({ ...prev, [skillName]: true }));
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-4"
          >
            {Object.keys(skills).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : isDarkMode
                      ? 'bg-gray-800 text-gray-300'
                      : 'bg-gray-100 text-gray-600'
                } transition-colors`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {skills[activeCategory].map((skill, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className={`p-6 rounded-lg text-center ${
                  isDarkMode 
                    ? 'bg-gray-800/50 backdrop-blur-sm' 
                    : 'bg-white/50 backdrop-blur-sm'
                }`}
              >
                {!imageErrors[skill.name] ? (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16 mx-auto mb-4"
                    onError={() => handleImageError(skill.name)}
                  />
                ) : (
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                    {skill.name[0]}
                  </div>
                )}
                <h3 className={`text-lg font-semibold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 