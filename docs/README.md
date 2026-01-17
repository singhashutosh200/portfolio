# Ashutosh Singh - Portfolio Website

Modern, responsive portfolio website built with HTML5, CSS3, and JavaScript. Showcasing professional experience as a Senior Quality Analyst with 4+ years in software testing and QA.

## Features

- 🎨 Modern, vibrant design with neon colors
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Smooth animations and transitions
- 🚀 Performance optimized
- 🔗 Social media integration
- 📧 Contact form with EmailJS
- 🎯 Active section highlighting
- 📊 Dynamic skill and project loading

## Sections

1. **Home** - Introduction and hero section
2. **About** - Professional summary and expertise
3. **Skills** - Technical skills organized by category
4. **Education** - Educational background and certifications
5. **Projects** - Featured projects and case studies
6. **Experience** - Work experience timeline
7. **Contact** - Contact information and message form

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Libraries**: 
  - Typed.js - Text animations
  - ScrollReveal - Scroll effects
  - Vanilla Tilt - 3D card effects
  - EmailJS - Form email integration
  - Font Awesome - Icons
  - Google Fonts - Typography

## Folder Structure

```
portfolio/
├── index.html              # Main entry point
├── package.json            # Dependencies
├── .gitignore             # Git ignore rules
├── assets/
│   ├── css/
│   │   └── styles.css     # Main stylesheet
│   └── js/
│       └── script.js      # Main JavaScript
├── data/
│   ├── skills.json        # Skills data
│   └── projects/
│       └── projects.json  # Projects data
└── docs/
    └── README.md          # This file
```

## Customization

### Update Personal Information

1. Edit `index.html` - Change name, email, phone, location
2. Edit `data/skills.json` - Add/remove skills
3. Edit `data/projects/projects.json` - Update projects

### Color Scheme

Primary colors are defined in `assets/css/styles.css`:
- Primary: #ff006e (Neon Pink)
- Secondary: #8338ec (Purple)
- Tertiary: #3a86ff (Cyan)

### Email Configuration

Update EmailJS in `assets/js/script.js`:
```javascript
emailjs.init("YOUR_PUBLIC_KEY");
emailjs.send('service_id', 'template_id', formData)
```

## Getting Started

1. Clone or download the repository
2. Open `index.html` in a web browser
3. Customize content with your information
4. Deploy to GitHub Pages, Netlify, or Vercel

## Deployment

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select main branch as source

### Netlify
1. Drop the folder into Netlify
2. Site goes live automatically

### Vercel
1. Connect GitHub repo
2. Deploy automatically

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized image loading with Unsplash CDN
- Minified CSS and JavaScript
- Mobile-first responsive design
- Smooth 60fps animations

## License

MIT License - Free to use and modify

## Author

Ashutosh Singh
- Email: singhashutosh200@gmail.com
- LinkedIn: [Profile](https://www.linkedin.com/in/ashutoshkumar-ramp/)
- GitHub: [Profile](https://github.com/singhashutosh200)
