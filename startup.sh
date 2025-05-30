#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Navigate to the script's directory to ensure commands run in the project root.
# This assumes startup.sh is in the project root.
echo "Changing to script directory: $(dirname "$0")"
cd "$(dirname "$0")" || exit

# Install dependencies
echo "Installing project dependencies..."
npm install

# Build the application (e.g., Next.js)
echo "Building the application..."
npm run build

# Start the application (port is configured in package.json's start script)
echo "Starting the application on port 9000..."
PORT=9000 node .next/standalone/server.js
