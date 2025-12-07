# 🔗 Connecting Netlify Frontend to Vercel Backend

## ✅ How It Works:

```
Netlify (Frontend) → API Call → Vercel (Backend) → Gmail
```

Your HTML files make `fetch()` calls to your Vercel backend. When deployed to Netlify, those calls will automatically go to Vercel!

---

## 🎯 What's Already Configured:

### 1. Backend URL in HTML Files:
- ✅ `contact.html` - Already has backend URL
- ✅ `recruitor.html` - Already has backend URL

### 2. CORS Configuration:
- ✅ Backend allows all Netlify domains (`*.netlify.app`)
- ✅ Backend allows all Vercel domains
- ✅ Works automatically!

---

## 📝 Current Backend URLs:

**Contact Form:**
```javascript
const backendUrl = 'https://server-qdoh1c4kz-varnika-karris-projects.vercel.app';
fetch(`${backendUrl}/api/contact`, ...)
```

**Question Form:**
```javascript
const backendUrl = 'https://server-qdoh1c4kz-varnika-karris-projects.vercel.app';
fetch(`${backendUrl}/api/question`, ...)
```

---

## 🚀 After You Deploy to Netlify:

1. **Your site goes live** at: `your-site-name.netlify.app`
2. **User fills contact form**
3. **Form submits** → Calls Vercel backend
4. **Backend sends email** → Your Gmail
5. **Everything works!** ✅

**No changes needed - it works automatically!**

---

## 🔧 If You Need to Update Backend URL:

If your backend URL changes, just update these two files:

1. **`html/contact.html`** - Line ~895
2. **`html/recruitor.html`** - Line ~1821

Change:
```javascript
const backendUrl = 'YOUR_NEW_VERCEL_BACKEND_URL';
```

---

## ✅ Summary:

- ✅ Backend URL already in HTML files
- ✅ CORS configured for Netlify
- ✅ Ready to deploy!
- ✅ Will work automatically

**Just deploy to Netlify - it's already connected!** 🚀

