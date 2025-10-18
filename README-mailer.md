## Email Backend Setup

1) Create env file

Copy `server/.env.example` to `server/.env` and fill:

```
PORT=3001
CORS_ORIGIN=http://127.0.0.1:5500,http://localhost:5500
TO_EMAIL=varnikakarri30@gmail.com

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=yourgmail@gmail.com
SMTP_PASS=your_app_password_here
FROM_EMAIL=Portfolio Bot <yourgmail@gmail.com>
```

Tip: For Gmail, create an App Password (Account -> Security -> 2FA -> App Passwords) and use it as `SMTP_PASS`.

2) Install and run

```
cd server
npm install
npm run dev
```

3) Test locally

- Serve your site (e.g., VSCode Live Server at `http://127.0.0.1:5500/`)
- Visit `recruitor.html`
- Submit the form; you should receive an email at `TO_EMAIL`

Notes

- Endpoint used by the form: `http://localhost:3001/api/question`
- Update `CORS_ORIGIN` with your actual site origin when deployed.



