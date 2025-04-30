import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import profileImage from '../assets/profile.jpg';

const Home = () => {
  const { isDarkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 1,
      },
    },
    hover: {
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };


  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-light/10 dark:from-primary-dark/10 to-transparent" />
        <motion.div 
          className="absolute top-0 right-0 w-1/2 h-1/2 bg-secondary-light/5 dark:bg-secondary-dark/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary-light/5 dark:bg-secondary-dark/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left column - Text content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h1 
              variants={itemVariants}
              className={`text-5xl md:text-6xl font-bold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Hi, I'm <span className="text-primary">Rishi Bakshi</span>
            </motion.h1>
            
            <motion.h2 
              variants={itemVariants}
              className={`text-2xl md:text-3xl font-semibold ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Full Stack Developer
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className={`text-lg ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              I build exceptional digital experiences that are fast, accessible, and visually appealing.
            </motion.p>
            
            <motion.div 
              variants={socialVariants}
              className="flex space-x-4"
            >
              <motion.a
                href="https://github.com/Loser7908"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialVariants}
                whileHover="hover"
                className={`p-3 rounded-full ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-gray-100 hover:bg-gray-200'
                } transition-colors`}
              >
                <FaGithub className="text-2xl" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/rishi-bakshi-64930a202/"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialVariants}
                whileHover="hover"
                className={`p-3 rounded-full ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-gray-100 hover:bg-gray-200'
                } transition-colors`}
              >
                <FaLinkedin className="text-2xl" />
              </motion.a>
              <motion.a
                href="https://twitter.com/RishiBakshi123"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialVariants}
                whileHover="hover"
                className={`p-3 rounded-full ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-gray-100 hover:bg-gray-200'
                } transition-colors`}
              >
                <FaTwitter className="text-2xl" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right column - Photo */}
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            className="relative"
          >
            <div className={`absolute inset-0 rounded-full ${
              isDarkMode ? 'bg-primary/20' : 'bg-primary/10'
            } blur-3xl`} />
            <motion.img
              src={profileImage}
              alt="Rishi Bakshi"
              className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-primary"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-primary"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default Home; 