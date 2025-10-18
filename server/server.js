import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(helmet());
app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(',') || '*'}));

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

// Health check
app.get('/api/health', async (req, res) => {
  try {
    await transporter.verify();
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ ok: false, error: 'SMTP not ready' });
  }
});

// Question endpoint
app.post('/api/question', async (req, res) => {
  const { name, email, question } = req.body || {};

  // Basic validation
  if (!name || !email || !question) {
    return res.status(400).json({ ok: false, error: 'Missing fields' });
  }

  // Compose email
  const toAddress = process.env.TO_EMAIL || 'varnikakarri30@gmail.com';
  const subject = `New Portfolio Question from ${name}`;
  const text = `You have a new question from your portfolio form.\n\nName: ${name}\nEmail: ${email}\n\nQuestion:\n${question}`;

  try {
    await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: toAddress,
      replyTo: email,
      subject,
      text,
    });
    res.json({ ok: true });
  } catch (error) {
    console.error('Email send failed:', error);
    res.status(500).json({ ok: false, error: 'Failed to send email' });
  }
});

app.listen(port, () => {
  console.log(`Mailer server listening on http://localhost:${port}`);
});



