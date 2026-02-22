# Amir Hamza Portfolio

A modern, responsive portfolio website for a Full Stack Developer & Machine Learning Engineer.

![Portfolio Preview](https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=630&fit=crop)

## 👨‍💻 About

Hi, I'm **Amir Hamza** - a Full Stack Developer & Machine Learning Engineer based in New York, USA. I specialize in building innovative web applications and intelligent AI solutions.

### What I Do
- 🌐 Web Development (React, JavaScript, PHP, Python)
- 🤖 Machine Learning & AI (TensorFlow, Python)
- 📊 Data Analysis & Visualization
- 🔌 API Development & Integration

## 🚀 Features

- **Modern Dark Design** - Sleek, professional dark theme with gradient accents
- **Fully Responsive** - Looks great on all devices (desktop, tablet, mobile)
- **Smooth Animations** - AOS-powered scroll animations
- **Custom Cursor** - Interactive mouse cursor effect
- **Project Showcase** - Beautiful project cards with hover effects
- **Contact Form** - Working contact form with validation
- **SEO Optimized** - Complete meta tags, structured data, and sitemap
- **Performance Optimized** - Lazy loading images, optimized assets

## 🛠️ Technologies

### Frontend
- HTML5
- CSS3 (Custom properties, Flexbox, Grid)
- JavaScript (ES6+)
- Bootstrap 5.3
- AOS Animation Library
- Font Awesome 6.4

### Fonts
- DM Sans (Body text)
- Playfair Display (Headings)

## 📁 Project Structure

```
cv/
├── index.html          # Main HTML file
├── style.css          # Custom styles
├── script.js          # JavaScript functionality
├── robots.txt         # Search engine instructions
├── sitemap.xml        # Website sitemap
├── SEO-IMPLEMENTATION-GUIDE.md  # SEO guide
└── README.md          # This file
```

## ⚡ Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)

### Installation

1. **Clone or Download the Project**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Customize the Content**
   
   Open `index.html` and update:
   - Your name: Replace "Amir Hamza" throughout
   - Email: Update `mailto:amirhamza@example.com`
   - Phone: Update `tel:+1234567890`
   - Location: Change "New York, USA"
   - Social links: Update `#` with actual URLs

3. **Add Your Images**
   - Replace profile image URL in the hero section
   - Replace project images with your actual work
   - Recommended sizes:
     - Profile: 500x600px
     - Projects: 800x500px

4. **Update SEO Settings**
   
   In `index.html` head section, update:
   ```html
   <link rel="canonical" href="https://yourdomain.com/">
   <meta property="og:image" content="https://yourdomain.com/og-image.jpg">
   ```

5. **Run Locally**
   
   Simply open `index.html` in your browser, or use a local server:
   
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

## 🔧 Customization

### Changing Colors

Edit CSS variables in `style.css`:
```css
:root {
    --primary: #0ea5e9;      /* Main color */
    --secondary: #8b5cf6;    /* Secondary color */
    --accent: #f43f5e;       /* Accent color */
    --dark: #030712;         /* Background */
    --text: #f8fafc;         /* Text color */
}
```

### Adding More Projects

In `index.html`, copy and paste a project card:
```html
<div class="col-md-6">
    <div class="project-card">
        <div class="project-img-wrap">
            <img src="your-image.jpg" alt="Project Name">
        </div>
        <div class="project-info">
            <h3>Project Title</h3>
            <p>Description</p>
        </div>
    </div>
</div>
```

### Adding More Skills

In the skills section, add skill rows:
```html
<div class="skill-row">
    <div class="skill-info">
        <span>Skill Name</span>
        <span>85%</span>
    </div>
    <div class="progress-track">
        <div class="progress-fill" data-width="85"></div>
    </div>
</div>
```

## 🔍 SEO Setup

This portfolio is fully optimized for search engines. Here's how to finalize SEO:

### 1. Update URLs
Replace all placeholder URLs with your actual domain:
- `https://amirhamza-portfolio.com/` → `https://yourdomain.com/`

### 2. Create Favicon
Create favicon files:
- favicon.ico (32x32)
- favicon-32x32.png
- favicon-16x16.png
- apple-touch-icon.png (180x180)

### 3. Create OG Image
Create a 1200x630px image for social sharing with:
- Your photo
- Your name
- Your title

### 4. Submit to Search Engines
- **Google Search Console**: https://search.google.com/search-console
- **Bing Webmaster Tools**: https://www.bing.com/webmaster
- Submit `sitemap.xml` after hosting

### 5. Update Social Links
Replace `#` in social links with actual profile URLs:
```html
<a href="https://github.com/yourusername">
<a href="https://linkedin.com/in/yourusername">
<a href="https://twitter.com/yourusername">
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is for personal portfolio use. Feel free to use as a template but keep credits.

## 🤝 Connect With Me

- **GitHub**: [github.com/amirhamza](https://github.com/amirhamza)
- **LinkedIn**: [linkedin.com/in/amirhamza](https://linkedin.com/in/amirhamza)
- **Twitter**: [twitter.com/amirhamza](https://twitter.com/amirhamza)
- **Email**: amirhamza@example.com

---

*Built with ❤️ by Amir Hamza*
