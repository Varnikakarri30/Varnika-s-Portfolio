# Varnika's Portfolio

## 🚀 Quick Start

### Option 1: Run the Start Script (Easiest)
```bash
./START_SERVER.sh
```
Then open: http://localhost:8000/html/index.html

### Option 2: Manual Server Start
```bash
# Navigate to portfolio root directory
cd "/Users/varnikakarri/Documents/Varnika's Portfolio"

# Start server from ROOT directory (important!)
python3 -m http.server 8000
```

Then open your browser and visit:
**http://localhost:8000/html/index.html**

⚠️ **IMPORTANT**: Always run the server from the **root directory**, not from the `html/` folder, so that relative paths like `../css/style.css` work correctly.

## 📁 Folder Structure

```
Varnika's Portfolio/
├── html/          # All HTML files - START HERE
│   └── index.html # Main entry point
├── css/           # Stylesheets
├── js/            # JavaScript files
├── images/        # Image assets
├── videos/        # Video files
├── documents/     # PDFs and certificates
└── server/        # Backend server (for contact form)
```

## 🔧 Troubleshooting

### Portfolio Not Loading?
1. Make sure you're running the server from the **root directory** (where this README is)
2. Don't run the server from inside the `html/` folder
3. Check that all folders exist: `ls -la` should show `html/`, `css/`, `js/`, `images/` folders

### CSS Not Loading?
- Verify server is running from root: `python3 -m http.server 8000`
- Check browser console for 404 errors
- Ensure `css/style.css` exists

### Images Not Showing?
- Verify `images/` folder exists in root
- Check that image paths in HTML use `../images/filename.png`

## 📝 Notes

- Main entry point: `html/index.html`
- All paths are relative to the root directory
- Backend server (for contact form) runs separately from `server/` folder

