# Portfolio Website 🌐

<div align="center">
  
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)

</div>

<p align="center">A modern, responsive portfolio website showcasing professional skills, projects, and contact information. Built with cutting-edge technologies and featuring smooth animations for an engaging user experience.</p>

<div align="center">

[Features](#-features) •
[Technologies](#%EF%B8%8F-technologies-used) •
[Installation](#-installation--setup) •
[Structure](#-project-structure) •
[Customization](#-customization) •
[Deployment](#-deployment)

</div>

---

## ✨ Features

<table>
  <tr>
    <td>✅ <b>Modern UI Design</b></td>
    <td>Clean and professional interface with dark mode aesthetics</td>
  </tr>
  <tr>
    <td>✅ <b>Responsive Layout</b></td>
    <td>Perfect display on all devices (mobile, tablet, desktop)</td>
  </tr>
  <tr>
    <td>✅ <b>Interactive Elements</b></td>
    <td>
      • Smooth scroll navigation with scrollspy<br>
      • Animated project cards with hover effects<br>
      • Dynamic contact section with form validation<br>
      • Particle.js background effects
    </td>
  </tr>
  <tr>
    <td>✅ <b>Sections</b></td>
    <td>
      • Hero section with glowing text effects and CTA<br>
      • Skills showcase with technology stack and progress bars<br>
      • Project gallery with filterable categories and case studies<br>
      • Testimonials carousel<br>
      • Contact form with social media integration
    </td>
  </tr>
</table>

## 🛠️ Technologies Used

<div align="center">

| Frontend | Styling & Animation | Development | Deployment |
|:--------:|:------------------:|:-----------:|:----------:|
| React.js with Hooks | Tailwind CSS | Vite with HMR | Netlify with CI/CD |
| React Icons | Custom animations | ESLint | Netlify Forms |
| Heroicons | Framer Motion | PostCSS | |

</div>

## 🚀 Installation & Setup

<details>
<summary><b>Prerequisites</b></summary>
<br>
  
- Node.js (v16+)
- npm or yarn
</details>

<details>
<summary><b>Getting Started</b></summary>
<br>

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
</details>

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

<details>
<summary><b>Personal Information</b></summary>
<br>
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
</details>

## 🌐 Deployment

<div align="center">
  
📤 **Deployed with Netlify** 📤

</div>

The portfolio is deployed using Netlify. To deploy your own:

1. Push to GitHub repository
2. Connect repository to Netlify
3. Configure build settings:
   - Build command: `npm run build` or `yarn build`
   - Publish directory: `dist`
   - Environment variables (if any)
4. Enable Netlify Forms in `index.html`
5. Deploy!

<details>
<summary><b>Continuous Deployment</b></summary>
<br>

Enable automatic deployments by configuring Netlify to:
- Deploy preview branches
- Auto-publish on merge to main branch
- Run build checks before deployment
</details>



## 🙏 Acknowledgments

<div align="center">
  
- Icons provided by [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Inspired by modern design trends and developer portfolios

</div>

---

<div align="center">
  <p>⭐ Star this repo if you found it useful! ⭐</p>
</div>
