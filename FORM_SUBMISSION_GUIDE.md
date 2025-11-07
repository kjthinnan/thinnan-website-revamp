# Form Submission Guide

This guide explains how to set up form submission for the "Report a Bug / Request a Feature" form on the Contact page.

## Option 1: Formspree (Recommended - Easiest)

**Steps:**
1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your form ID (e.g., `xvgkqyzw`)
5. In `src/pages/Contact.jsx`, replace `YOUR_FORM_ID` with your actual form ID:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

**Pros:**
- Free tier: 50 submissions/month
- No backend needed
- Email notifications
- Spam protection
- Easy setup

## Option 2: EmailJS

**Steps:**
1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Sign up for a free account
3. Connect your email service (Gmail, Outlook, etc.)
4. Create an email template
5. Get your Service ID, Template ID, and Public Key
6. Install EmailJS: `npm install @emailjs/browser`
7. Update the form submission code:

```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        type: formType === 'bug' ? 'Bug Report' : 'Feature Request',
        from_name: formData.name,
        from_email: formData.email,
        title: formData.title,
        message: formData.details,
      },
      'YOUR_PUBLIC_KEY'
    );
    
    setSubmitStatus('success');
    setFormData({ name: '', email: '', title: '', details: '' });
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

**Pros:**
- Free tier: 200 emails/month
- Direct email delivery
- No backend needed
- Custom email templates

## Option 3: Your Own API Endpoint

**Steps:**
1. Create a backend API endpoint (Node.js, Python, etc.)
2. Update the fetch URL in `src/pages/Contact.jsx`:

```javascript
const response = await fetch('https://your-api.com/api/submit-form', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    type: formType === 'bug' ? 'Bug Report' : 'Feature Request',
    ...formData
  }),
});
```

**Pros:**
- Full control
- Custom logic
- Can store in database
- No third-party dependencies

## Option 4: Google Forms (Simple Alternative)

1. Create a Google Form
2. Get the form action URL
3. Update the form to use `action` attribute instead of JavaScript:

```jsx
<form action="YOUR_GOOGLE_FORM_URL" method="POST" target="_blank">
```

**Pros:**
- Completely free
- Unlimited submissions
- Data stored in Google Sheets
- Very simple setup

## Current Implementation

The form is currently set up to use Formspree. To activate it:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your form ID
3. Replace `YOUR_FORM_ID` in `src/pages/Contact.jsx` (line 49)

The form will automatically:
- Validate required fields
- Show success/error messages
- Clear form on successful submission
- Disable buttons during submission

