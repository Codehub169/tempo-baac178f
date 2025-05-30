#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Navigate to the script's directory to ensure commands run in the project root.
# This assumes startup.sh is in the project root.
echo "Changing to script directory: $(dirname "$0")"
cd "$(dirname "$0")" || exit

# Install dependencies
# Using npm install. For production, consider 'npm ci' if a package-lock.json is present 
# and strict reproducibility is key. 'npm install' is used here for broader compatibility.
echo "Installing project dependencies..."
npm install

# Build the application (e.g., Next.js)
# This will use the 'build' script defined in package.json.
echo "Building the application..."
npm run build

# Start the application, explicitly setting port to 9000 for the standalone server.
# This is the correct way to run a Next.js app with output: 'standalone' as configured in next.config.js.
echo "Starting the application on port 9000..."
PORT=9000 node .next/standalone/server.js
