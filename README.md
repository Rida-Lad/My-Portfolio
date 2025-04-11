# Portfolio Website 🌐

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)

A modern, responsive portfolio website showcasing professional skills, projects, and contact information. Built with cutting-edge technologies and featuring smooth animations for an engaging user experience.

## ✨ Features

- **Modern UI Design**: Clean and professional interface with dark mode aesthetics
- **Responsive Layout**: Perfect display on all devices (mobile, tablet, desktop)
- **Interactive Elements**:
  - Smooth scroll navigation with scrollspy
  - Animated project cards with hover effects
  - Dynamic contact section with form validation
  - Particle.js background effects
- **Sections**:
  - Hero section with glowing text effects and CTA
  - Skills showcase with technology stack and progress bars
  - Project gallery with filterable categories and case studies
  - Testimonials carousel
  - Contact form with social media integration

## 🛠️ Technologies Used

- **Frontend Framework**: React.js with Hooks
- **Styling**: Tailwind CSS with custom animations
- **Icons**: React Icons & Heroicons
- **Animation**: Framer Motion
- **Build Tool**: Vite with HMR
- **Deployment**: Netlify with CI/CD integration
- **Form Handling**: Netlify Forms

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Rida-Lad/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser:
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/     # Reusable components
│   ├── data/           # Project data files
│   ├── pages/          # Page components
│   ├── App.jsx         # Main application
│   └── main.jsx        # Entry point
├── .eslintrc.js        # ESLint configuration
├── .gitignore          # Git ignore file
├── index.html          # HTML template
├── package.json        # Project dependencies
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind configuration
└── vite.config.js      # Vite configuration
```

## 🎨 Customization

### Personal Information
To personalize the portfolio with your own information:

1. Update project data in `/src/data/projects.js`:
   ```javascript
   export const projects = [
     {
       id: 1,
       title: "Project Name",
       description: "Project description goes here...",
       technologies: ["React", "Node.js", "MongoDB"],
       image: "/assets/images/project1.jpg",
       demoLink: "https://project-demo.com",
       githubLink: "https://github.com/yourusername/project",
       featured: true,
       category: "web",
     },
     // Add more projects...
   ];
   ```


2. Replace social links in `/src/components/sections/ContactSection.jsx`

## 🌐 Deployment

The portfolio is deployed using Netlify. To deploy your own:

1. Push to GitHub repository
2. Connect repository to Netlify
3. Configure build settings:
   - Build command: `npm run build` or `yarn build`
   - Publish directory: `dist`
   - Environment variables (if any)
4. Enable Netlify Forms in `index.html`
5. Deploy!

### Continuous Deployment

Enable automatic deployments by configuring Netlify to:
- Deploy preview branches
- Auto-publish on merge to main branch
- Run build checks before deployment

## 🔧 Performance Optimization

- Images are optimized and lazy-loaded
- Code splitting implemented with React.lazy()
- Critical CSS inlined for faster initial load
- PWA ready with service worker support


## 🙏 Acknowledgments

- Icons provided by [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Inspired by modern design trends and developer portfolios

---

<div align="center">
  <p>⭐ Star this repo if you found it useful! ⭐</p>
</div>
