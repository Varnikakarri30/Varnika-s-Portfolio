#!/bin/bash

# Start the portfolio server from the root directory
# This ensures all relative paths work correctly

cd "$(dirname "$0")"
echo "Starting portfolio server..."
echo "Server running at: http://localhost:8000/html/index.html"
echo "Press Ctrl+C to stop"
python3 -m http.server 8000

