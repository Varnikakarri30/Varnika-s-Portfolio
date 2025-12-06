# 🚀 Deploy to Vercel - SIMPLE STEPS

## Option 1: Via Vercel Dashboard (EASIEST - 2 minutes)

### Step 1: Deploy Frontend
1. Go to: **https://vercel.com/new**
2. Sign in with GitHub
3. Click **"Import Git Repository"**
4. Select: **`Varnikakarri30/Varnika-s-Portfolio`**
5. Configure:
   - **Framework Preset**: Select `Other`
   - **Root Directory**: Type `html` ⚠️ **IMPORTANT!**
   - Leave everything else as default
6. Click **"Deploy"** 🚀

✅ Your frontend will be live at: `https://your-project.vercel.app`

### Step 2: Deploy Backend
1. In Vercel Dashboard, click **"Add New..."** → **"Project"**
2. Select the same repo: **`Varnikakarri30/Varnika-s-Portfolio`**
3. Configure:
   - **Framework Preset**: `Other`
   - **Root Directory**: Type `server` ⚠️ **IMPORTANT!**
4. Click **"Environment Variables"** and add these:
   ```
   TO_EMAIL = varnikakarri30@gmail.com
   FROM_EMAIL = varnikakarri30@gmail.com
   SMTP_HOST = smtp.gmail.com
   SMTP_PORT = 587
   SMTP_SECURE = false
   SMTP_USER = varnikakarri30@gmail.com
   SMTP_PASS = mquwpztjrjmkdyuc
   CORS_ORIGIN = https://your-frontend-url.vercel.app
   ```
   ⚠️ Replace `your-frontend-url.vercel.app` with your actual frontend URL from Step 1!
5. Click **"Deploy"** 🚀

✅ Your backend will be at: `https://your-backend-project.vercel.app`

### Step 3: Update Frontend URLs
After backend deploys, I'll update the HTML files for you!

---

## Option 2: Via Terminal (If you have Vercel CLI)

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Login
vercel login

# Deploy Frontend
cd html
vercel --prod

# Deploy Backend (new terminal)
cd ../server
vercel --prod
```

---

## After Deployment

I'll update the API URLs in your HTML files to point to the deployed backend URLs!

