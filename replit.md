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
**Important**: The `.replit` file currently uses development mode. For proper deployment:
1. Use Replit's deployment interface (Deploy button)
2. The system should automatically detect the production configuration:
   - Build command: `npm run build`
   - Run command: `npm start`
3. If deployment fails with "dev command" error, ensure:
   - `NODE_ENV=production` is set
   - The build process completes successfully
   - Static files are served from `dist/public`

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