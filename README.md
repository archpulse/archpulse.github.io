# J.A.R.V.I.S. Web

This folder contains a separate Vite-powered showcase site for the project.

## Stack

- Vite
- Tailwind CSS
- animate.css

## Run

```bash
cd web
npm install
npm run dev
```

## Build

```bash
cd web
npm run build
```

## GitHub Pages Without Actions

If this site lives inside the `archpulse.github.io` repository, you can publish the raw
files into the `docs/` folder and use branch-based Pages:

```bash
cd web
npm run publish:pages
```

Then in the GitHub repository settings:

1. Open `Settings -> Pages`
2. Set `Source` to `Deploy from a branch`
3. Choose branch `main`
4. Choose folder `/docs`

That keeps the setup simple and avoids GitHub Actions entirely.

The page loads directly from `index.html`, so no Vite build step is required.

## Notes

- The page is designed around a liquid-glass visual style.
- Background motion comes from animated floating orbs.
- The copy focuses on clarity, fast onboarding, and open-source credibility.
