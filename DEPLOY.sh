#!/bin/bash

echo "🚀 Vercel Deployment Helper"
echo "=========================="
echo ""

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
    echo ""
fi

echo "✅ Vercel CLI is ready!"
echo ""
echo "📝 Choose deployment method:"
echo "1. Deploy via Dashboard (Recommended - Easier)"
echo "2. Deploy via CLI (Terminal)"
echo ""
read -p "Enter choice (1 or 2): " choice

if [ "$choice" == "1" ]; then
    echo ""
    echo "🌐 Opening Vercel Dashboard..."
    echo "Steps:"
    echo "1. Import repository: Varnikakarri30/Varnika-s-Portfolio"
    echo "2. For Frontend: Set Root Directory = 'html'"
    echo "3. For Backend: Create new project, Root Directory = 'server'"
    echo ""
    open "https://vercel.com/new"
elif [ "$choice" == "2" ]; then
    echo ""
    echo "🔐 Logging into Vercel..."
    vercel login
    
    echo ""
    echo "📦 Deploying Frontend..."
    cd html
    vercel --prod
    
    echo ""
    echo "📦 Deploying Backend..."
    cd ../server
    vercel --prod
    
    echo ""
    echo "✅ Deployment complete!"
else
    echo "Invalid choice. Please run the script again."
fi

