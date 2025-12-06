# Vercel Deployment Guide

## 🚀 Deploying Your Portfolio to Vercel

Your portfolio needs to be deployed in **two parts**:
1. **Frontend** (HTML/CSS/JS) - Deploy as a static site
2. **Backend** (Node.js server) - Deploy as serverless functions

---

## Part 1: Deploy Frontend to Vercel

### Option A: Via Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project"
3. Import your repository: `Varnikakarri30/Varnika-s-Portfolio`
4. Configure:
   - **Framework Preset**: Other
   - **Root Directory**: `html` (IMPORTANT!)
   - **Build Command**: (leave empty)
   - **Output Directory**: `.` (current directory)
5. Click "Deploy"

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
cd html
vercel --prod
```

**Note**: The frontend will be deployed, but the contact/question forms won't work until the backend is deployed.

---

## Part 2: Deploy Backend to Vercel (Serverless Functions)

The backend needs to be deployed separately. You have two options:

### Option A: Deploy Backend as Separate Vercel Project

1. In Vercel Dashboard, create a **NEW** project
2. Import the same repository
3. Configure:
   - **Root Directory**: `server`
   - **Framework Preset**: Other
   - **Build Command**: `npm install`
   - **Output Directory**: (leave empty)
   - **Install Command**: `npm install`

4. **Environment Variables** (CRITICAL!):
   Go to Project Settings → Environment Variables and add:
   ```
   TO_EMAIL=varnikakarri30@gmail.com
   FROM_EMAIL=varnikakarri30@gmail.com
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=varnikakarri30@gmail.com
   SMTP_PASS=mquwpztjrjmkdyuc
   CORS_ORIGIN=https://your-frontend-url.vercel.app
   ```

5. **Update `vercel.json`** in server folder:
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "server.js",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "/server.js"
       }
     ]
   }
   ```

### Option B: Convert to Vercel Serverless Functions

Create `api/contact.js` and `api/question.js` in your root directory:

**api/contact.js**:
```javascript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ ok: false, error: 'Missing fields' });
  }

  try {
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `... (same HTML as in server.js)`,
    });
    res.json({ ok: true });
  } catch (error) {
    console.error('Email send failed:', error);
    res.status(500).json({ ok: false, error: 'Failed to send email' });
  }
}
```

**api/question.js** (similar structure for question form)

---

## Part 3: Update Frontend API URLs

After deploying the backend, update the frontend to use the new backend URL:

1. In `html/contact.html`, change:
   ```javascript
   const response = await fetch('http://localhost:3001/api/contact', {
   ```
   To:
   ```javascript
   const response = await fetch('https://your-backend-url.vercel.app/api/contact', {
   ```

2. In `html/recruitor.html`, change:
   ```javascript
   const endpoint = `http://${currentHost}:3001/api/question`;
   ```
   To:
   ```javascript
   const endpoint = 'https://your-backend-url.vercel.app/api/question';
   ```

---

## Alternative: Use Vercel Environment Variables for API URL

Instead of hardcoding, use environment variables:

```javascript
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://your-backend-url.vercel.app';
```

---

## Quick Deployment Checklist

- [ ] Frontend deployed to Vercel
- [ ] Backend deployed to Vercel (separate project)
- [ ] Environment variables set in Vercel backend project
- [ ] CORS_ORIGIN updated with frontend URL
- [ ] Frontend API URLs updated to use backend URL
- [ ] Test contact form submission
- [ ] Test question form submission
- [ ] Verify emails are received

---

## Troubleshooting

### Forms not working?
- Check browser console for CORS errors
- Verify backend URL is correct
- Check environment variables are set
- Verify CORS_ORIGIN includes your frontend URL

### Emails not sending?
- Verify SMTP credentials in environment variables
- Check Gmail app password is correct
- Check Vercel function logs

### 404 on API routes?
- Verify `vercel.json` configuration
- Check serverless function deployment logs

---

## Recommended: Single Project with API Routes

For easier management, consider:
1. Deploy entire project (root directory)
2. Use Vercel's `api/` folder for serverless functions
3. Configure `vercel.json` to serve HTML from `html/` and API from `api/`

This keeps everything in one deployment!

