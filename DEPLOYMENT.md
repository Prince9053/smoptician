# 🚀 Deployment Guide - SM Optician

## ⚡ Quick Start (30 seconds)

```bash
1. Connect GitHub repo to Vercel
2. Vercel auto-detects static site
3. Click "Deploy"
4. Done! 🎉
```

---

## 📋 Prerequisites

- ✅ GitHub account (repo already created)
- ✅ Vercel account (free tier available)
- ✅ No build tools needed
- ✅ No environment variables required

---

## 🎯 Vercel Deployment Steps

### Step 1: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Select **"Import Git Repository"**
4. Authorize GitHub access
5. Select **"Prince9053/smoptician"**

### Step 2: Configure Project

**Framework Preset:** Select "Static" or "Other"

```
Project Name:      smoptician
Root Directory:    ./ (default)
Build Command:     (empty - static site)
Output Directory:  ./ (default)
Environment Vars:  (none needed)
```

### Step 3: Deploy

Click **"Deploy"** button and wait 30-60 seconds.

### Step 4: Access Site

Your site is now live at:
```
https://smoptician.vercel.app
```

---

## 🔧 Configuration Explained

### `vercel.json` Settings

```json
{
  "buildCommand": "echo 'Static site - no build needed'",
  "outputDirectory": "./",
  "framework": "static",
  "cleanUrls": true,
  "trailingSlash": false,
  "public": true,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600, s-maxage=3600"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Configuration Explanation

| Setting | Purpose |
|---------|---------|
| `buildCommand` | Tells Vercel no build needed (static) |
| `outputDirectory` | Root folder contains HTML files |
| `framework: "static"` | Tells Vercel this is a static site |
| `cleanUrls: true` | Routes work without .html extension |
| `Cache-Control` | 1-hour browser caching for performance |
| `rewrites` | All requests go to index.html |

---

## 🚨 Fixing Build Errors

### Error: "vite: command not found"

**Cause:** Vercel detected a build tool that doesn't exist

**Fix:** Ensure `vercel.json` has these settings:
```json
{
  "buildCommand": "echo 'Static site - no build needed'",
  "outputDirectory": "./",
  "framework": "static"
}
```

### Error: "Cannot find index.html"

**Check:**
1. ✅ `index.html` exists in root directory
2. ✅ Run `ls -la` to verify file structure
3. ✅ Verify correct GitHub branch is connected

### Error: "Images not loading (404)"

**Check:**
1. ✅ `assets/` folder exists
2. ✅ All image files are in `assets/`
3. ✅ Image paths in HTML are correct: `src="assets/image.jpg"`
4. ✅ Committed images to Git (not ignored)

---

## 📈 Auto-Deployment Setup

### Current Configuration

```
main branch → push → GitHub
                      ↓
                   Webhook
                      ↓
                   Vercel
                      ↓
                  Auto Deploy ✅
```

### How It Works

1. **Any commit to `main` branch** = automatic deploy
2. **Pull Requests** = preview deployments created
3. **Merges to `main`** = production deployment
4. **Rollback available** = revert to any previous deployment

---

## 🔗 Custom Domain (Optional)

### Add Custom Domain

1. Go to **Vercel Dashboard**
2. Select **Project → Settings → Domains**
3. Click **"Add"**
4. Enter your domain: `smoptician.com`
5. Follow DNS configuration
6. SSL certificate auto-installed ✅

### DNS Configuration

Add these records to your domain registrar:

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.0
```

---

## 📊 Monitoring & Analytics

### Vercel Dashboard

Access at: https://vercel.com/dashboard

**Available Metrics:**
- ⏱️ Build times
- 📊 Performance analytics
- 📈 Request statistics
- 🐛 Error logs
- 🔄 Deployment history
- 🌍 Edge network usage

### Performance Optimization

Vercel automatically provides:
- ✅ Global CDN
- ✅ Edge caching
- ✅ Automatic compression
- ✅ Image optimization
- ✅ HTTP/2 support
- ✅ Brotli compression

---

## 🔄 Git Workflow

### Develop Locally

```bash
# 1. Clone repository
git clone https://github.com/Prince9053/smoptician.git
cd smoptician

# 2. Create feature branch
git checkout -b feature/my-feature

# 3. Make changes
# Edit files...

# 4. Test locally
python -m http.server 8000
# Visit http://localhost:8000
```

### Submit Changes

```bash
# 5. Commit changes
git add .
git commit -m "feat: description of changes"

# 6. Push to GitHub
git push origin feature/my-feature

# 7. Create Pull Request on GitHub
# (Vercel auto-creates preview deployment)

# 8. After review, merge to main
# (Vercel auto-deploys to production)
```

---

## 🛡️ Security Features

### Automatic Security Headers

Vercel adds these security headers:

```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

### SSL/TLS

✅ HTTPS automatically enabled  
✅ Free SSL certificate  
✅ Auto-renewal  
✅ Supports TLS 1.2+  

---

## 📱 Testing Before Deploy

### Local Testing Checklist

- [ ] All images load correctly
- [ ] Navigation works on mobile
- [ ] Contact form submits to WhatsApp
- [ ] Gallery lightbox displays images
- [ ] Product filter works
- [ ] Animations are smooth
- [ ] No console errors
- [ ] Links are not broken
- [ ] Responsive on all breakpoints

### Browser Testing

| Browser | Desktop | Mobile |
|---------|---------|--------|
| Chrome | ✅ Test | ✅ Test |
| Firefox | ✅ Test | ✅ Test |
| Safari | ✅ Test | ✅ Test |
| Edge | ✅ Test | ✅ Test |

---

## 📞 Troubleshooting

### Site Not Updating After Push

**Solution:**
1. Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Wait 2-3 minutes for deployment to complete
4. Check Vercel dashboard for build status

### Slow Performance

**Optimize:**
1. Compress images (use WebP format)
2. Enable Vercel analytics to identify bottlenecks
3. Use Edge functions for complex logic
4. Add caching headers

### Deployment Stuck

**Debug:**
1. Check GitHub branch is connected
2. Verify `vercel.json` syntax
3. Check Vercel build logs
4. Look for errors in GitHub Actions

---

## 🚀 Advanced Deployment

### Environment Variables (if needed)

Add in Vercel Dashboard → Settings → Environment Variables:

```
KEY=value
API_URL=https://api.example.com
```

Access in HTML:
```html
<!-- Note: Static sites can't access env vars at runtime -->
<!-- Use build-time variables or fetch APIs instead -->
```

### Custom Build Output

Current setup doesn't need build output since it's static.

If you add dynamic features later:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

---

## 📋 Deployment Checklist

Before deploying:

- [x] `vercel.json` configured correctly
- [x] `.gitignore` created
- [x] `package.json` added
- [x] `README.md` documented
- [x] All files committed to GitHub
- [x] No sensitive data in code
- [x] Images optimized
- [x] Links tested
- [x] Mobile responsive
- [x] Accessibility checked

---

## 🔗 Useful Vercel Commands

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from command line
vercel

# Deploy to production
vercel --prod

# View deployment logs
vercel logs

# Pull environment variables
vercel env pull .env.local
```

---

## 📚 Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Static Deployments](https://vercel.com/docs/concepts/deployments/static-deployments)
- [Vercel CLI](https://vercel.com/docs/cli)
- [GitHub Integration](https://vercel.com/docs/git/vercel-for-github)

---

## 🎉 Deployment Complete!

Your site is now live and will auto-deploy on every push to `main`.

### What's Included

✅ Global CDN  
✅ Automatic SSL/HTTPS  
✅ Auto-deployments  
✅ Preview deployments  
✅ Unlimited bandwidth  
✅ 24/7 uptime  
✅ Analytics dashboard  

**Happy deploying! 🚀**

---

**Last Updated:** June 25, 2026  
**Vercel Status:** ✅ Active  
**Auto-Deployment:** ✅ Enabled
