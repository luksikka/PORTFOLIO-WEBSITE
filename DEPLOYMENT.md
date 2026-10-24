# 🚀 Deployment Guide

## Quick Deployment Options

### 🌐 Option 1: Netlify (Recommended - Easiest)

#### Method A: Drag & Drop (No Account Needed)
1. Build your project:
   ```bash
   npm run build
   ```
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist` folder to the upload area
4. Your site is live! 🎉

#### Method B: GitHub Integration
1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

**Custom Domain:**
- Site settings → Domain management → Add custom domain

---

### ⚡ Option 2: Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Follow the prompts:
   - Set up and deploy? `Y`
   - Which scope? (Select your account)
   - Link to existing project? `N`
   - Project name: `shalashian-portfolio`
   - Directory: `./`
   - Override settings? `N`

5. Your site is deployed! 🚀

**Production Deploy:**
```bash
vercel --prod
```

---

### 📄 Option 3: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/portfolio/', // Your repo name
     plugins: [react()],
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages:
   - Go to repository settings
   - Pages → Source → Select `gh-pages` branch
   - Save

---

### 🔥 Option 4: Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase:
   ```bash
   firebase init hosting
   ```

4. Configuration:
   - Public directory: `dist`
   - Single-page app: `Yes`
   - Automatic builds: `No`

5. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

---

### ☁️ Option 5: Cloudflare Pages

1. Push code to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click "Create a project"
4. Connect GitHub repository
5. Build settings:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output: `dist`
6. Click "Save and Deploy"

---

## 📱 Testing Before Deployment

### Local Production Build
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Check Build Output
- Navigate to `dist/` folder
- Verify all files are generated
- Check file sizes

### Test in Different Browsers
- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers

---

## 🔧 Pre-Deployment Checklist

- [ ] Update personal information (name, email, phone)
- [ ] Replace placeholder text with real content
- [ ] Add real project examples
- [ ] Update social media links
- [ ] Add real testimonials
- [ ] Test contact form
- [ ] Check all images load
- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Check console for errors
- [ ] Test in different browsers
- [ ] Add Google Analytics (optional)
- [ ] Add favicon
- [ ] Verify meta tags for SEO

---

## 🎯 Custom Domain Setup

### For Netlify:
1. Domain settings → Add custom domain
2. Update DNS records at your domain provider:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

### For Vercel:
1. Project settings → Domains
2. Add your domain
3. Update DNS:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

---

## 🔐 Environment Variables

If you add API keys or secrets:

### Netlify:
```bash
# Set via Netlify UI
Site settings → Environment variables
```

### Vercel:
```bash
vercel env add VITE_API_KEY
```

### In Code:
```javascript
const apiKey = import.meta.env.VITE_API_KEY;
```

---

## 🚀 CI/CD Setup

### GitHub Actions (Auto-deploy on push)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to Netlify
      uses: netlify/actions/cli@master
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
      with:
        args: deploy --prod --dir=dist
```

---

## 📊 Performance Optimization

Before deploying:

1. **Optimize Images**:
   - Compress images
   - Use WebP format
   - Lazy load images

2. **Minimize Bundle**:
   ```bash
   npm run build -- --report
   ```

3. **Enable Compression**:
   - Most hosts enable this automatically
   - Check in hosting settings

4. **Add Caching Headers**:
   - Configured automatically by most hosts

---

## 🔍 SEO Optimization

1. **Update Meta Tags** in `index.html`:
```html
<meta name="description" content="Mr. Shalashian - Professional Data Entry Operator Portfolio">
<meta name="keywords" content="data entry, DEO, database management, data processing">
<meta property="og:title" content="Mr. Shalashian - DEO Portfolio">
<meta property="og:description" content="Professional Data Entry Services">
<meta property="og:image" content="/preview-image.jpg">
```

2. **Add sitemap.xml**
3. **Submit to Google Search Console**
4. **Add robots.txt**

---

## 📈 Analytics Setup

### Google Analytics:

1. Get tracking ID from [Google Analytics](https://analytics.google.com)

2. Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🐛 Troubleshooting Deployment

### Issue: Blank page after deployment
**Solution**: 
- Check browser console
- Verify build completed successfully
- Check base URL in vite.config.js

### Issue: 404 on refresh
**Solution**: Configure server for SPA:
```
# Netlify: Add _redirects file
/*    /index.html   200
```

### Issue: Assets not loading
**Solution**: 
- Check asset paths (use relative paths)
- Verify dist folder has all assets
- Check console for 404 errors

---

## 🎉 Post-Deployment

1. **Test Live Site**:
   - All pages load
   - Forms work
   - Links functional
   - Mobile responsive

2. **Share Your Portfolio**:
   - Add to resume
   - Share on LinkedIn
   - Update email signature
   - Add to business cards

3. **Monitor Performance**:
   - Google PageSpeed Insights
   - GTmetrix
   - WebPageTest

---

## 📞 Support

For deployment issues:
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **GitHub Pages**: [pages.github.com](https://pages.github.com)

---

Your portfolio is ready to go live! Choose the platform that works best for you and deploy! 🚀
