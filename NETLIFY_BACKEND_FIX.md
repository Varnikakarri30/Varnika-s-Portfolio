# 🔧 Fixing Backend Connection for Netlify

## ✅ Good News: Backend IS Working!

The backend is responding and CORS is configured correctly! The issue is:

1. ✅ Backend URL was outdated in HTML files (FIXED!)
2. ⚠️ Backend returning 500 error (email sending failing)

---

## 🔧 What I Fixed:

### 1. Updated Backend URLs:

**Old URL:** `server-j6fmzrtz5-varnika-karris-projects.vercel.app`  
**New URL:** `server-e9anghbxf-varnika-karris-projects.vercel.app`

**Files Updated:**
- ✅ `html/contact.html`
- ✅ `html/recruitor.html`

### 2. CORS is Working:

✅ Backend already allows Netlify domains  
✅ I can see `access-control-allow-origin: https://varnikasportfolio.netlify.app` in response

---

## ⚠️ Current Issue: 500 Error

The backend is responding but emails are failing. This means:

1. **Deployment Protection** might be enabled (blocks requests)
2. **SMTP Configuration** might be wrong
3. **Gmail App Password** might be expired

---

## 🔧 Fix Email Sending:

### Step 1: Disable Deployment Protection

1. Go to: https://vercel.com/dashboard
2. Click **"server"** project
3. **Settings** → **Deployment Protection**
4. Select **"(Legacy) Only Preview Deployments"**
5. **Save** and **Redeploy**

### Step 2: Verify SMTP Settings

Check Vercel environment variables:
- `SMTP_HOST` = `smtp.gmail.com`
- `SMTP_PORT` = `587`
- `SMTP_USER` = `varnikakarri30@gmail.com`
- `SMTP_PASS` = (your Gmail app password)
- `TO_EMAIL` = `varnikakarri30@gmail.com`

### Step 3: Test Again

After fixing, test:
1. Visit: https://varnikasportfolio.netlify.app/html/contact.html
2. Submit form
3. Check browser console (F12) for errors
4. Check Gmail

---

## 📝 Summary:

✅ **Backend URLs updated**  
✅ **CORS working**  
✅ **Backend responding**  
⚠️ **Need to fix email sending** (Deployment Protection or SMTP)

**Try disabling Deployment Protection first!** 🚀

