import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(helmet({
  contentSecurityPolicy: false, // Allow inline scripts for Unicorn Studio
}));
app.use(express.json());
// CORS configuration - allow all Vercel deployments and localhost
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    
    // Allow localhost and 127.0.0.1 from any port
    if (origin.match(/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/)) {
      return callback(null, true);
    }
    
    // Allow all Vercel deployments
    if (origin.match(/^https:\/\/.*\.vercel\.app$/)) {
      return callback(null, true);
    }
    
    // Allow all Netlify deployments
    if (origin.match(/^https:\/\/.*\.netlify\.app$/)) {
      return callback(null, true);
    }
    
    // Specifically allow the frontend URL (Vercel)
    if (origin === 'https://varnika-s-portfolio-web.vercel.app') {
      return callback(null, true);
    }
    
    // Also check environment variable
    const allowedOrigins = process.env.CORS_ORIGIN?.split(',').map(o => o.trim()) || [];
    for (const allowed of allowedOrigins) {
      if (allowed.includes('*')) {
        // Wildcard support
        const pattern = allowed.replace(/\*/g, '.*');
        if (origin.match(new RegExp(`^${pattern}$`))) {
          return callback(null, true);
        }
      } else if (origin === allowed) {
        return callback(null, true);
      }
    }
    
    // Allow all for production
    callback(null, true);
  },
  credentials: true
};
app.use(cors(corsOptions));

// Serve static files from parent directory (portfolio root)
app.use(express.static(path.join(__dirname, '..')));

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', limiter);

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Root route - serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Health check
app.get('/api/health', async (req, res) => {
  try {
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return res.json({ ok: true, smtp: 'not configured' });
    }
    await transporter.verify();
    res.json({ ok: true, smtp: 'ready' });
  } catch (err) {
    res.json({ ok: true, smtp: 'not ready', warning: 'SMTP verification failed' });
  }
});

// Question endpoint (from recruitor page)
app.post('/api/question', async (req, res) => {
  const { name, email, question } = req.body || {};

  // Basic validation
  if (!name || !email || !question) {
    return res.status(400).json({ ok: false, error: 'Missing fields' });
  }

  // Compose email
  const toAddress = process.env.TO_EMAIL || 'varnikakarri30@gmail.com';
  const fromAddress = process.env.FROM_EMAIL || process.env.SMTP_USER;
  const emailSubject = `New Portfolio Question from ${name}`;
  const emailText = `You have a new question from your portfolio recruitor page.\n\nName: ${name}\nEmail: ${email}\n\nQuestion:\n${question}`;
  const emailHtml = `
    <div style="font-family: 'Poppins', sans-serif; color: #333; line-height: 1.6;">
      <h2 style="color: #0056b3;">New Portfolio Question</h2>
      <p>You have received a new question from your portfolio recruitor page.</p>
      <div style="background-color: #f4f4f4; padding: 15px; border-left: 4px solid #0056b3; margin: 20px 0;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
      </div>
      <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #0056b3; margin: 20px 0;">
        <h3 style="color: #333; margin-top: 0;">Question:</h3>
        <p style="white-space: pre-wrap; color: #666; line-height: 1.8;">${question}</p>
      </div>
      <p style="color: #999; font-size: 0.9em; margin-top: 30px;">Best regards,<br>Your Portfolio Contact Form</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    });
    res.json({ ok: true });
  } catch (error) {
    console.error('Email send failed:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      command: error.command,
      responseCode: error.responseCode,
      response: error.response,
      stack: error.stack
    });
    res.status(500).json({ 
      ok: false, 
      error: 'Failed to send email',
      details: error.message || 'Unknown error',
      code: error.code || 'NO_CODE'
    });
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body || {};

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ ok: false, error: 'Missing fields' });
  }

  // Compose email
  const toAddress = process.env.TO_EMAIL || 'varnikakarri30@gmail.com';
  const emailSubject = `Portfolio Contact: ${subject}`;
  const emailText = `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0066cc;">New Contact Form Message</h2>
      <div style="background: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
      </div>
      <div style="background: #ffffff; padding: 20px; border-left: 4px solid #0066cc; margin: 20px 0;">
        <h3 style="color: #333;">Message:</h3>
        <p style="color: #666; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: toAddress,
      replyTo: email,
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    });
    res.json({ ok: true });
  } catch (error) {
    console.error('Email send failed:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      command: error.command,
      responseCode: error.responseCode,
      response: error.response,
      stack: error.stack
    });
    res.status(500).json({ 
      ok: false, 
      error: 'Failed to send email',
      details: error.message || 'Unknown error',
      code: error.code || 'NO_CODE'
    });
  }
});

// For Vercel serverless functions, export the app
export default app;

// For local development, listen on port
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Mailer server listening on http://localhost:${port}`);
  });
}



