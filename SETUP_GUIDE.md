# FocusGuardian Landing Page - Setup & Run Guide

## Ultra-Simple Setup (2 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Get Formspree Form ID (30 seconds)

1. Go to [formspree.io](https://formspree.io)
2. Enter your email: `rakesh.geddam.dev@gmail.com`
3. You'll get a **Form ID** (looks like: `xyzqwert`)
4. Replace the form ID in [WaitlistModal.tsx](components/WaitlistModal.tsx) line 21:
   ```tsx
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

That's it! No API keys. No configuration. Done.

### 3. Run the App

```bash
npm run dev
```

Open `http://localhost:3000` and test the waitlist form!

## How It Works

1. User clicks "Join the waitlist"
2. Fills Name & Email in the modal
3. Clicks "Request for Beta Version"
4. Email is sent to `rakesh.geddam.dev@gmail.com` via Formspree
5. Success message appears

**Everything happens in the browser. Zero backend needed.**

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/focusguardian-landing-page.git
git branch -M main
git push -u origin main
```

## Troubleshooting

**Issue**: Email not sending
- Make sure you updated the Formspree Form ID in [WaitlistModal.tsx](components/WaitlistModal.tsx)
- Check your spam folder
- Try testing at [formspree.io](https://formspree.io)

## Why Formspree?

✅ **Zero setup** - Just add your email  
✅ **Free** - No credit card needed  
✅ **Serverless** - No backend to manage  
✅ **Reliable** - Used by thousands of websites  
✅ **Privacy-friendly** - Simple, transparent service
