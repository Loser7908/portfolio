import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

const Layout = ({ children }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <AnimatedBackground />
      
      <motion.nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-primary-light/80 dark:bg-primary-dark/80 backdrop-blur-lg shadow-lg border-b border-tertiary-light/10 dark:border-tertiary-dark/10' 
            : 'bg-transparent'
        }`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="flex items-center space-x-2">
                <motion.span 
                  className="text-2xl font-bold bg-gradient-to-r from-secondary-light to-secondary-dark dark:from-secondary-dark dark:to-secondary-light bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  RB
                </motion.span>
                <span className="text-tertiary-light dark:text-tertiary-dark text-sm">Portfolio</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.path}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={link.path}
                      className={`nav-link relative group ${
                        location.pathname === link.path ? 'text-secondary-light dark:text-secondary-dark' : ''
                      }`}
                    >
                      {link.label}
                      <motion.span 
                        className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary-light dark:bg-secondary-dark transition-all duration-300 group-hover:w-full ${
                          location.pathname === link.path ? 'w-full' : ''
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: location.pathname === link.path ? '100%' : '0%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  onClick={toggleTheme}
                  className="theme-toggle p-2 rounded-full"
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isDarkMode ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
                </motion.button>
              </div>
            </div>

            {/* Mobile menu button */}
            <motion.div 
              className="md:hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-light-light dark:text-light-dark hover:text-secondary-light dark:hover:text-secondary-dark p-2 rounded-md"
              >
                {isMobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden mobile-menu"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="px-4 pt-2 pb-3 space-y-2">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.path}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-300 ${
                        location.pathname === link.path
                          ? 'bg-secondary-light/20 dark:bg-secondary-dark/20 text-secondary-light dark:text-secondary-dark'
                          : 'text-light-light dark:text-light-dark hover:bg-tertiary-light/10 dark:hover:bg-tertiary-dark/10'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  onClick={toggleTheme}
                  className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-light-light dark:text-light-dark hover:bg-tertiary-light/10 dark:hover:bg-tertiary-dark/10 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <motion.main 
        className="flex-grow pt-20 relative z-10"
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.main>

      <motion.footer 
        className="bg-primary-light/80 dark:bg-primary-dark/80 py-8 backdrop-blur-sm border-t border-tertiary-light/10 dark:border-tertiary-dark/10 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            {[
              { icon: FaGithub, url: "https://github.com/yourusername" },
              { icon: FaLinkedin, url: "https://linkedin.com/in/yourusername" },
              { icon: FaTwitter, url: "https://twitter.com/yourusername" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-light dark:text-light-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </div>
          <motion.div 
            className="mt-8 text-center text-tertiary-light dark:text-tertiary-dark text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Rishi Bakshi. All rights reserved.
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Layout; 