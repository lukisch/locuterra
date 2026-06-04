# LOCUTERRA demo

Next.js concept demonstrator for LOCUTERRA. It uses fictional Grüntal seed data
and has no backend, no database and no real user data.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000/locuterra` in your browser.

## Static build

```bash
npm run lint
npm run build
```

`next.config.ts` uses `output: "export"` and `basePath: "/locuterra"` so the
generated site can be served from GitHub Pages at `/locuterra`.

## Scope

- Public pages for places, groups, resources, channels, messages and profile.
- Synthetic data only.
- Client-side prototype interactions only; reloading resets local state.

## Privacy boundary

Do not add real people, addresses, contact details, credentials or production
data to this demo. LOCUTERRA is a civic-network concept and privacy rules are
part of the architecture, not a later add-on.
