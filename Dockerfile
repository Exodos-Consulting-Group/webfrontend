# Pin the Node.js version for all stages.
FROM lts-alpine3.21 AS base

# A handy trick for better cache utilization:
# Install dependencies only when package.json
# or package-lock.json has changed.
FROM base AS deps
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Install all dependencies (including dev) for building
FROM base AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci && npm cache clean --force
COPY . .

# The build command produces a "standalone" version
# of the application in the .next/standalone directory.
RUN npm run build

# Test stage with dev dependencies for CI/CD
FROM builder AS test
WORKDIR /app
# This stage has all dependencies and source code for testing

# Production image contains only the "standalone" build.
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy public assets
COPY --from=builder /app/public ./public

# Copy the standalone build
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

EXPOSE 3000

# Avoid using `npm start` in the CMD or ENTRYPOINT
# because it introduces an extra shell sub-process,
# which often breaks SIGTERM signal propagation.
CMD ["node", "server.js"]
