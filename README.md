# Portfolio

A React portfolio site — career timeline, project showcase, and a contact
form — built to be forked and filled in with your own data rather than
edited in place.

## Fork it and make it yours

All personal content (name, bio, career timeline, projects, social links)
lives in a single git-ignored data file, not in component source:

1. Fork/clone the repo.
2. Run `npm install`.
3. Run `npm start` once — this auto-creates `data/profile.json` (from
   `data/profile.example.json`) and `.env` (from `.env.example`) via
   `scripts/ensure-local-config.js`, if they don't already exist.
4. Edit `data/profile.json` with your own identity, timeline, projects, and
   social links. Edit `.env` with your site title/description and (if you
   want a working contact form) your EmailJS credentials.
5. Restart `npm start`.

Both `data/profile.json` and `.env` are git-ignored (see `.gitignore`) —
your real data never gets committed. `data/profile.example.json` and
`.env.example` are the tracked templates that ship with the repo.

`data/profile.json` is the file you edit, but component code can't import
it directly from there — Create React App blocks imports from outside
`src/`. So the same bootstrap script also syncs it into
`src/config/profile.json`, a derived, git-ignored, auto-regenerated copy
that's what the app actually imports. Don't edit `src/config/profile.json`
by hand; edit `data/profile.json` and restart.

If you add or change images referenced from `profile.json` (timeline company
logos, project screenshots, your avatar), wire them up in
`src/config/assetMap.js` — JSON can't `import` a bundled asset, so that file
is the bridge between the two.

## Key features

- **Career timeline**: CSS-grid Gantt on desktop (bar length = tenure, across
  Full-time / Education / Internships lanes), chronological vertical layout
  on mobile.
- **Project showcase**: grouped sections, each with cards for
  title/description/tech-stack/link.
- **Contact form**: EmailJS-powered, no backend required.
- **Responsive**: mobile-first, horizontal-scroll timeline on desktop,
  vertical stack under 768px.

## Tech stack

React 17 (Create React App / `react-scripts`), React Bootstrap, tsParticles
background, `react-icons`, `typewriter-effect`.

## Development

```bash
npm install       # install dependencies
npm start         # dev server with hot reload (auto-bootstraps local config)
npm test          # run tests
npm run build     # production build
```

## Environment variables

`.env` (git-ignored, created from `.env.example` on first `npm start`):

| Variable | Purpose |
| --- | --- |
| `REACT_APP_SITE_TITLE` / `REACT_APP_SITE_DESCRIPTION` | Injected into `public/index.html`'s title/meta tags at build time |
| `REACT_APP_EMAILJS_SERVICE_ID` / `REACT_APP_EMAILJS_TEMPLATE_ID` / `REACT_APP_EMAILJS_PUBLIC_KEY` | EmailJS contact-form config — see `CONTACT_IMPLEMENTATION_GUIDE.md` |

The contact form shows an inline "not configured" message if the EmailJS
variables are missing, rather than failing silently.

## Deployment

Deployed to GitHub Pages via the `gh-pages` package, run manually:

```bash
npm run build
npm run deploy   # gh-pages -d build → pushes to the gh-pages branch
```

- `homepage` in `package.json` and the root `CNAME` file control where
  GitHub Pages serves the site — update both if you fork this to a different
  domain.
- No CI/CD is wired up; deploy runs from your local environment.

## Project structure

```
data/
  profile.json              git-ignored, real data — edit this
  profile.example.json      tracked template

src/
  config/
    profile.json      auto-generated, git-ignored copy of data/profile.json (don't edit)
    assetMap.js        image key -> bundled asset wiring
  components/           Home, Navbar, Footer, Projects, Contact, etc.
  Assets/                images referenced via assetMap.js
public/                   static HTML template, favicon, manifest
```
