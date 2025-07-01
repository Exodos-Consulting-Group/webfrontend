# Exodos Web Frontend

[![Test & Quality Checks](https://github.com/Exodos-Consulting-Group/webfrontend/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/Exodos-Consulting-Group/webfrontend/actions/workflows/ci-cd.yml)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/next.js-15.3.4-black?logo=next.js)](package.json)
[![Node.js Version](https://img.shields.io/badge/node.js-24-green?logo=node.js)](package.json)
[![TypeScript](https://img.shields.io/badge/typescript-5-blue?logo=typescript)](package.json)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-3.4.1-06B6D4?logo=tailwindcss)](package.json)
[![Docker Image Size](https://img.shields.io/docker/image-size/andrewpark93/exodos-frontend/latest?logo=docker)](https://hub.docker.com/r/andrewpark93/exodos-frontend)
[![Last Commit](https://img.shields.io/github/last-commit/Exodos-Consulting-Group/webfrontend?logo=github)](https://github.com/Exodos-Consulting-Group/webfrontend/commits)
[![Repo Size](https://img.shields.io/github/repo-size/Exodos-Consulting-Group/webfrontend?logo=github)](https://github.com/Exodos-Consulting-Group/webfrontend)

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

[![Pipeline Status](https://github.com/Exodos-Consulting-Group/webfrontend/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/Exodos-Consulting-Group/webfrontend/actions/workflows/ci-cd.yml)

GitHub Actions pipeline runs on push to `main`/`develop` with the following jobs:

**🧪 Test & Quality Checks**
- ESLint code linting
- TypeScript type checking  
- Production build test

**🐳 Docker Build**
- Multi-platform Docker image build (linux/amd64)
- Push to Docker Hub registry
- Build cache optimization

**🛡️ Security Scan**
- Trivy vulnerability scanning
- Critical/High severity blocking
- SARIF report generation

**🔧 Integration Test**
- Container startup validation
- Health check endpoints
- Application functionality tests

Pipeline ensures code quality, security, and deployability before any release. 
