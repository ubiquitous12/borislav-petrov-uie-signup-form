# Customer Sign-up

Small customer sign-up application built with Angular and a Node.js Express mock API.

## Requirements

- Node.js 20+ (tested with Node.js 24)
- npm 10+

## Setup

```bash
npm install
```

## Development

Run the frontend and mock API together:

```bash
npm run dev
```

Or start them separately:

```bash
npm run start:backend
npm run start:frontend
```

- Frontend: http://localhost:3000
- Mock API: http://localhost:4000
- API requests to `/api` are proxied to the Express server

## Tests

```bash
npm test
```

Uses Vitest with Angular TestBed.
