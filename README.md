# Rishi Bakshi - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and TailwindCSS to showcase my projects, skills, and experience.

![Portfolio Preview](./public/preview.png)

## 🌟 Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Interactive UI**: Smooth animations and transitions using Framer Motion
- **Project Showcase**: Featured projects with detailed descriptions
- **Skills Section**: Categorized skills with visual representations
- **Contact Form**: Integrated contact form with EmailJS
- **SEO Optimized**: Built with best practices for search engine optimization

## 🚀 Technologies Used

- **Frontend**:
  - React.js
  - Vite
  - TailwindCSS
  - Framer Motion
  - React Icons
  - React Router DOM

- **Backend**:
  - EmailJS for contact form

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Loser7908/rishi-portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd rishi-portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🛠️ Configuration

1. **EmailJS Setup**:
   - Create an account on [EmailJS](https://www.emailjs.com/)
   - Get your User ID and Template ID
   - Update the configuration in `src/components/Contact.jsx`

2. **Project Images**:
   - Add your project images to the `public/projects` directory
   - Update image paths in `src/components/Projects.jsx`

3. **Skills Icons**:
   - Add skill icons to the `public/skills` directory
   - Update icon paths in `src/components/Skills.jsx`

## 📝 Customization

1. **Personal Information**:
   - Update personal details in respective components
   - Modify the content in `src/components/Home.jsx`
   - Update about section in `src/components/About.jsx`

2. **Projects**:
   - Add your projects in `src/components/Projects.jsx`
   - Update project details, links, and technologies

3. **Skills**:
   - Modify skills in `src/components/Skills.jsx`
   - Add or remove skill categories as needed

4. **Styling**:
   - Customize colors in `tailwind.config.js`
   - Modify animations in respective components
   - Update theme colors in `src/context/ThemeContext.jsx`

## 🏗️ Project Structure

```
rishi-portfolio/
├── public/
│   ├── projects/     # Project images
│   └── skills/       # Skill icons
├── src/
│   ├── components/   # React components
│   ├── context/      # Context providers
│   ├── assets/       # Static assets
│   ├── App.jsx       # Main App component
│   └── main.jsx      # Entry point
├── index.html
├── package.json
└── README.md
```

## 🚀 Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to your preferred hosting service:
   - Vercel
   - Netlify
   - GitHub Pages
   - Firebase Hosting

## 📱 Contact

- **Email**: rishibakshi1234@gmail.com
- **LinkedIn**: [Rishi Bakshi](https://www.linkedin.com/in/rishi-bakshi-64930a202/)
- **GitHub**: [Loser7908](https://github.com/Loser7908)
- **Twitter**: [@RishiBakshi123](https://twitter.com/RishiBakshi123)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [EmailJS](https://www.emailjs.com/)
