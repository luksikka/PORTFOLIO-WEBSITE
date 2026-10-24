# 🚀 Quick Setup Guide - Mr. Shalashian Portfolio

## ⚡ Quick Start (3 Steps)

### 1. Open Terminal
Open PowerShell or Command Prompt in this folder

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open Browser
The website will automatically open at: **http://localhost:3000**

---

## 📝 Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🎨 Customization Guide

### Change Personal Information

#### 1. Hero Section (Landing Page)
File: `src/components/Hero.jsx`
- Line 44: Change name "Mr. Shalashian"
- Line 51: Change role/title
- Line 57: Change description

#### 2. About Section
File: `src/components/About.jsx`
- Line 28-37: Update statistics (years, projects, clients)
- Line 77-81: Update description paragraphs
- Line 84-91: Update skills list

#### 3. Contact Information
File: `src/components/Contact.jsx`
- Line 25-38: Update email, phone, location

### Change Colors

File: `src/index.css` (Lines 10-17)
```css
:root {
  --primary-purple: #8b5cf6;     /* Main purple color */
  --secondary-purple: #6d28d9;   /* Darker purple */
  --dark-bg: #0a0118;            /* Background color */
  --accent-gold: #fbbf24;        /* Accent color */
}
```

### Update Skills

File: `src/components/Skills.jsx` (Line 14-50)
- Modify typing speed, accuracy percentages
- Add/remove software proficiency
- Update skill categories

### Update Projects

File: `src/components/Projects.jsx` (Line 19-65)
- Change project titles and descriptions
- Update statistics (records, accuracy, duration)
- Modify technologies used

### Update Services

File: `src/components/Services.jsx` (Line 14-64)
- Edit service titles and descriptions
- Update service features
- Add new services

### Update Testimonials

File: `src/components/Testimonials.jsx` (Line 14-52)
- Change client names and roles
- Update testimonial text
- Modify ratings

---

## 🌐 Deployment Options

### Option 1: Netlify (Easiest)
1. Build the project: `npm run build`
2. Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Done! Your site is live

### Option 2: Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Option 3: GitHub Pages
1. Install gh-pages: `npm install -g gh-pages`
2. Build: `npm run build`
3. Deploy: `gh-pages -d dist`

---

## 🎯 Features Included

✅ Responsive design (mobile, tablet, desktop)
✅ 3D animations with Three.js
✅ Smooth scroll animations
✅ Custom cursor effect
✅ Animated background particles
✅ Glassmorphism design
✅ Interactive navigation
✅ Contact form
✅ Projects portfolio with filtering
✅ Skills showcase with progress bars
✅ Client testimonials
✅ Professional footer

---

## 🔧 Troubleshooting

### Issue: npm not found
**Solution**: Install Node.js from https://nodejs.org/

### Issue: Port 3000 already in use
**Solution**: The project will automatically use the next available port (3001, 3002, etc.)

### Issue: Blank white screen
**Solution**: 
1. Clear browser cache
2. Check console for errors (F12)
3. Run: `npm install` again

### Issue: 3D sphere not showing
**Solution**: Update your browser to the latest version (Chrome, Firefox, Edge)

---

## 📱 Testing on Mobile

1. Find your computer's IP address:
   - Windows: Run `ipconfig` in terminal, look for IPv4
   - Mac/Linux: Run `ifconfig`

2. Start dev server: `npm run dev`

3. On mobile browser, go to: `http://YOUR-IP:3000`
   - Example: `http://192.168.1.100:3000`

---

## 💡 Tips

- **Hot Reload**: Changes are automatically reflected in browser
- **Component Structure**: Each section is a separate component in `src/components/`
- **Styling**: Each component has its own CSS file
- **Icons**: Using React Icons library (add more from https://react-icons.github.io/react-icons/)

---

## 📧 Need Help?

For customization help or issues:
1. Check browser console (F12) for errors
2. Review component files in `src/components/`
3. Check the main README.md for detailed documentation

---

## 🎉 You're All Set!

Run `npm run dev` and start customizing your portfolio!
