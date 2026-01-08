# reCAPTCHA Troubleshooting Guide

## Issue: reCAPTCHA Not Appearing

If the reCAPTCHA widget is not appearing on the contact form, follow these steps:

### 1. Restart the Development Server

**IMPORTANT:** After adding/modifying `.env.local`, you MUST restart the Next.js server:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
cd the-brilliant-ideas
npm run dev
```

Environment variables are only loaded when the Next.js server starts.

### 2. Check Browser Console

Open browser console (F12) and look for these logs:

**Expected logs:**
```
Loading reCAPTCHA script...
reCAPTCHA script loaded successfully
renderRecaptcha called
window.grecaptcha: [object]
RECAPTCHA_SITE_KEY: 6LctrgEsAAAAAKzHMJib7r8fgm7aSzWU2Bxx-lQp
reCAPTCHA container: [div#recaptcha-container]
Rendering reCAPTCHA widget...
reCAPTCHA widget rendered, ID: 0
```

**If you see undefined site key:**
```
RECAPTCHA_SITE_KEY: undefined
```
→ Server not restarted after adding .env.local

**If you see "Container not found":**
```
reCAPTCHA container: null
```
→ DOM rendering issue, check if container div exists in HTML

**If you see "grecaptcha not ready":**
```
grecaptcha not ready or render function not available
```
→ Script failed to load or blocked

### 3. Verify Environment Variable

Check if the environment variable is loaded:

```bash
# In the-brilliant-ideas directory
cat .env.local
```

Should show:
```
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LctrgEsAAAAAKzHMJib7r8fgm7aSzWU2Bxx-lQp
```

### 4. Check Network Tab

Open browser DevTools → Network tab:

**Look for:**
- `recaptcha/api.js` request should be **200 OK** (green)
- If it's red or failed, check:
  - Internet connection
  - Firewall settings
  - Corporate proxy/VPN

**Ad blockers:**
- Some aggressive ad blockers block reCAPTCHA
- Try disabling ad blocker for localhost
- Or use browser's incognito/private mode

### 5. Verify Site Key

Current site key: `6LctrgEsAAAAAKzHMJib7r8fgm7aSzWU2Bxx-lQp`

This key should be registered for:
- `localhost` (development)
- `thebrilliantideas.com` (production)
- `www.thebrilliantideas.com` (production)

Check at: https://www.google.com/recaptcha/admin

### 6. Check Container Div

The reCAPTCHA container div should exist in the HTML:

```html
<div id="recaptcha-container"></div>
```

**Location:** In the contact form, before the submit button

### 7. Clear Cache

Sometimes cached files cause issues:

```bash
# Clear Next.js cache
cd the-brilliant-ideas
rm -rf .next
npm run dev
```

Also clear browser cache:
- Chrome: Ctrl+Shift+Delete
- Select "Cached images and files"
- Clear data

### 8. Test in Different Browser

Try opening the page in:
- Chrome (incognito mode)
- Firefox (private mode)
- Edge

This helps identify if it's a browser-specific issue.

### 9. Check for JavaScript Errors

Look for any JavaScript errors in console that might prevent the script from running:
- Syntax errors
- Type errors
- Network errors

### 10. Manual Test

Open browser console and manually test:

```javascript
// Check if grecaptcha is loaded
console.log(window.grecaptcha);

// Check if container exists
console.log(document.getElementById('recaptcha-container'));

// Try manual render
if (window.grecaptcha && window.grecaptcha.render) {
  window.grecaptcha.render('recaptcha-container', {
    sitekey: '6LctrgEsAAAAAKzHMJib7r8fgm7aSzWU2Bxx-lQp',
    callback: (token) => console.log('Token:', token),
  });
}
```

## Quick Fix Steps

1. **Stop dev server** (Ctrl+C)
2. **Restart dev server**: `npm run dev`
3. **Hard refresh browser**: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
4. **Open browser console** to check logs
5. **Navigate to contact page**: http://localhost:3000/contact
6. **Check if reCAPTCHA appears**

## Still Not Working?

If reCAPTCHA still doesn't appear after following all steps:

1. **Check console logs** - Look for error messages
2. **Verify .env.local exists** in the-brilliant-ideas root directory
3. **Check site key validity** at Google reCAPTCHA admin
4. **Try test key**: `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`
5. **Check firewall/antivirus** - May block Google APIs

## Common Issues

### Issue: "grecaptcha is not defined"
**Solution:** Script not loaded yet. Wait for script to load or check network.

### Issue: Site key is invalid
**Solution:** Verify key is correct and domain is registered.

### Issue: Container already has children
**Solution:** reCAPTCHA already rendered. Reload page.

### Issue: Script blocked by CSP
**Solution:** Check Content Security Policy headers.

## Debug Mode

The contact form now has extensive console logging. Check console for:
- Script loading status
- grecaptcha object availability
- Container element status
- Rendering attempts and results

## Contact

If you continue to have issues after trying all troubleshooting steps, check:
- Browser console errors
- Network tab for failed requests
- Google reCAPTCHA admin console for key status
