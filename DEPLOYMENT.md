# Deployment Guide - Yorke Structures Limited Website

## Issue Resolution

The deployment error occurred because the `.replit` configuration file contains development commands (`npm run dev`) instead of production commands. This document provides the complete solution.

## Fixed Configuration

### Production Build Process
The application now has proper production build configuration:

1. **Frontend Build**: Vite builds the React application to `dist/public/`
2. **Backend Build**: ESBuild bundles the Node.js server to `dist/index.js`
3. **Static Assets**: All images, styles, and assets are optimized and included

### Production Commands
- **Build**: `npm run build` (builds both frontend and backend)
- **Start**: `npm start` (runs the production server)

## Deployment Steps

### Method 1: Using Replit Deployment (Recommended)

1. Click the **Deploy** button in the Replit interface
2. The system should automatically:
   - Run `npm run build` to build the application
   - Run `npm start` to start the production server
   - Use `NODE_ENV=production` environment

If the deployment interface shows an error about "dev command":
- The deployment system needs to be configured to use production commands
- Contact Replit support or use the deployment settings to override the commands

### Method 2: Manual Production Setup

If automatic deployment fails, you can test production mode manually:

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

3. Or use the included script:
   ```bash
   ./start-production.sh
   ```

## Environment Variables Required

For successful deployment, ensure these environment variables are set:

- `DATABASE_URL`: PostgreSQL connection string (from Neon Database)
- `NODE_ENV`: Set to `production`
- `PORT`: Server port (default: 5000)

## Verification

After deployment, verify:

- ✅ Website loads at your Replit deployment URL
- ✅ All pages navigate correctly
- ✅ Contact forms submit successfully
- ✅ Project images display properly
- ✅ Static assets (CSS, JS) load from CDN

## Technical Details

### Production vs Development Mode

**Development Mode** (current .replit setup):
- Uses `npm run dev`
- Hot module replacement
- TypeScript compilation on-the-fly
- Vite dev server

**Production Mode** (proper deployment):
- Uses `npm run build` + `npm start`
- Pre-compiled static assets
- Optimized bundles
- Express static file serving

### File Structure After Build
```
dist/
├── index.js          # Bundled Node.js server
└── public/           # Static frontend assets
    ├── index.html
    ├── assets/       # CSS, JS, images
    └── favicon files
```

## Support

If deployment continues to fail:
1. Verify the build completes successfully: `npm run build`
2. Test production server locally: `npm start`
3. Check all environment variables are set
4. Contact Replit support for deployment configuration assistance

The application is fully ready for production deployment with all optimizations and proper configuration in place.