# Portfolio File Structure

This document describes the organized folder structure of the portfolio.

## 📁 Folder Organization

```
Varnika's Portfolio/
├── html/              # All HTML files
│   ├── index.html
│   ├── recruitor.html
│   ├── education.html
│   ├── work.html
│   ├── contact.html
│   ├── visitor.html
│   └── ... (other HTML files)
│
├── css/               # All CSS stylesheets
│   └── style.css
│
├── js/                # All JavaScript files
│   └── script.js
│
├── images/            # All image files (PNG, JPG, JPEG, SVG)
│   ├── lumix_preview_image.png
│   ├── grado_preview.png
│   ├── CampX_project_preview.png
│   ├── leaflyf1.png
│   ├── leaflyf2.png
│   ├── leaflyf3.png
│   └── ... (other images)
│
├── videos/            # All video files
│   └── solar_system_animaion.mov
│
├── documents/         # All PDF files and certificates
│   ├── Varnika Resume.pdf
│   └── E-Certificates copy/
│       └── ... (certificate files)
│
└── server/            # Backend server files
    ├── server.js
    ├── package.json
    └── node_modules/
```

## 🔗 Path References

### HTML Files
- CSS files: `../css/style.css`
- JavaScript files: `../js/script.js`
- Images: `../images/filename.png`
- Videos: `../videos/filename.mov`
- PDFs: `../documents/filename.pdf`
- Other HTML files: `filename.html` (relative to html/ folder)

### JavaScript Files
- HTML files: `../html/filename.html`
- PDFs: `../documents/filename.pdf`

## 🚀 Starting the Portfolio

1. **Frontend**: Navigate to the `html/` folder and open `index.html` in a browser, or use a local server:
   ```bash
   cd html
   python3 -m http.server 8000
   ```

2. **Backend** (for contact form): 
   ```bash
   cd server
   npm start
   ```

## 📝 Notes

- All file paths have been updated to use the new folder structure
- HTML files can reference each other directly since they're all in the same folder
- External resources (CDN links) remain unchanged
- The server folder remains separate for backend functionality

