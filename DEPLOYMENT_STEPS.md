# 🚀 Quick Deployment Steps to Vercel

## ✅ Step 1: Code is Already on GitHub!

Your code is now on GitHub: **https://github.com/Varnikakarri30/Varnika-s-Portfolio**

---

## 📦 Step 2: Deploy Frontend (HTML/CSS/JS)

### Via Vercel Dashboard:

1. Go to **[vercel.com](https://vercel.com)** and sign in with GitHub
2. Click **"Add New..."** → **"Project"**
3. Import repository: **Varnikakarri30/Varnika-s-Portfolio**
4. Configure settings:
   - **Framework Preset**: `Other`
   - **Root Directory**: `html` ⚠️ **IMPORTANT!**
   - **Build Command**: (leave empty)
   - **Output Directory**: `.`
5. Click **"Deploy"**

Your frontend will be live at: `https://your-project.vercel.app`

---

## ⚙️ Step 3: Deploy Backend (Server)

### Option A: Deploy Backend as Separate Project (Recommended)

1. In Vercel Dashboard, click **"Add New..."** → **"Project"** again
2. Import the **SAME** repository: `Varnikakarri30/Varnika-s-Portfolio`
3. Configure settings:
   - **Framework Preset**: `Other`
   - **Root Directory**: `server` ⚠️ **IMPORTANT!**
   - **Build Command**: `npm install`
   - **Output Directory**: (leave empty)

4. **Set Environment Variables** (Click "Environment Variables"):
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
   ⚠️ Replace `your-frontend-url.vercel.app` with your actual frontend URL!

5. Click **"Deploy"**

Your backend will be at: `https://your-backend-project.vercel.app`

---

## 🔗 Step 4: Update Frontend to Use Backend URL

After both are deployed, update the API URLs:

1. Go to your GitHub repository
2. Edit `html/contact.html`:
   - Find: `'http://localhost:3001/api/contact'`
   - Replace with: `'https://your-backend-url.vercel.app/api/contact'`

3. Edit `html/recruitor.html`:
   - Find: `const endpoint = \`http://\${currentHost}:3001/api/question\`;`
   - Replace with: `const endpoint = 'https://your-backend-url.vercel.app/api/question';`

4. Commit and push:
   ```bash
   git add html/contact.html html/recruitor.html
   git commit -m "Update API URLs for production"
   git push origin main
   ```

5. Vercel will automatically redeploy with the new URLs!

---

## ✅ Step 5: Test Everything

1. Visit your frontend URL
2. Try submitting the contact form
3. Try submitting a question from the recruitor page
4. Check your Gmail inbox!

---

## 🆘 Troubleshooting

### Forms showing errors?
- Check browser console (F12) for errors
- Verify backend URL is correct in HTML files
- Make sure CORS_ORIGIN includes your frontend URL

### Not receiving emails?
- Double-check environment variables in Vercel
- Check Vercel function logs for errors
- Verify Gmail app password is correct

---

## 📝 Quick Command Reference

```bash
# Pull latest changes
git pull origin main

# Make changes and push
git add .
git commit -m "Your message"
git push origin main

# Vercel will auto-deploy!
```

---

## 🎉 That's It!

Your portfolio is now live and people can:
- ✅ View your portfolio
- ✅ Contact you via the contact form
- ✅ Ask questions via the recruitor page
- ✅ Download your resume

All emails will come to: **varnikakarri30@gmail.com**

