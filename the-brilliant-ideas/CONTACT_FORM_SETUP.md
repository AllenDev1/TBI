# TBI Contact Form Setup Guide

## Overview
The contact form on The Brilliant Ideas website now integrates with the PixeryHub backend API and includes Google reCAPTCHA v2 verification for spam protection. It uses the same native reCAPTCHA implementation as the PixeryHub website for consistency.

## Features
- ✅ Full API integration with backend
- ✅ Google reCAPTCHA v2 verification (native implementation)
- ✅ Same reCAPTCHA key as PixeryHub website
- ✅ Form validation
- ✅ Spam detection
- ✅ Rate limiting (5 minutes between submissions)
- ✅ Success/Error messages
- ✅ Admin panel for managing submissions

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the root directory:

```bash
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1

# Google reCAPTCHA v2 Site Key (SAME as PixeryHub website)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LctrgEsAAAAAKzHMJib7r8fgm7aSzWU2Bxx-lQp
```

**IMPORTANT:** This form uses the **same reCAPTCHA key** as the PixeryHub website (`website/app/contact/page.tsx`). This ensures consistency across all properties.

### 2. reCAPTCHA Implementation

The form uses the **native Google reCAPTCHA v2 script** implementation (not the react-google-recaptcha library):

- Script loaded dynamically: `https://www.google.com/recaptcha/api.js`
- Explicit rendering with `grecaptcha.render()`
- Manual token management and reset
- Same implementation as PixeryHub website

If you need to use a different reCAPTCHA key:
1. Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Use reCAPTCHA v2 "I'm not a robot" checkbox
3. Add your domains: `localhost`, `thebrilliantideas.com`, `www.thebrilliantideas.com`
4. Update both frontend `.env.local` and backend `.env`

### 3. Backend Configuration

The backend is already configured with:
- Model: `server/src/models/TBIContact.js`
- Controller: `server/src/controllers/tbi-contact.controller.js`
- Routes: `server/src/routes/tbi-contact.routes.js`
- API Endpoint: `POST /api/v1/tbi-contact`

Make sure the backend `.env` has:
```bash
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key_here
```

### 4. CORS Configuration

The backend CORS is already configured to allow:
- `https://thebrilliantideas.com`
- `https://www.thebrilliantideas.com`

### 5. Production Deployment

Update `.env.local` for production:
```bash
NEXT_PUBLIC_API_URL=https://your-api-domain.com/api/v1
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_production_site_key
```

## API Endpoint

**POST** `/api/v1/tbi-contact`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Your Company",
  "serviceInterested": "Web Development",
  "projectBudget": "$5000-$10000",
  "message": "Tell us about your project...",
  "recaptchaToken": "token-from-google-recaptcha"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Thank you for contacting The Brilliant Ideas! We will get back to you soon.",
  "data": {
    "id": "contact_id"
  }
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Error message here"
}
```

## Admin Panel

Access contact submissions at:
- URL: `http://localhost:5173/tbi-contacts` (development)
- Menu: Dashboard → TBI Contacts 💼

Features:
- View all submissions
- Filter by status (new, in-progress, resolved, closed)
- Update status and add admin notes
- Delete submissions
- View statistics

## Form Fields

### Required Fields:
- Name
- Email
- Message
- reCAPTCHA verification

### Optional Fields:
- Company
- Service Interested (dropdown)
- Project Budget (dropdown)

## Testing

### Test reCAPTCHA Key (Development Only)
```
Site Key: 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
Secret Key: 6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
```

**Note:** This test key always passes validation. Replace with your actual keys for production!

## Spam Protection

The form includes multiple spam protection layers:
1. reCAPTCHA verification
2. Keyword-based spam detection
3. Rate limiting (5 minutes per email)
4. Email validation
5. Message length validation

## Troubleshooting

### Form not submitting:
- Check if API URL is correct in `.env.local`
- Verify backend server is running
- Check browser console for errors
- Verify reCAPTCHA is completed

### reCAPTCHA not showing:
- Check if `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is set
- Verify the domain is registered with Google
- Check browser console for errors

### CORS errors:
- Verify backend CORS includes your frontend domain
- Check backend `server/src/index.js` CORS configuration
