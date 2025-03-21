#!/bin/bash

# Install dependencies
npm install

# Build assets
npm run build

# Copy .env.production to .env
cp .env.production .env

# Generate application key
php artisan key:generate

# Clear and cache config
php artisan config:clear
php artisan config:cache

# Clear and cache routes
php artisan route:clear
php artisan route:cache

# Clear and cache views
php artisan view:clear
php artisan view:cache

# Optimize autoloader
composer dump-autoload --optimize

# Deploy to Netlify
netlify deploy --prod 