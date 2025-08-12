#!/bin/bash

# Production startup script for Yorke Structures Limited website
echo "Starting production server..."

# Set production environment
export NODE_ENV=production

# Build the application
echo "Building application..."
npm run build

# Start the production server
echo "Starting production server on port ${PORT:-5000}..."
node dist/index.js