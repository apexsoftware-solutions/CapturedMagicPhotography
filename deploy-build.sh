#!/bin/bash

# Deploy Build Script for Hostinger
# This script ensures EmailJS environment variables are embedded in the production build

echo "🚀 Building for Hostinger deployment..."

# Check if environment variables are set
if [ -z "$VITE_EMAILJS_SERVICE_ID" ] || [ -z "$VITE_EMAILJS_TEMPLATE_ID" ] || [ -z "$VITE_EMAILJS_PUBLIC_KEY" ]; then
  echo "❌ ERROR: EmailJS environment variables not set!"
  echo "Please set the following environment variables:"
  echo "  VITE_EMAILJS_SERVICE_ID"
  echo "  VITE_EMAILJS_TEMPLATE_ID"
  echo "  VITE_EMAILJS_PUBLIC_KEY"
  exit 1
fi

echo "✅ Environment variables found"
echo "📧 Service ID: ${VITE_EMAILJS_SERVICE_ID:0:8}..."

# Build with explicit environment variables
echo "🔨 Building with embedded EmailJS credentials..."
VITE_EMAILJS_SERVICE_ID=$VITE_EMAILJS_SERVICE_ID \
VITE_EMAILJS_TEMPLATE_ID=$VITE_EMAILJS_TEMPLATE_ID \
VITE_EMAILJS_PUBLIC_KEY=$VITE_EMAILJS_PUBLIC_KEY \
npm run build

if [ $? -eq 0 ]; then
  echo "✅ Build completed successfully!"
  echo "📁 Files ready for Hostinger deployment in: dist/public/"
  echo "📊 Build size: $(du -sh dist/public | cut -f1)"
  
  # Verify EmailJS variables are embedded
  if grep -q "$VITE_EMAILJS_SERVICE_ID" dist/public/assets/index-*.js; then
    echo "✅ EmailJS credentials verified in build"
  else
    echo "⚠️  WARNING: EmailJS credentials not found in build"
  fi
else
  echo "❌ Build failed!"
  exit 1
fi