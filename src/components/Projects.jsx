import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
  const { isDarkMode } = useTheme();
  const [showFeatured, setShowFeatured] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const projects = [
    {
      title: 'Minati: Clothing Selling Application',
      description: 'Developed a full-stack clothing selling application with admin panel, real-time inventory updates, and secure authentication.',
      image: '/projects/minati.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Admin Panel', 'Real-time Updates'],
      github: 'https://github.com/Loser7908/Minati',
      live: '#',
      featured: true
    },
    {
      title: 'FitBit Web Application',
      description: 'A web application to track fitness metrics with real-time analytics and user-friendly interface.',
      image: '/projects/fitbit.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Real-time Analytics'],
      github: 'https://github.com/Loser7908/FitBitApp',
      live: '#',
      featured: true
    },
    {
      title: 'Heart Disease Prediction Model',
      description: 'Machine learning model with 92% accuracy for heart disease prediction, deployed as an API and Android app.',
      image: '/projects/heart-disease.jpg',
      technologies: ['Python', 'Flask', 'Machine Learning', 'Android', 'Heroku'],
      github: 'https://github.com/Loser7908/Heart-Disease-Prediction-App',
      live: '#',
      featured: true
    }
  ];

  const handleImageError = (projectTitle) => {
    setImageErrors(prev => ({ ...prev, [projectTitle]: true }));
  };

  const filteredProjects = showFeatured
    ? projects.filter(project => project.featured)
    : projects;

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <motion.h2 
              className="text-4xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              My Projects
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-primary mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-4"
          >
            <motion.button
              onClick={() => setShowFeatured(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full ${
                !showFeatured
                  ? 'bg-primary text-white'
                  : isDarkMode
                    ? 'bg-gray-800 text-gray-300'
                    : 'bg-gray-100 text-gray-600'
              } transition-colors`}
            >
              All Projects
            </motion.button>
            <motion.button
              onClick={() => setShowFeatured(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full ${
                showFeatured
                  ? 'bg-primary text-white'
                  : isDarkMode
                    ? 'bg-gray-800 text-gray-300'
                    : 'bg-gray-100 text-gray-600'
              } transition-colors`}
            >
              Featured
            </motion.button>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className={`rounded-lg overflow-hidden ${
                  isDarkMode 
                    ? 'bg-gray-800/50 backdrop-blur-sm' 
                    : 'bg-white/50 backdrop-blur-sm'
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  {!imageErrors[project.title] ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(project.title)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                      <FaCode className="text-6xl text-primary" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <motion.h3 
                    className={`text-xl font-semibold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className={`mb-4 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {project.description}
                  </motion.p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 rounded-full text-sm ${
                          isDarkMode
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 rounded-full ${
                        isDarkMode
                          ? 'bg-gray-700 hover:bg-gray-600'
                          : 'bg-gray-100 hover:bg-gray-200'
                      } transition-colors`}
                    >
                      <FaGithub className="text-xl" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 rounded-full ${
                        isDarkMode
                          ? 'bg-gray-700 hover:bg-gray-600'
                          : 'bg-gray-100 hover:bg-gray-200'
                      } transition-colors`}
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <motion.a
              href="https://github.com/Loser7908"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-block px-6 py-3 rounded-lg font-semibold ${
                isDarkMode
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-gray-100 hover:bg-gray-200'
              } transition-colors`}
            >
              View More on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 