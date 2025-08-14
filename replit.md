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

**Major Update**: Complete restructuring and alignment of the Management section across the website with unified styling and updated team profiles.

**Task A - Management Page Alignment:**
- **Adopted About Page Styling**: Used identical container, grid, cards, buttons, and breadcrumb components
- **Unified Theme Tokens**: Added global CSS custom properties for consistency
- **Background**: Changed to #fff with proper shadows (0 1px 3px rgba(0,0,0,.08)) and borders
- **Cards**: 1px solid #e8eaed border, 6px radius, professional styling
- **Alternating Layout**: Maintained left-right-left-right-left portrait pattern
- **Responsive Design**: Mobile-friendly with proper image scaling (520px desktop, 380px mobile)

**Task B - Dr. Robert T. Yorke Biography Update:**
- **Section Merger**: Combined "Career & Business Foundation" into "Early Life & Education"
- **New Section Title**: "Early Life, Education and Career Foundation"
- **Content Integration**: Merged biography with chronological flow from 1932-1972
- **Title Standardization**: Changed from "Founder & Chairman Emeritus" to "Founder" site-wide
- **Section Removal**: Deleted duplicate "Career & Business Foundation" section

**Task C - Content Updates:**
1. **Jacqueline Yorke Westcott**: Added BEng (Hons) Degree in Civil Engineering to bio
2. **Khadija Bourne Murray**: Changed role from "Safety Officer" to "QHSE Manager" with updated bio

### Dr. Robert T. Yorke Chaconia Gold Award Enhancement ✅ **COMPLETE**

**Enhancement**: Expanded the Chaconia Medal Gold section on Dr. Robert T. Yorke's page with comprehensive details about this prestigious national award.

**Additions Made:**
- **Detailed Award Citation**: Full official recognition details from August 31, 2011
- **Industry Leadership**: Recognition as first local structural steel manufacturer
- **Energy Sector Impact**: Contributions to methanol, urea, ammonia, steel, and LNG plants at Point Lisas and Point Fortin
- **Community Service**: Church and school construction projects, student sponsorship programs
- **Educational Support**: Annual prizes to UWI Faculty of Engineering students for 15+ years
- **Board Service**: Directorships on National Gas Company, National Petroleum Company, First Citizens Bank
- **Advisory Roles**: Property Advisor to Anglican Diocese of Trinidad and Tobago
- **Structured Layout**: Organized into clear subsections with proper hierarchy and styling

### Comprehensive Website Redesign & Visual Unification ✅ **COMPLETE**

**Major Update**: Complete visual redesign implementing modern design system across all legacy pages to unify the website's visual language and improve user engagement.

**Phase 1 - Modern Design Framework:**
- **Design System**: Created comprehensive modern CSS framework with unified theme tokens
- **Modern CSS Classes**: Implemented `.modern-page`, `.modern-container`, `.modern-card`, `.page-title`, `.section-title`, `.subsection-title` system
- **Layout System**: Added responsive grid classes (`.two-column-grid`, `.three-column-grid`, `.alternating-grid`)
- **Typography**: Unified heading hierarchy with consistent sizing and colors
- **Interactive Elements**: Modern button system with hover effects and transitions
- **Color Consistency**: Replaced beige backgrounds with clean white/light-grey throughout

**Phase 2 - Page Modernization:**

**About Us Page Redesign:**
- **Background**: Changed from beige (`yorke-beige`) to modern white system
- **Header**: Centered page title with modern typography
- **Company Profile**: Two-column layout with professional image placement
- **Leadership Section**: Three-column grid with clickable cards
- **Quality Management**: Clean card-based layout with modern spacing

**Quality Management Page Redesign:**
- **Modern Cards**: Converted all sections to unified card system
- **Typography**: Applied consistent heading hierarchy (page-title, section-title, subsection-title)
- **Content Structure**: Improved readability with proper text colors and spacing
- **BSI Section**: Enhanced with proper iconography and bullet formatting
- **Responsive Design**: Mobile-first approach with proper breakpoints

**Dr. Robert T. Yorke Page Redesign:**
- **Layout**: Two-column responsive grid for biography sections
- **Visual Hierarchy**: Consistent subsection titles and content formatting
- **Business Ventures**: Enhanced section with two-column layout for Mount Irvine Hotel
- **Awards Section**: Structured layout for Chaconia Gold award details
- **Navigation**: Modern button styling for back navigation
- **Content**: Updated all text colors to use modern gray-700 system

**Technical Implementation:**
- **CSS Framework**: Created comprehensive design system in `client/src/index.css`
- **Component Consistency**: Replaced all legacy Card/CardHeader/CardContent with modern equivalents
- **Responsive Grid**: Mobile-responsive with automatic column adjustment
- **Typography Scale**: Standardized font sizes, weights, and line heights
- **Color Palette**: Unified text colors using Tailwind gray scale
- **Spacing System**: Consistent padding, margins, and section spacing
- **Shadow System**: Subtle shadows for depth and modern appearance

**Design Benefits:**
- **Visual Consistency**: All pages now share identical visual language
- **Improved Readability**: Better typography and spacing throughout
- **Mobile Optimization**: Responsive design works seamlessly across devices
- **Professional Appearance**: Modern, clean aesthetic matching industry standards
- **User Experience**: Improved navigation flow and visual hierarchy
- **Brand Cohesion**: Maintains Yorke Structures orange accent while modernizing overall look

**Files Updated:**
- `client/src/index.css` (comprehensive design system)
- `client/src/pages/about.tsx` (complete modernization)
- `client/src/pages/quality.tsx` (complete modernization)
- `client/src/pages/robert-yorke.tsx` (complete modernization)
- `client/src/pages/management.tsx` (already modern from previous update)

**New Team Structure:**
1. Dr. Robert T. Yorke - Founder
2. Jacqueline Yorke Westcott - Executive Chairman, YSL and MIBR
3. Simon H. Westcott - Managing Director
4. Kenneth Prince - Contracts Administrator
5. Khadija Bourne Murray - QHSE Manager

**Technical Implementation:**
- **Unified Theme Tokens**: Added YSL CSS custom properties for site-wide consistency
- **Component Integration**: Reused About page Card, Button, Link components from shadcn/ui
- **Data Centralization**: Created `/data/leadership.json` as single source of truth with fallback data
- **Mobile-responsive**: CSS Grid with alternating column arrangements
- **Accessibility**: Proper alt text, heading structure, and navigation

**Files Modified:**
- `client/src/pages/management.tsx` (complete redesign with About page styling)
- `client/src/pages/robert-yorke.tsx` (section merger and title updates)
- `client/src/pages/about.tsx` (updated team references and titles)
- `client/src/index.css` (added unified theme tokens and management styling)
- `data/leadership.json` (created centralized leadership data)
- Added: `MANAGEMENT_RESTRUCTURE_CHANGELOG.md` (comprehensive documentation)