# Gmail Setup Instructions for Contact Form

Follow these steps to enable email functionality for your contact form:

## Step 1: Enable 2-Factor Authentication on Gmail

1. Go to your [Google Account](https://myaccount.google.com/)
2. Click on **Security** in the left sidebar
3. Under "Signing in to Google", find **2-Step Verification**
4. Click on it and enable 2-Step Verification if not already enabled
5. Complete the setup process

## Step 2: Generate an App Password

1. Go back to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", find **App passwords** (this appears after enabling 2-Step Verification)
3. Click on **App passwords**
4. You may need to sign in again
5. Select **Mail** as the app
6. Select **Other (Custom name)** as the device
7. Enter a name like "Portfolio Contact Form"
8. Click **Generate**
9. **Copy the 16-character password** that appears (it will look like: `abcd efgh ijkl mnop`)
10. You won't be able to see this password again, so save it securely!

## Step 3: Configure the Server

1. Navigate to the `server` folder:
   ```bash
   cd server
   ```

2. Create a `.env` file (copy from the example):
   ```bash
   cp .env.example .env
   ```

3. Open the `.env` file and fill in your details:
   ```env
   TO_EMAIL=varnikakarri30@gmail.com
   FROM_EMAIL=varnikakarri30@gmail.com
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=varnikakarri30@gmail.com
   SMTP_PASS=your-16-character-app-password-here
   PORT=3001
   CORS_ORIGIN=http://localhost:8000
   ```

   **Important**: Replace `your-16-character-app-password-here` with the app password you generated in Step 2 (remove any spaces).

## Step 4: Start the Server

1. Make sure you're in the `server` directory
2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

   You should see: `Mailer server listening on http://localhost:3001`

## Step 5: Test the Contact Form

1. Open your portfolio contact page: `http://localhost:8000/contact.html`
2. Fill out the contact form
3. Submit it
4. Check your Gmail inbox for the message!

## Troubleshooting

### "Invalid login" error
- Make sure you're using the **App Password**, not your regular Gmail password
- Verify that 2-Step Verification is enabled
- Check that there are no spaces in the app password

### "Connection timeout" error
- Make sure your firewall isn't blocking port 587
- Try using port 465 with `SMTP_SECURE=true` instead

### Messages not arriving
- Check your spam folder
- Verify the `TO_EMAIL` in your `.env` file is correct
- Check the server console for error messages

## Important Notes

- **Never commit your `.env` file to Git!** It contains sensitive information
- The `.env` file is already in `.gitignore` to protect your credentials
- Keep your App Password secure and don't share it
- If you suspect your App Password is compromised, revoke it and generate a new one in Google Account settings

## For Production Deployment

When deploying to production (like Vercel, Netlify, or Heroku):
1. Set these environment variables in your hosting platform's dashboard
2. Don't include the `.env` file in your deployment
3. Use the platform's environment variable settings instead

