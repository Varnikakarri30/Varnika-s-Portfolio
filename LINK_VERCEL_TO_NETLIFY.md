# 🔗 How to Link Vercel Backend to Netlify Frontend

## ✅ Good News: It's Already Connected!

Your HTML files **already have the Vercel backend URL** in them. When you deploy to Netlify, they'll automatically call your Vercel backend!

---

## 🎯 How It Works:

```
User on Netlify Site
    ↓
Fills Contact Form
    ↓
JavaScript fetch() call
    ↓
Vercel Backend (server project)
    ↓
Sends Email via Gmail
    ↓
Your Email Inbox
```

**It's all automatic! No extra setup needed!**

---

## 📝 What's Already Done:

### 1. Backend URL in HTML Files:

**Contact Form (`html/contact.html`):**
```javascript
const backendUrl = 'https://server-j6fmzrtz5-varnika-karris-projects.vercel.app';
fetch(`${backendUrl}/api/contact`, ...)
```

**Question Form (`html/recruitor.html`):**
```javascript
const backendUrl = 'https://server-j6fmzrtz5-varnika-karris-projects.vercel.app';
fetch(`${backendUrl}/api/question`, ...)
```

### 2. CORS Configuration:

Your Vercel backend is already configured to accept requests from:
- ✅ All Vercel domains
- ✅ All Netlify domains (I just added this!)
- ✅ localhost (for testing)

---

## 🚀 After You Deploy to Netlify:

1. **Deploy your site** to Netlify (follow previous guide)
2. **Get your Netlify URL** (e.g., `your-site-123.netlify.app`)
3. **Visit contact page:** `your-site-123.netlify.app/html/contact.html`
4. **Submit form** - it will automatically call Vercel backend!
5. **Check your email** - messages will arrive in Gmail!

**Everything works automatically!** ✅

---

## 🔧 What I Just Did:

1. ✅ **Updated CORS** - Now allows all Netlify domains
2. ✅ **Verified backend URL** - Already correct in HTML files
3. ✅ **Created this guide** - So you understand how it works

---

## 📋 Summary:

**Frontend:** Netlify (your portfolio website)
**Backend:** Vercel (handles email sending)
**Connection:** Already configured in HTML files!

**Just deploy to Netlify - it's ready!** 🚀

---

## 🆘 If Forms Don't Work After Deployment:

1. **Check browser console** (F12) for errors
2. **Verify backend URL** is correct in HTML files
3. **Check CORS** - Make sure backend allows Netlify domain
4. **Test backend directly** - Visit backend health endpoint

**But it should work automatically!** 😊

