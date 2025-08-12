#!/bin/bash

# Deployment script for Yorke Structures Limited
echo "🚀 Starting deployment process..."

# Set production environment variables
export NODE_ENV=production
export PORT=${PORT:-5000}

echo "📦 Installing dependencies..."
npm ci --only=production

echo "🔨 Building application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🌟 Starting production server..."
    npm start
else
    echo "❌ Build failed!"
    exit 1
fi