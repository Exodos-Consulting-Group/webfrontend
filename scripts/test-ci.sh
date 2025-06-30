#!/bin/bash

# Local CI/CD test script
# This script mimics what the GitHub Actions workflow does

set -e

echo "🧪 Running local CI/CD pipeline test..."

# Step 1: Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Step 2: Run linting
echo "🔍 Running ESLint..."
npm run lint

# Step 3: Run type checking
echo "🔍 Running TypeScript checks..."
npm run type-check

# Step 4: Build application
echo "🏗️ Building application..."
npm run build

# Step 5: Build Docker image
echo "🐳 Building Docker image..."
docker build -t webfrontend-test .

# Step 6: Test Docker container
echo "🧪 Testing Docker container..."
docker run -d -p 3001:3000 --name webfrontend-test-container webfrontend-test

# Wait for startup
echo "⏳ Waiting for container to start..."
sleep 10

# Health check
if curl -f -s http://localhost:3001 > /dev/null; then
    echo "✅ Container health check passed"
else
    echo "❌ Container health check failed"
    docker logs webfrontend-test-container
    docker stop webfrontend-test-container
    docker rm webfrontend-test-container
    exit 1
fi

# Cleanup
echo "🧹 Cleaning up..."
docker stop webfrontend-test-container
docker rm webfrontend-test-container
docker rmi webfrontend-test

echo "🎉 Local CI/CD pipeline test completed successfully!"
