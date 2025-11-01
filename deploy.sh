#!/bin/bash
set -e  # stop on first error
set -x  # show each command before running

echo "🚀 Building and deploying Kusuma's website..."

npm run build

git add .
git commit -m "update site"
git push origin main
git push origin `git subtree split --prefix build main`:gh-pages --force

echo "✅ Deployment complete! Visit: https://kusuma2.github.io"

