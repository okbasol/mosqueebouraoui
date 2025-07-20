# Email Server for Quran Registration Form

This is a separate Node.js email server that handles email sending for the Quran registration form.

## Setup Instructions

### 1. Install Dependencies
```bash
cd email-server
npm install
```

### 2. Configure Environment Variables
Copy the example environment file and configure it:
```bash
cp env.example .env
```

Edit `.env` file with your email credentials:
```env
PORT=3001
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@example.com
ALLOWED_ORIGINS=http://localhost:3000,https://your-website.com
```

### 3. Gmail Setup (if using Gmail)
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
3. Use this app password in the `EMAIL_PASS` environment variable

### 4. Start the Server
```bash
# Development mode
npm run dev

# Production mode
npm start
```

The server will run on port 3001 by default.

## API Endpoints

### POST /api/send-registration
Sends registration form data via email.

**Request Body:**
```json
{
  "name": "اسم الطالب",
  "birthDate": "2000-01-01",
  "state": "الولاية",
  "school": "المدرسة",
  "phone": "رقم الهاتف",
  "email": "البريد الإلكتروني",
  "telegramId": "معرف التليجرام",
  "quranMemorization": "مقدار الحفظ",
  "recitationType": "نوع الرواية",
  "tajweedLevel": "مستوى التجويد",
  "preferredTime": "الوقت المناسب"
}
```

**Response:**
```json
{
  "success": true,
  "message": "تم إرسال البريد الإلكتروني بنجاح",
  "messageId": "email-message-id"
}
```

### GET /api/health
Health check endpoint.

## Integration with Next.js App

In your Next.js app, set the environment variable:
```env
NEXT_PUBLIC_EMAIL_SERVER_URL=http://localhost:3001
```

## Deployment

### Option 1: Deploy as a separate service
- Deploy to Heroku, Railway, or any Node.js hosting service
- Update the `NEXT_PUBLIC_EMAIL_SERVER_URL` in your Next.js app

### Option 2: Deploy on the same server
- Run the email server alongside your Next.js app
- Use a process manager like PM2
- Configure reverse proxy (nginx) to route `/api/email/*` to the email server

## Security Considerations

1. **CORS Configuration**: Update `ALLOWED_ORIGINS` to include only your domain
2. **Rate Limiting**: Consider adding rate limiting to prevent spam
3. **Input Validation**: The server validates required fields
4. **Environment Variables**: Never commit `.env` file to version control

## Troubleshooting

1. **Email not sending**: Check Gmail app password and 2FA settings
2. **CORS errors**: Verify `ALLOWED_ORIGINS` includes your frontend URL
3. **Port conflicts**: Change `PORT` in `.env` if 3001 is already in use 