import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { isDarkMode } = useTheme();

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

  const education = [
    {
      year: "2020 - 2024",
      degree: "Bachelor of Technology in Computer Science",
      institution: "Techno India University",
      details: "Specialized in Software Development and Machine Learning"
    },
    {
      year: "2018 - 2019",
      degree: "Higher Secondary Education",
      institution: "Chhatna Chandidas vidyapith",
      details: "Science Stream with Computer Science"
    }
  ];

  return (
    <section id="about" className="py-20">
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
              About Me
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-primary mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-lg ${
                isDarkMode 
                  ? 'bg-gray-800/50 backdrop-blur-sm' 
                  : 'bg-white/50 backdrop-blur-sm'
              }`}
            >
              <motion.p 
                variants={itemVariants}
                className={`text-lg leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                I'm a passionate Full Stack Developer with a strong foundation in web development.
                I specialize in creating modern, responsive, and user-friendly applications using
                the latest technologies and best practices.
              </motion.p>
              <motion.p 
                variants={itemVariants}
                className={`mt-4 text-lg leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                With a keen eye for design and a focus on performance, I strive to build
                applications that not only look great but also provide an exceptional user
                experience.
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { title: 'Experience', value: '1+ Years' },
                { title: 'Projects', value: '5+' },
                { title: 'Clients', value: '5+' },
                { title: 'Certifications', value: '5+' },
              ].map((stat, index) => (
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
                  <motion.h3 
                    className={`text-3xl font-bold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {stat.value}
                  </motion.h3>
                  <motion.p 
                    className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {stat.title}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className={`mt-12 p-8 rounded-lg ${
              isDarkMode 
                ? 'bg-gray-800/50 backdrop-blur-sm' 
                : 'bg-white/50 backdrop-blur-sm'
            }`}
          >
            <motion.h3 
              className={`text-2xl font-semibold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              What I Do
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Frontend Development',
                  description: 'Creating beautiful and responsive user interfaces using React, TailwindCSS, and modern JavaScript.'
                },
                {
                  title: 'Backend Development',
                  description: 'Building robust and scalable server-side applications with Node.js, Express, and various databases.'
                },
                {
                  title: 'Full Stack Solutions',
                  description: 'Developing end-to-end web applications with a focus on performance, security, and user experience.'
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className={`p-6 rounded-lg ${
                    isDarkMode 
                      ? 'bg-gray-800/50 backdrop-blur-sm' 
                      : 'bg-white/50 backdrop-blur-sm'
                  }`}
                >
                  <motion.h4 
                    className={`text-xl font-semibold mb-4 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {service.title}
                  </motion.h4>
                  <motion.p 
                    className={`${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {service.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className={`mt-12 p-8 rounded-lg ${
              isDarkMode 
                ? 'bg-gray-800/50 backdrop-blur-sm' 
                : 'bg-white/50 backdrop-blur-sm'
            }`}
          >
            <motion.h3 
              className={`text-2xl font-semibold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Education
            </motion.h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className={`p-6 rounded-lg ${
                    isDarkMode 
                      ? 'bg-gray-800/50 backdrop-blur-sm' 
                      : 'bg-white/50 backdrop-blur-sm'
                  }`}
                >
                  <motion.div 
                    className="text-secondary font-semibold"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.year}
                  </motion.div>
                  <motion.h4 
                    className="text-light font-bold"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.degree}
                  </motion.h4>
                  <motion.div 
                    className="text-tertiary"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.institution}
                  </motion.div>
                  <motion.p 
                    className="text-tertiary mt-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.details}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 