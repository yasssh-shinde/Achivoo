# VSS Website - File Structure Documentation

**Last Updated:** 2026-01-14  
**Project Type:** Vite Multi-Page Application  
**Status:** ✅ Properly Structured (with minor cleanup needed)

---

## 📁 Directory Structure

```
Achivoo/
│
├── 📁 .agent/                       # Documentation & Scripts
│   ├── FILE_STRUCTURE_ANALYSIS.md   # This analysis
│   ├── IMAGE_REQUIREMENTS.md        # Image generation plan
│   ├── SEO_UPDATE_SUMMARY.md        # SEO updates
│   ├── SITEMAP_QUICK_REFERENCE.md   # Sitemap guide
│   └── cleanup-files.ps1            # Cleanup script
│
├── 📁 .git/                         # Git repository
├── 📁 .vscode/                      # VS Code settings
│
├── 📁 public/                       # Static Assets (served as-is)
│   ├── 📁 images/                   # All website images
│   │   ├── blog_seo.png            # SEO blog header
│   │   ├── blog_ads.png            # Ads blog header
│   │   ├── blog_ai.png             # AI blog header
│   │   ├── blog_cro.png            # CRO blog header
│   │   ├── case_saas.png           # SaaS case study
│   │   ├── case_ecom.png           # E-commerce case study
│   │   ├── team_yash.png           # Team photo
│   │   ├── team_mamta.png          # Team photo
│   │   ├── team_hemant.png         # Team photo
│   │   └── team_dnyeshwari*.png    # Team photos
│   │
│   ├── 📁 uploads/                  # User uploads (if any)
│   ├── llms.txt                     # AI crawler guide (8KB)
│   ├── robots.txt                   # Crawler directives (743B)
│   ├── sitemap.xml                  # SEO sitemap (5.5KB)
│   └── vite.svg                     # Favicon
│
├── 📁 src/                          # Source Files
│   ├── main.js                      # Main JavaScript (3.8KB)
│   ├── style.css                    # Main stylesheet (17KB)
│   ├── counter.js                   # Counter utility
│   └── javascript.svg               # JS icon
│
├── 📁 data/                         # Data files
│   └── (content here)
│
├── 📁 node_modules/                 # NPM dependencies (auto-generated)
│
├── 📄 Core Pages (10 files)         # Main website pages
│   ├── index.html                   # Homepage
│   ├── about.html                   # About Us
│   ├── services.html                # Services
│   ├── case-studies.html            # Case Studies
│   ├── team.html                    # Team
│   ├── blog.html                    # Blog Index
│   ├── tools.html                   # Free Tools
│   ├── contact.html                 # Contact
│   ├── careers.html                 # Careers
│   ├── faq.html                     # FAQ
│   └── 404.html                     # Error Page
│
├── 📄 Blog Posts (14 files)         # All blog articles
│   │
│   ├── Core Strategy (4 posts)
│   │   ├── blog-hub-and-spoke-seo.html
│   │   ├── blog-ai-content-scaling.html
│   │   ├── blog-google-ads-vs-meta-ads.html
│   │   └── blog-landing-page-tweaks.html
│   │
│   ├── Mumbai (2 posts)
│   │   ├── blog-seo-mumbai.html
│   │   └── blog-saas-growth-mumbai.html
│   │
│   ├── Thane (2 posts)
│   │   ├── blog-digital-marketing-thane.html
│   │   └── blog-ecommerce-seo-thane.html
│   │
│   ├── Pune (2 posts)
│   │   ├── blog-performance-marketing-pune.html
│   │   └── blog-startup-scaling-pune.html
│   │
│   ├── Nagpur (2 posts)
│   │   ├── blog-local-seo-nagpur.html
│   │   └── blog-lead-gen-nagpur.html
│   │
│   └── Karanja Lad (2 posts)
│       ├── blog-growth-strategy-karanja-lad.html
│       └── blog-digital-modernization-karanja-lad.html
│
├── 📄 Configuration Files
│   ├── package.json                 # NPM configuration
│   ├── package-lock.json            # NPM lock file
│   ├── vite.config.js               # Vite configuration
│   └── .gitignore                   # Git ignore rules
│
├── 📄 Documentation
│   └── LICENSE                      # MIT License
│
└── ⚠️ Files to Delete (4 files)
    ├── 5-landing-page-tweaks-to-double-conversions.html  # Duplicate
    ├── yash-sh.html                 # Legacy file
    ├── png_list.txt                 # Temporary
    └── server.log                   # Log file
```

---

## 📊 File Statistics

### Current Count
- **Total Files:** 34 in root directory
- **Core Pages:** 10 HTML files
- **Blog Posts:** 14 HTML files
- **Duplicates/Legacy:** 2 HTML files ❌
- **Temporary Files:** 2 files ❌
- **Configuration:** 4 files
- **Documentation:** 1 file

### After Cleanup
- **Total Files:** 30 in root directory ✅
- **Core Pages:** 10 HTML files
- **Blog Posts:** 14 HTML files
- **Duplicates/Legacy:** 0 files ✅
- **Temporary Files:** 0 files ✅

---

## ✅ What's Correct

### 1. **Vite Standard Structure**
- ✅ All HTML files in root directory (Vite multi-page standard)
- ✅ `public/` folder for static assets
- ✅ `src/` folder for source code
- ✅ Configuration files in root

### 2. **Asset Organization**
- ✅ Images in `public/images/`
- ✅ SEO files in `public/` (sitemap, robots, llms.txt)
- ✅ Styles in `src/style.css`
- ✅ JavaScript in `src/main.js`

### 3. **Documentation**
- ✅ `.agent/` folder for project documentation
- ✅ Comprehensive guides and analysis
- ✅ Cleanup scripts ready

---

## ❌ What Needs Cleanup

### 1. **Duplicate Files**
```
❌ 5-landing-page-tweaks-to-double-conversions.html
   → Duplicate of blog-landing-page-tweaks.html
   → Action: DELETE

❌ yash-sh.html
   → Legacy file, not linked anywhere
   → Action: DELETE
```

### 2. **Temporary Files**
```
❌ png_list.txt
   → Temporary image list
   → Action: DELETE

❌ server.log
   → Server log file
   → Action: DELETE or add to .gitignore
```

### 3. **Updated Files**
```
✅ .gitignore
   → Added temporary files
   → Added admin.html

✅ robots.txt
   → Removed admin.html reference
   → File doesn't exist
```

---

## 🎯 Why This Structure is Correct

### Vite Multi-Page Application Standard

**HTML Files in Root:**
- ✅ Vite serves from root directory
- ✅ Enables clean URLs (`/about.html` not `/pages/about.html`)
- ✅ Simplifies routing and navigation
- ✅ Standard for multi-page Vite apps
- ✅ Easy to maintain and scale

**Public Folder:**
- ✅ Assets served without processing
- ✅ Direct access via `/images/file.png`
- ✅ SEO files accessible at root level
- ✅ Optimal for performance

**Src Folder:**
- ✅ Source code that gets processed
- ✅ CSS gets bundled and optimized
- ✅ JS gets bundled and tree-shaken
- ✅ Vite handles all transformations

---

## 🚀 Cleanup Instructions

### Option 1: Manual Cleanup
```bash
# Navigate to project root
cd c:\Users\Yash\Achivoo

# Delete duplicate files
del 5-landing-page-tweaks-to-double-conversions.html
del yash-sh.html

# Delete temporary files
del png_list.txt
del server.log
```

### Option 2: Use Cleanup Script
```powershell
# Run the cleanup script
.\.agent\cleanup-files.ps1
```

### Option 3: Git Clean (if files are untracked)
```bash
# Preview what will be deleted
git clean -n

# Delete untracked files
git clean -f
```

---

## 📋 Maintenance Checklist

### Daily
- [ ] Check for new temporary files
- [ ] Review server logs if needed

### Weekly
- [ ] Verify all links work
- [ ] Check for duplicate content
- [ ] Review .gitignore effectiveness

### Monthly
- [ ] Audit file structure
- [ ] Remove unused assets
- [ ] Update documentation
- [ ] Clean up old logs

---

## 🔍 File Naming Conventions

### HTML Pages
- **Format:** `lowercase-with-hyphens.html`
- **Examples:** 
  - `index.html` (homepage)
  - `case-studies.html` (multi-word)
  - `blog-seo-mumbai.html` (blog posts)

### Images
- **Format:** `category_description.png`
- **Examples:**
  - `blog_seo.png` (blog category)
  - `team_yash.png` (team photos)
  - `case_saas.png` (case studies)

### JavaScript
- **Format:** `camelCase.js`
- **Examples:**
  - `main.js`
  - `counter.js`

### CSS
- **Format:** `kebab-case.css`
- **Examples:**
  - `style.css`

---

## 🎨 Asset Organization

### Images by Category
```
public/images/
├── blog_*.png      # Blog headers (4 files)
├── case_*.png      # Case studies (2 files)
└── team_*.png      # Team photos (5 files)
```

### Missing Images (to be generated)
```
❌ vss_og_main.png           # Main OG image
❌ blog_mumbai_cityscape.png # Mumbai header
❌ blog_pune_tech_hub.png    # Pune header
❌ blog_thane_business.png   # Thane header
❌ blog_nagpur_local.png     # Nagpur header
❌ blog_karanja_digital.png  # Karanja Lad header
```
*See IMAGE_REQUIREMENTS.md for details*

---

## 📝 Notes

1. **DO NOT** move HTML files into subfolders
   - Breaks Vite routing
   - Breaks navigation links
   - Not standard for Vite multi-page apps

2. **DO** keep public assets in `public/`
   - Direct access without processing
   - Optimal for SEO files
   - Better for performance

3. **DO** use .gitignore properly
   - Prevent temporary files from being committed
   - Keep repository clean
   - Reduce repo size

4. **DO** follow naming conventions
   - Consistency across project
   - Easier to find files
   - Better for SEO

---

## ✅ Final Status

**Current Structure:** ✅ 95% Correct  
**Cleanup Needed:** ⚠️ 4 files to delete  
**After Cleanup:** ✅ 100% Correct  

**Recommendation:** Run cleanup script to achieve perfect structure.

---

**Last Updated:** 2026-01-14  
**Next Review:** 2026-02-14
