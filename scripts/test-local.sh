#!/bin/bash

# Local testing script
echo "🚀 Starting local test environment..."

# Kill any existing processes on port 3000
echo "🔍 Checking for existing processes on port 3000..."
if lsof -ti:3000 > /dev/null 2>&1; then
    echo "⚠️  Port 3000 is in use. Stopping existing processes..."
    kill -9 $(lsof -ti:3000) 2>/dev/null || true
    sleep 2
fi

# Build the application
echo "🔨 Building application..."
npm run build

# Start the application in background
echo "🌐 Starting application on port 3000..."
npm start &
SERVER_PID=$!

# Wait for server to be ready
echo "⏳ Waiting for server to be ready..."
npx wait-on http://localhost:3000 --timeout 30000

if [ $? -eq 0 ]; then
    echo "✅ Server is ready!"
    
    # Run tests
    echo "🧪 Running Playwright tests..."
    npm run test
    
    # Clean up
    echo "🧹 Cleaning up..."
    kill $SERVER_PID 2>/dev/null || true
    echo "✨ Done!"
else
    echo "❌ Server failed to start"
    kill $SERVER_PID 2>/dev/null || true
    exit 1
fi
