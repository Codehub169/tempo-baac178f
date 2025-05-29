#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Navigate to the script's directory (optional, assumes execution from project root)
# cd "$(dirname "$0")"

# Install dependencies
echo "Installing project dependencies..."
npm install

# Build the Next.js application
echo "Building the Next.js application..."
npm run build

# Start the Next.js application
# The package.json start script already specifies port 9000.
echo "Starting the Next.js application on port 9000..."
npm run start