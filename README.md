# Exodos Web Frontend

Internal repo for the Exodos website - Next.js 15 + TypeScript + PostgreSQL

## Quick Start

```bash
# Development (recommended)
docker-compose --profile dev up webfrontend-dev

# Production
docker-compose up

# Local development
npm install && npm run dev
```

## Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run lint         # ESLint
npm run type-check   # TypeScript check
```

## Structure

```
src/
├── app/                    # Pages & API routes
│   ├── about/             
│   ├── blog/              
│   ├── contact/           
│   ├── services/          # Service pages
│   ├── team/              # Team member pages
│   └── api/contact/       # Contact form API
├── components/            # React components
└── lib/                   # Utils & DB connection
```

## Database

PostgreSQL runs in Docker with:
- Database: `exodos_db`
- User: `exodos_user`
- Password: `admin`
- Port: `5432`

## Environment

```bash
DATABASE_URL=postgresql://exodos_user:admin@postgres:5432/exodos_db
NODE_ENV=development|production
```

## CI/CD

GitHub Actions runs on push to `main`/`develop`:
- Lint & type check
- Build test
- Security scan
- Docker build & push 
