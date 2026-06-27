# Online Resume Website

This is a static personal resume website. It can be opened directly in a browser and later deployed to GitHub Pages, Cloudflare Pages, Vercel, Netlify, or any static hosting service.

## File Structure

- `index.html`: resume content and page sections
- `styles.css`: layout, colors, responsive design, print styles
- `script.js`: language toggle, PDF print button, current year
- `assets/`: profile photo, project screenshots, certificates, and placeholders

## How To Edit

1. Replace placeholder text in `index.html`.
2. Put your photos in `assets/`.
3. Update image paths in `index.html`, for example:

```html
<img class="avatar" src="assets/profile.jpg" alt="个人头像" />
```

4. Click the `PDF` button in the page to print or save as PDF.

## Recommended Content

- Name
- Target role
- Email, phone, location
- LinkedIn, GitHub, portfolio links
- 3-4 sentence summary
- Education
- Skills
- Internship or work experience
- Projects with screenshots
- Certificates and awards

## Deployment Recommendation

For the first version, use Cloudflare Pages or GitHub Pages. Both can publish this static website from a GitHub repository and provide an external link that opens on other computers.
