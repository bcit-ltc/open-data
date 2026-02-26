# Open Data Portal

This project is a Docusaurus-based open data portal for learning analytics datasets.

## What this site contains

- A single homepage at `src/pages/index.tsx`
- Dataset sections with:
  - source description
  - field-level schema details
  - per-dataset download button
- Download files served from `static/downloads/`

## Requirements

- Node.js `>=20.0`
- npm
- Docker Desktop (optional, for containerized run)

## Install dependencies

```bash
npm ci
```

## Run locally (dev mode)

```bash
npm start
```

## Build static site

```bash
npm run build
```

## Serve production build locally

```bash
npm run serve
```

## Run with Docker Compose

```bash
docker compose up --build
```

Then open:

- `http://localhost:8080`

## Dataset downloads

Download buttons point to:

- `/downloads/audiovideoprocessed.csv`
- `/downloads/contentobjects.csv`
- `/downloads/discussionsforum.csv`
- `/downloads/gradeobjects.csv`
- `/downloads/organizationalunits.csv`
- `/downloads/quizobjects.csv`
- `/downloads/releaseconditionsobjects.csv`
- `/downloads/roledetails.csv`

Replace the placeholder CSV files in `static/downloads/` with your real public datasets when ready.

## Project notes

- Docs and blog plugins are disabled in `docusaurus.config.ts`.
- Homepage sections currently use anchors:
  - `/#about`
  - `/#datasets`
