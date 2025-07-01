# Exodos Web Frontend

[![Tests](https://github.com/Exodos-Consulting-Group/webfrontend/actions/workflows/ci-cd.yml/badge.svg?job=test)](https://github.com/Exodos-Consulting-Group/webfrontend/actions/workflows/ci-cd.yml)
[![Build](https://github.com/Exodos-Consulting-Group/webfrontend/actions/workflows/ci-cd.yml/badge.svg?job=build)](https://github.com/Exodos-Consulting-Group/webfrontend/actions/workflows/ci-cd.yml)
[![Security Scan](https://github.com/Exodos-Consulting-Group/webfrontend/actions/workflows/ci-cd.yml/badge.svg?job=security-scan)](https://github.com/Exodos-Consulting-Group/webfrontend/actions/workflows/ci-cd.yml)
[![Integration Test](https://github.com/Exodos-Consulting-Group/webfrontend/actions/workflows/ci-cd.yml/badge.svg?job=integration-test)](https://github.com/Exodos-Consulting-Group/webfrontend/actions/workflows/ci-cd.yml)
[![License](https://img.shields.io/github/license/Exodos-Consulting-Group/webfrontend)](LICENSE)
[![Next.js](https://img.shields.io/badge/next.js-15.3.4-black?logo=next.js)](package.json)
[![Node.js Version](https://img.shields.io/badge/node.js-24-green?logo=node.js)](package.json)
[![TypeScript](https://img.shields.io/badge/typescript-5-blue?logo=typescript)](package.json)

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
