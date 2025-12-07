# 🔍 Detailed Error Check Guide

## 🔴 Problem:

Even with environment variables set and deployment protection disabled, emails are still failing.

**Error returned:** `{"ok":false,"error":"Failed to send email"}`

---

## 🔧 What I Just Did:

I've updated the backend to log **detailed error information** so we can see exactly what's wrong.

### Changes Made:

1. ✅ Added detailed error logging
2. ✅ Error responses now include error codes and messages
3. ✅ Added SMTP configuration check logging

---

## 📋 Step-by-Step Debugging:

### Step 1: Check Backend Logs

After the next email attempt fails, check Vercel logs:

1. Go to: https://vercel.com/dashboard
2. Click **"server"** project
3. Go to **"Deployments"** tab
4. Click on the **latest deployment**
5. Click **"Functions"** tab
6. Look for error logs - you'll see detailed error messages

### Step 2: Test and Get Detailed Error

1. Visit: https://varnikasportfolio.netlify.app/html/contact.html
2. Open browser console (F12)
3. Submit form
4. Check console - you'll now see detailed error information
5. Copy the error message

### Step 3: Common Errors and Fixes

#### Error: "Invalid login" or "Authentication failed"
**Fix:** Gmail app password is wrong
- Generate new app password: https://myaccount.google.com/apppasswords
- Update `SMTP_PASS` in Vercel

#### Error: "Connection timeout" or "ECONNREFUSED"
**Fix:** SMTP settings wrong
- `SMTP_HOST` should be: `smtp.gmail.com`
- `SMTP_PORT` should be: `587`
- `SMTP_SECURE` should be: `false`

#### Error: "Self-signed certificate" or "UNABLE_TO_VERIFY_LEAF_SIGNATURE"
**Fix:** Add TLS configuration
- We may need to add `rejectUnauthorized: false` to transporter config

#### Error: "ENV variables not set"
**Fix:** Environment variables not configured
- Go to Vercel → Settings → Environment Variables
- Verify all SMTP variables are set for **Production**

---

## 🧪 Test After Redeploy:

1. **Redeploy backend** (I just pushed changes)
2. **Submit form** from Netlify
3. **Check browser console** (F12) - you'll see detailed error
4. **Check Vercel logs** - you'll see SMTP config status and error details

---

## 📝 Next Steps:

1. **Redeploy backend** (code is pushed)
2. **Test contact form**
3. **Check error message** in browser console or Vercel logs
4. **Share the error** and I'll help fix it!

---

**The backend now logs detailed errors - we'll know exactly what's wrong!** 🔍

