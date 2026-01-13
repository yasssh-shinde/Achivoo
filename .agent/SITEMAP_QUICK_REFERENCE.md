# Quick Reference: Sitemap & llms.txt

## 📍 Current Status (2026-01-14)

### Sitemap.xml
✅ **Complete** - All 24 pages indexed  
📍 Location: `public/sitemap.xml`  
🔗 URL: https://www.venkateswarayasoftwaresolutions.in/sitemap.xml

### llms.txt
✅ **Enhanced** - Comprehensive AI crawler guide  
📍 Location: `public/llms.txt`  
🔗 URL: https://www.venkateswarayasoftwaresolutions.in/llms.txt

### robots.txt
✅ **Optimized** - AI crawler permissions set  
📍 Location: `public/robots.txt`  
🔗 URL: https://www.venkateswarayasoftwaresolutions.in/robots.txt

---

## 📄 All Pages in Sitemap (24 Total)

### Core Pages (10)
1. Homepage - Priority 1.0
2. Services - Priority 0.8
3. Case Studies - Priority 0.8
4. About - Priority 0.7
5. Team - Priority 0.7
6. Blog Index - Priority 0.9
7. Tools - Priority 0.7
8. Contact - Priority 0.8
9. Careers - Priority 0.6
10. FAQ - Priority 0.6

### Blog Posts (14) - All Priority 0.8

**Core Strategy (4):**
1. blog-hub-and-spoke-seo.html
2. blog-ai-content-scaling.html
3. blog-google-ads-vs-meta-ads.html
4. blog-landing-page-tweaks.html

**Mumbai (2):**
5. blog-seo-mumbai.html
6. blog-saas-growth-mumbai.html

**Thane (2):**
7. blog-digital-marketing-thane.html
8. blog-ecommerce-seo-thane.html

**Pune (2):**
9. blog-performance-marketing-pune.html
10. blog-startup-scaling-pune.html

**Nagpur (2):**
11. blog-local-seo-nagpur.html
12. blog-lead-gen-nagpur.html

**Karanja Lad (2):**
13. blog-growth-strategy-karanja-lad.html
14. blog-digital-modernization-karanja-lad.html

---

## 🤖 AI Crawlers Allowed

The following AI crawlers are explicitly allowed in robots.txt:

- ✅ GPTBot (OpenAI)
- ✅ ChatGPT-User
- ✅ Google-Extended
- ✅ CCBot (Common Crawl)
- ✅ anthropic-ai (Claude)
- ✅ Claude-Web
- ✅ All other standard crawlers (User-agent: *)

---

## 🚫 Protected Areas

The following areas are blocked from all crawlers:

- ❌ /admin.html
- ❌ /server.js
- ❌ /.agent/
- ❌ /node_modules/

---

## 📊 Content Organization in llms.txt

### Sections Included:
1. **Essential Information** - Company overview, mission, services
2. **Core Value Proposition** - What makes VSS unique
3. **Key Pages** - All main navigation pages
4. **Core Strategy Content** - Hub articles (4)
5. **Local Growth Strategies** - Spoke articles by region (10)
6. **Service Offerings** - Detailed breakdown (4 categories)
7. **Target Industries** - Who VSS serves
8. **Geographic Focus** - Maharashtra markets
9. **Key Differentiators** - Competitive advantages
10. **Team Expertise** - Capabilities and certifications
11. **Contact Information** - How to reach VSS
12. **Technical Details** - Platform and performance info
13. **Content Update Frequency** - Publishing schedule

---

## 🎯 SEO Priorities

### Priority 1.0 (Highest)
- Homepage only

### Priority 0.9
- Blog index (daily updates)

### Priority 0.8
- Services
- Case Studies
- Contact
- All 14 blog posts

### Priority 0.7
- About
- Team
- Tools

### Priority 0.6
- Careers
- FAQ

---

## 📅 Update Frequencies

### Daily
- Blog index

### Weekly
- Homepage

### Monthly
- All blog posts
- Services
- Case Studies
- About
- Team
- Tools
- Contact
- Careers
- FAQ

---

## ✅ Validation

### Sitemap Validation
```bash
# Check sitemap is accessible
curl https://www.venkateswarayasoftwaresolutions.in/sitemap.xml

# Validate XML format
xmllint --noout sitemap.xml
```

### Robots.txt Validation
```bash
# Check robots.txt is accessible
curl https://www.venkateswarayasoftwaresolutions.in/robots.txt

# Test with Google's robots.txt tester
# https://www.google.com/webmasters/tools/robots-testing-tool
```

### llms.txt Validation
```bash
# Check llms.txt is accessible
curl https://www.venkateswarayasoftwaresolutions.in/llms.txt

# Verify all links work
grep -o 'https://[^)]*' llms.txt | xargs -I {} curl -I {}
```

---

## 🔄 Maintenance Schedule

### Weekly
- [ ] Check sitemap is being crawled (Search Console)
- [ ] Monitor AI crawler activity (server logs)

### Monthly
- [ ] Update lastmod dates for changed pages
- [ ] Add new blog posts to sitemap
- [ ] Update llms.txt with new content
- [ ] Verify all links still work

### Quarterly
- [ ] Review and update service descriptions
- [ ] Add new case studies
- [ ] Expand geographic coverage
- [ ] Update team information

---

## 📞 Quick Actions

### Adding a New Blog Post
1. Create the HTML file
2. Add entry to `sitemap.xml` with:
   - Correct URL
   - Current date as lastmod
   - Priority 0.8
   - Changefreq monthly
3. Add to appropriate section in `llms.txt`
4. Update blog index page

### Adding a New Service Page
1. Create the HTML file
2. Add to sitemap.xml (priority 0.8)
3. Add to llms.txt under "Service Offerings"
4. Update services.html navigation

### Blocking a Page from Crawlers
1. Add to robots.txt under "Disallow:"
2. Remove from sitemap.xml (if present)
3. Add noindex meta tag to page

---

## 🔗 Important URLs

- **Sitemap:** https://www.venkateswarayasoftwaresolutions.in/sitemap.xml
- **Robots:** https://www.venkateswarayasoftwaresolutions.in/robots.txt
- **LLMs:** https://www.venkateswarayasoftwaresolutions.in/llms.txt
- **Google Search Console:** Submit sitemap here
- **Bing Webmaster:** Submit sitemap here

---

**Last Updated:** 2026-01-14  
**Next Review:** 2026-02-14
