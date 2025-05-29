#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Navigate to the script's directory to ensure commands run in the project root.
echo "Changing to script directory: $(dirname "$0")"
cd "$(dirname "$0")" || exit

# Install dependencies
echo "Installing project dependencies..."
npm install

# Build the application (e.g., Next.js)
echo "Building the application..."
npm run build

# Start the application on port 9000
echo "Starting the application on port 9000 (via PORT=9000 npm run start)..."
PORT=9000 npm run start
