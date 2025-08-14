# Yorke Structures Limited Website - Replit.md

## Overview

This is a modern React-based website for Yorke Structures Limited, the premier structural engineering and steel fabrication company in the Caribbean. The application is built as a full-stack solution with a Node.js/Express backend and React frontend, designed to replace their legacy Joomla 1.5 website while preserving brand identity and key content.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between client and server code:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom Yorke Structures brand colors
- **UI Components**: Radix UI components with shadcn/ui styling
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript throughout
- **API**: RESTful API with JSON responses
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Connect-pg-simple for PostgreSQL-based sessions

## Key Components

### Database Schema (shared/schema.ts)
- **Users Table**: Authentication and user management
- **Contact Messages**: Form submissions from the website
- **News Articles**: Company news and updates
- **Projects**: Portfolio of completed projects

### Core Pages
- **Home**: Hero slideshow, welcome section, news feed, sidebar
- **About**: Company profile, history, key personnel
- **Products & Services**: Detailed service offerings
- **Projects**: Project portfolio with filtering
- **Contact**: Contact form and company information

### UI Components
- Custom slideshow for project showcases
- Responsive navigation with mobile menu
- Contact forms with validation
- Sidebar with login, search, and company info modules

## Data Flow

1. **Client requests** are handled by the Express server
2. **API routes** in `/server/routes.ts` handle business logic
3. **Database operations** are abstracted through the storage layer
4. **Frontend queries** use TanStack Query for caching and state management
5. **Form submissions** are validated using Zod schemas

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (PostgreSQL serverless)
- **Validation**: Zod for schema validation
- **UI Library**: Radix UI primitives
- **Icons**: Lucide React
- **Forms**: React Hook Form with Hookform Resolvers

### Development Tools
- **Drizzle Kit**: Database migrations and schema management
- **ESBuild**: Server-side bundling for production
- **PostCSS**: CSS processing with Tailwind

## Deployment Strategy

### Development
- Run with `npm run dev` using tsx for TypeScript execution
- Vite dev server for hot module replacement
- Database migrations with `npm run db:push`

### Production Build
1. Frontend built with Vite to `dist/public`
2. Backend bundled with ESBuild to `dist/index.js`
3. Served as static files + API routes from Express

### Production Deployment
The application is configured for production deployment with the following commands:
- **Build**: `npm run build` - Builds both frontend and backend
- **Start**: `npm start` - Starts the production server
- **Production Script**: `./start-production.sh` - Complete production startup

### Replit Deployment Configuration
**Status**: ✅ **Fixed for Production Deployment**

The deployment configuration has been updated to resolve Cloud Run compatibility issues:

1. **Build Command**: Updated to array format `["npm", "run", "build"]`
2. **Run Command**: Updated to array format `["npm", "start"]` 
3. **Deployment Target**: Set to `autoscale` for production scaling
4. **Environment**: `NODE_ENV=production` configured
5. **Server Binding**: Changed from `127.0.0.1` to `0.0.0.0` for Cloud Run compatibility
6. **Health Check**: Added root endpoint `/` that responds with server status
7. **Verified**: Both build and production start commands tested successfully

**Recent Deployment Fixes (August 12, 2025)**:
- Fixed server binding to use `0.0.0.0` instead of `127.0.0.1` for container compatibility
- ✅ **FIXED: Preview/Development Issue** - Moved health check from root path `/` to `/health` and `/api/health`
- Root path `/` now properly serves the React application via Vite middleware in development
- Health check endpoints still available at `/health` and `/api/health` for deployment monitoring
- Maintains compatibility with existing frontend routing while providing deployment health checks

**Deployment Steps**:
1. Click the **Deploy** button in Replit interface
2. System will automatically execute production commands
3. Health checks will verify server is responding on root endpoint
4. Application will be served from `dist/public` with optimized assets

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment mode (development/production)
- `PORT`: Server port (default: 5000)

### Key Architectural Decisions

**Database Choice**: PostgreSQL with Drizzle ORM was chosen for:
- Type safety with TypeScript
- Easy migrations and schema management
- Serverless compatibility with Neon Database

**Styling Approach**: Tailwind CSS with custom brand variables because:
- Rapid development with utility classes
- Easy theming with CSS custom properties
- Consistent design system

**State Management**: TanStack Query for server state because:
- Automatic caching and synchronization
- Built-in loading and error states
- Optimistic updates support

**Routing**: Wouter instead of React Router for:
- Smaller bundle size
- Simpler API
- Sufficient features for this project

**Component Library**: Radix UI + shadcn/ui because:
- Accessible components out of the box
- Customizable styling
- Consistent API patterns

The application maintains the original site's brand identity (orange #C55901, BSI certification prominence) while providing a modern, responsive user experience across all devices.

## Recent Changes (August 14, 2025)

### Management Section Restructuring ✅ **COMPLETE**

**Major Update**: Complete restructuring of the Management section across the website with modern design and updated team profiles.

**Key Changes:**
- **New Management Page Design**: Implemented alternating portrait layout with role-based color coding system
- **Team Structure Update**: Updated to 5 current team members with standardized bios (120-150 words each)
- **Removed Legacy Profiles**: Eliminated 5 outdated management profiles with proper 301 redirects
- **Enhanced Accessibility**: WCAG AA compliance with proper contrast ratios and screen reader support
- **SEO Optimization**: Added structured data (JSON-LD) and optimized meta tags for all team members

**New Team Structure:**
1. Dr. Robert T. Yorke - Founder (Bronze accent #7A3E00)
2. Jacqueline Yorke Westcott - Executive Chairman (Teal accent #004F6E)  
3. Simon H. Westcott - Managing Director (Steel Blue accent #2C3E50)
4. Kenneth Prince - Contracts Administrator (Royal Violet accent #5B3A8E)
5. Khadija Bourne Murray - Safety Officer (Safety Green #1B6E20)

**Technical Implementation:**
- Role-based CSS custom properties system
- Mobile-responsive alternating layout
- 301 redirects for all removed profile URLs
- Updated About page references
- Dark mode compatibility

**Files Modified:**
- `client/src/pages/management.tsx` (complete redesign)
- `client/src/pages/about.tsx` (updated team references)
- `server/routes.ts` (added redirects)
- Added: `MANAGEMENT_RESTRUCTURE_CHANGELOG.md`