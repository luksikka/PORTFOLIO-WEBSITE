# 🇮🇳 தமிழ் வழிகாட்டி - Portfolio Website

## 🚀 விரைவாக தொடங்குவது எப்படி?

### 1. Terminal-ஐ திறக்கவும்
இந்த folder-ல் PowerShell அல்லது Command Prompt-ஐ திறக்கவும்

### 2. Server-ஐ Start செய்யவும்
```bash
npm run dev
```

### 3. Browser-ஐ திறக்கவும்
Website தானாகவே திறக்கும்: **http://localhost:3000**

---

## ✏️ தனிப்பட்ட விவரங்களை மாற்றுவது எப்படி?

### 📝 பெயரை மாற்ற:
**File**: `src/components/Hero.jsx`
**Line 44-ல்**: `Mr. Shalashian` என்பதை உங்கள் பெயருக்கு மாற்றவும்

```javascript
<h1 className="name gradient-text">
  உங்கள் பெயர்  // இங்கே மாற்றவும்
</h1>
```

### 📧 Email மாற்ற:
**File**: `src/components/Contact.jsx`
**Line 25-ல்**: Email address-ஐ மாற்றவும்

```javascript
value: 'your-email@gmail.com',  // இங்கே மாற்றவும்
```

### 📱 Phone Number மாற்ற:
**File**: `src/components/Contact.jsx`
**Line 30-ல்**: Phone number-ஐ மாற்றவும்

```javascript
value: '+91 98765 43210',  // இங்கே மாற்றவும்
```

### 📍 Location மாற்ற:
**File**: `src/components/Contact.jsx`
**Line 35-ல்**: Location-ஐ மாற்றவும்

```javascript
value: 'Chennai, Tamil Nadu',  // இங்கே மாற்றவும்
```

---

## 🎨 Colors மாற்றுவது எப்படி?

**File**: `src/index.css`
**Lines 10-17-ல்**:

```css
:root {
  --primary-purple: #8b5cf6;     /* முதன்மை நிறம் */
  --secondary-purple: #6d28d9;   /* இரண்டாம் நிறம் */
  --dark-bg: #0a0118;            /* பின்புல நிறம் */
  --accent-gold: #fbbf24;        /* Accent நிறம் */
}
```

### நிறங்கள் மாற்ற:
1. Color picker-ல் நீங்கள் விரும்பும் நிறத்தை தேர்ந்தெடுக்கவும்
2. Hex code-ஐ (உ.ம்: #8b5cf6) copy செய்யவும்
3. மேலே உள்ள code-ல் paste செய்யவும்

---

## 💼 Skills-ஐ மாற்றுவது எப்படி?

**File**: `src/components/Skills.jsx`
**Lines 14-50-ல்**:

```javascript
{
  name: 'Typing Speed',    // திறமையின் பெயர்
  level: 95,               // சதவீதம் (0-100)
  wpm: '90+ WPM'          // விவரம்
}
```

### புதிய skill சேர்க்க:
```javascript
{ name: 'உங்கள் திறமை', level: 85, wpm: 'Expert' },
```

---

## 📂 Projects சேர்ப்பது எப்படி?

**File**: `src/components/Projects.jsx`
**Lines 19-65-ல்**:

```javascript
{
  id: 1,
  title: 'Project பெயர்',
  category: 'database',  // database, document, அல்லது analysis
  description: 'Project பற்றிய விளக்கம்',
  technologies: ['Excel', 'SQL', 'Data Validation'],
  stats: { 
    records: '50K+', 
    accuracy: '99.99%', 
    duration: '2 weeks' 
  }
}
```

---

## 🎤 Testimonials மாற்றுவது எப்படி?

**File**: `src/components/Testimonials.jsx`
**Lines 14-52-ல்**:

```javascript
{
  name: 'Client பெயர்',
  role: 'Client பதவி, Company பெயர்',
  image: 'SJ',  // Initials
  rating: 5,    // 1-5 stars
  text: 'Client-ன் கருத்து இங்கே எழுதவும்'
}
```

---

## 🛠️ Services மாற்றுவது எப்படி?

**File**: `src/components/Services.jsx`
**Lines 14-64-ல்**:

```javascript
{
  icon: FaKeyboard,  // Icon name
  title: 'Service பெயர்',
  description: 'Service பற்றிய விளக்கம்',
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3',
    'Feature 4'
  ]
}
```

---

## 📊 Statistics மாற்றுவது எப்படி?

**File**: `src/components/About.jsx`
**Lines 28-37-ல்**:

```javascript
const stats = [
  { icon: FaAward, value: '5+', label: 'Years Experience' },
  { icon: FaCheckCircle, value: '500+', label: 'Projects Completed' },
  { icon: FaUsers, value: '200+', label: 'Happy Clients' },
  { icon: FaClock, value: '99.9%', label: 'Accuracy Rate' },
];
```

உங்கள் எண்களை இங்கே மாற்றவும்.

---

## 📱 Social Media Links சேர்ப்பது எப்படி?

**File**: `src/components/Hero.jsx`
**Lines 96-101-ல்**:

```javascript
{ icon: FaLinkedin, href: 'https://linkedin.com/in/your-profile' },
{ icon: FaGithub, href: 'https://github.com/your-username' },
{ icon: FaTwitter, href: 'https://twitter.com/your-handle' },
{ icon: FaEnvelope, href: '#contact' }
```

உங்கள் social media URLs-ஐ இங்கே சேர்க்கவும்.

---

## 📝 About Section Text மாற்றுவது எப்படி?

**File**: `src/components/About.jsx`
**Lines 77-86-ல்**:

```javascript
<p className="about-description">
  உங்களைப் பற்றி இங்கே எழுதவும். உங்கள் அனுபவம், திறமைகள், 
  மற்றும் சாதனைகளை விளக்கவும்.
</p>
```

---

## 🌐 Website-ஐ Deploy செய்வது எப்படி?

### வழி 1: Netlify (மிகவும் எளிது)

1. **Build செய்யவும்**:
   ```bash
   npm run build
   ```

2. **Netlify-க்கு செல்லவும்**:
   - https://app.netlify.com/drop என்ற website-க்கு செல்லவும்

3. **Upload செய்யவும்**:
   - `dist` folder-ஐ drag செய்து drop செய்யவும்
   - முடிந்தது! உங்கள் website live ஆகிவிட்டது 🎉

### வழி 2: Vercel

```bash
npm install -g vercel
vercel login
vercel
```

---

## ⚙️ Commands விளக்கம்

```bash
# Development server start செய்ய
npm run dev

# Production build create செய்ய
npm run build

# Production build-ஐ preview செய்ய
npm run preview
```

---

## 🎨 Sections விளக்கம்

1. **Navbar** - மேல் navigation menu
2. **Hero** - Landing page with 3D animation
3. **About** - உங்களைப் பற்றிய விவரங்கள்
4. **Skills** - உங்கள் திறமைகள்
5. **Services** - நீங்கள் வழங்கும் services
6. **Projects** - உங்கள் projects showcase
7. **Testimonials** - Client reviews
8. **Contact** - Contact form மற்றும் info
9. **Footer** - கீழே உள்ள links மற்றும் info

---

## 🔧 பொதுவான சிக்கல்களும் தீர்வுகளும்

### சிக்கல்: npm கண்டுபிடிக்கப்படவில்லை
**தீர்வு**: Node.js install செய்யவும் - https://nodejs.org/

### சிக்கல்: Port 3000 ஏற்கனவே பயன்பாட்டில் உள்ளது
**தீர்வு**: தானாகவே அடுத்த port-ஐ பயன்படுத்தும் (3001, 3002, etc.)

### சிக்கல்: White screen மட்டும் காட்டுகிறது
**தீர்வு**: 
1. Browser console-ஐ திறந்து பாருங்கள் (F12)
2. `npm install` மீண்டும் run செய்யவும்

---

## 📱 Mobile-ல் Test செய்வது எப்படி?

1. **உங்கள் computer-ன் IP address கண்டுபிடிக்கவும்**:
   ```bash
   ipconfig
   ```
   IPv4 Address-ஐ பாருங்கள் (உ.ம்: 192.168.1.100)

2. **Dev server start செய்யவும்**:
   ```bash
   npm run dev
   ```

3. **Mobile browser-ல்**:
   `http://192.168.1.100:3000` என்று type செய்யவும்

---

## 📂 முக்கிய Files விளக்கம்

```
src/components/
├── Navbar.jsx      - மேல் navigation
├── Hero.jsx        - Landing page
├── About.jsx       - About section
├── Skills.jsx      - Skills showcase
├── Services.jsx    - Services offered
├── Projects.jsx    - Projects portfolio
├── Testimonials.jsx - Client reviews
├── Contact.jsx     - Contact form
└── Footer.jsx      - Footer section
```

---

## 🎯 முன்னுரிமை செயல்கள்

### முதலில் செய்ய வேண்டியவை:
1. ✅ `npm run dev` - Website-ஐ பாருங்கள்
2. ✅ பெயர் மாற்றவும்
3. ✅ Email மாற்றவும்
4. ✅ Phone number மாற்றவும்
5. ✅ Skills update செய்யவும்
6. ✅ Projects சேர்க்கவும்

### பிறகு செய்ய வேண்டியவை:
7. Colors மாற்றவும் (விரும்பினால்)
8. Services update செய்யவும்
9. Testimonials சேர்க்கவும்
10. Deploy செய்யவும்

---

## 💡 Tips

- **மாற்றங்கள் save செய்தவுடன் browser தானாக update ஆகும்**
- **ஒவ்வொரு section-உம் தனித்தனி file-ல் உள்ளது**
- **Colors-ஐ `index.css`-ல் மட்டும் மாற்றினால் போதும்**
- **Icons-ஐ React Icons website-லிருந்து சேர்க்கலாம்**

---

## 🎉 முடிவுரை

இந்த portfolio website:
- ✅ Professional design
- ✅ 3D animations
- ✅ Mobile responsive
- ✅ Deploy செய்ய ready
- ✅ Fully customizable

உங்கள் விவரங்களை மாற்றி deploy செய்யுங்கள்!

---

## 📞 உதவி தேவையா?

**Documentation Files**:
- README.md - முழு documentation
- SETUP_GUIDE.md - Setup instructions
- FEATURES.md - Feature list
- DEPLOYMENT.md - Deployment guide

**Quick Start**:
```bash
npm run dev
```

---

**Kiro AI-ஆல் உருவாக்கப்பட்டது Mr. Shalashian-க்காக** ❤️

வெற்றி வாழ்த்துக்கள்! 🎉
