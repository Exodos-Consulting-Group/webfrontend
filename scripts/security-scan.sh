#!/bin/bash

# Local security scanning script using Trivy
# This script scans your Docker image for vulnerabilities

set -e

IMAGE_NAME="webfrontend-security-test"
REGISTRY_IMAGE="andrewpark93/exodos-frontend:latest"

echo "🛡️ Running local security scan..."

# Check if Trivy is installed
if ! command -v trivy &> /dev/null; then
    echo "📦 Installing Trivy..."
    
    # Install Trivy based on OS
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        if command -v brew &> /dev/null; then
            brew install trivy
        else
            echo "❌ Please install Homebrew first: https://brew.sh/"
            exit 1
        fi
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux
        curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh -s -- -b /usr/local/bin
    else
        echo "❌ Unsupported OS. Please install Trivy manually: https://aquasecurity.github.io/trivy/"
        exit 1
    fi
fi

echo "🐳 Building local Docker image..."
docker build -t $IMAGE_NAME .

echo "🔍 Scanning for CRITICAL and HIGH vulnerabilities..."
trivy image --severity CRITICAL,HIGH --exit-code 1 $IMAGE_NAME

echo "📊 Full vulnerability report..."
trivy image --severity CRITICAL,HIGH,MEDIUM,LOW $IMAGE_NAME

echo "💾 Saving detailed report..."
trivy image --format json --output security-report.json $IMAGE_NAME

echo "🧹 Cleaning up..."
docker rmi $IMAGE_NAME

echo "✅ Security scan completed!"
echo "📄 Detailed report saved to: security-report.json"
