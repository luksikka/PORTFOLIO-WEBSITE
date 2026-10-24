# Mr. Shalashian - DEO Portfolio Website

A professional, modern portfolio website for Mr. Shalashian (Data Entry Operator) built with React, featuring stunning 3D animations, glassmorphism effects, and smooth interactions.

## 🌟 Features

- **3D Animations**: Interactive Three.js sphere with smooth animations
- **Modern Design**: Glassmorphism effects, gradient accents, and purple theme
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations**: Framer Motion for fluid page transitions
- **Custom Cursor**: Interactive cursor glow effect
- **Particles Background**: Animated particle system with connections
- **Professional Sections**:
  - Hero with 3D animations
  - About Me with statistics
  - Skills showcase with progress bars
  - Services offered
  - Projects portfolio with filtering
  - Client testimonials
  - Contact form
  - Professional footer

## 🛠️ Technologies Used

- **React** - UI framework
- **Vite** - Build tool for fast development
- **Three.js & React Three Fiber** - 3D graphics
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll animations
- **CSS3** - Modern styling with animations

## 📦 Installation

1. **Install Node.js** (if not already installed)
   - Download from: https://nodejs.org/

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Colors
Edit the color variables in `src/index.css`:
```css
:root {
  --primary-purple: #8b5cf6;
  --secondary-purple: #6d28d9;
  --dark-bg: #0a0118;
  --darker-bg: #050011;
}
```

### Content
- **Personal Information**: Update details in `src/components/Hero.jsx`, `About.jsx`, and `Contact.jsx`
- **Skills**: Modify skills data in `src/components/Skills.jsx`
- **Projects**: Update projects array in `src/components/Projects.jsx`
- **Services**: Edit services in `src/components/Services.jsx`
- **Testimonials**: Change testimonials in `src/components/Testimonials.jsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🚀 Performance Features

- Lazy loading for smooth animations
- Optimized 3D rendering
- Efficient particle system
- CSS animations for better performance
- Code splitting with Vite

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available for personal and commercial use.

## 👨‍💻 Developer

Created with ❤️ by Kiro AI for Mr. Shalashian

---

## 🎯 Quick Start Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📧 Contact

For any queries or customization requests, please reach out through the contact form on the website.
