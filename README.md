# Ananda Vidya Sagar Katakam — Portfolio (GitHub Pages)

Personal portfolio website

## File Structure

```
├── config.js              ← ONLY file to edit — all your content
├── index.html             ← Pure template (do not edit)
├── style.css              ← Styling (edit for theme customization only)
├── images/
│   └── profile.jpg        ← Replace with your photo
└── .github/workflows/
    └── deploy-pages.yml   ← GitHub Pages auto-deploy
```

## Features

- **Fully Templatized**: All personal data in one `config.js` file
- **No Build Tools**: Pure HTML/CSS/JS — works instantly
- **Responsive Design**: Mobile-friendly, dark theme
- **Smooth Interactions**: Scroll animations, expandable sections, hover tooltips
- **Privacy-First**: Contact info masked, local assets only
- **GitHub Pages Ready**: Auto-deploys on push to `main`
- **SEO Optimized**: JSON-LD structured data + OG meta tags for social sharing
- **Skill Filtering**: Category-based filters for technical expertise
- **Analytics**: Umami tracking (privacy-focused, GDPR compliant)

## Local Preview

Start a static server:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000 in your browser.

## Customize Your Portfolio

**Edit `config.js` only.** Replace:

| Field | What to update |
|-------|---|
| `name`, `title` | Your name and job title |
| `subtitle` | Your professional bio |
| `profileImage` | Path to your photo (recommend: `images/profile.jpg`) |
| `contact` | Email, phone, location (keep masked for privacy) |
| `social` | GitHub/LinkedIn URLs |
| `valueChips` | Key expertise areas (5 items) |
| `summary` | Professional summary (HTML allowed) |
| `businessImpact` | Impact/achievements section |
| `skills` | Technical expertise grouped by category |
| `experience` | Work history with role/company/dates/bullets |
| `education` | Degrees with institution/dates |
| `certifications` | Certifications with links |

**Do NOT edit `index.html` or `style.css` for content.** These are templates.

## Publish with GitHub Pages

1. Fork or clone this repository.
2. Customize `config.js` with your details.
3. Push to GitHub (to `main` branch).
4. In GitHub repo settings → **Pages**, confirm deployment is enabled.
5. Your portfolio will be live at: `https://<your-username>.github.io/<repo-name>/`

### Custom Domain (Optional)

Add a `CNAME` file with your domain name:

```
echo "your-domain.com" > CNAME
```

### Styling Customization

Edit `style.css` to change colors, fonts, or layout. Key CSS variables in `:root`:

```css
--bg: #030712;           /* Background */
--card-bg: #111827;      /* Card background */
--text-primary: #f3f4f6; /* Main text */
--accent: #38bdf8;       /* Highlight color (cyan) */
```

### Analytics

Umami analytics is configured in `index.html`. Update the `data-website-id` if needed. No configuration required to start tracking.


## License & Reuse

**Personal Content**: Name, bio, experience, and all content in `config.js` are protected. © All Rights Reserved. See `LICENSE` file.

**Code Template** (HTML, CSS, JS): You may fork and reuse this portfolio template for your own portfolio. Simply replace the content in `config.js` with your own details.

## Tips for Your Portfolio

- **Profile Image**: Replace `images/profile.jpg` (recommend 160x160px square)
- **Contact Privacy**: Keep email/phone masked (e.g., `k.ana*****@gmail.com`) as shown
- **Skills Tooltips**: Add `title` attributes to skill tags for hover help text
- **Dates Format**: Use format like `"Jan 2024 – Present"` or `"06/2020 to 07/2022"`
- **HTML in Summaries**: Use `<strong>`, `<em>` for emphasis in summary paragraphs
- **Links**: Certifications and social URLs should be full HTTPS URLs

