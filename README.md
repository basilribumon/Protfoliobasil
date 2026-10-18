# Basil Thottappali — Portfolio

Responsive React + Vite portfolio. All personal links and optional assets live in `src/data.js`; project imagery uses custom CSS artwork until real screenshots are added.

## Run locally

1. Install Node.js (LTS) and npm.
2. From this folder run `npm install`.
3. Run `npm run dev` and open the local URL Vite prints.
4. Run `npm run build` to create the production site in `dist/`; use `npm run preview` to inspect that build.

## Deploy

Import this folder into Vercel or Netlify. Both detect Vite automatically. Build command: `npm run build`; output directory: `dist`.

## Personal setup checklist

- [ ] Add your CV as `public/Basil-Thottappali-CV.pdf`, then set `profile.resume` in `src/data.js` to `/Basil-Thottappali-CV.pdf`.
- [ ] Add your GitHub profile URL to `profile.github` when ready.
- [ ] Add real project links to each project's `demo` and `source` fields in `src/data.js`. Once a `demo` URL is set, clicking anywhere on that project card opens the live site in a new tab; missing demos intentionally display “Demo coming soon”. Source links appear only when configured.
- [ ] Add project screenshots to `public/images/` and set each project's `image` to its public URL.
- [ ] Add certificate PDFs/images under `public/certificates/` and configure each `file` field.
- The contact form validates required fields and opens a prefilled WhatsApp message to `profile.whatsapp` in `src/data.js`. The visitor reviews and sends the message in WhatsApp; the site does not claim it was delivered automatically.

Your portrait is stored at `public/images/basil.png`; change `profile.photo` to replace it.
