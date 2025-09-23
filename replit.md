# replit.md

## Overview

Captured Magic Photography is an elegant family photography portfolio website that showcases professional photography services. The application features a sophisticated visual presentation with interactive portfolio galleries, smooth navigation, and a contact management system. Built as a full-stack web application, it serves as both a marketing platform and client inquiry management tool for a photography business based in Fredericksburg, VA.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React.js with TypeScript for type safety and modern component architecture
- **Styling**: Tailwind CSS with custom design system using CSS variables for consistent theming
- **Routing**: Wouter for lightweight client-side navigation between home and about pages
- **UI Components**: Radix UI primitives with custom styling for accessible, professional components
- **State Management**: React Query (TanStack Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod schema validation for type-safe form processing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **API Design**: RESTful endpoints for contact form submissions and inquiry management
- **Database Integration**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Development**: Full-stack development server that serves both API and static assets

### Data Storage Solutions
- **Primary Database**: PostgreSQL for production data persistence
- **ORM**: Drizzle ORM with schema definitions in TypeScript
- **Database Schema**: 
  - Contact inquiries table with comprehensive tracking fields
  - Email notifications table for communication history
  - User management table for potential admin features
- **Session Management**: Built-in session handling with PostgreSQL session store

### Authentication and Authorization
- **Current State**: Basic user schema implemented but not actively used in frontend
- **Future Capability**: Ready for admin authentication to manage contact inquiries
- **Session Store**: PostgreSQL-based session management configured

### External Dependencies
- **Email Service Integration**: Prepared for Amazon SES integration with tracking fields
- **Font Management**: Google Fonts integration for typography (Dancing Script, Playfair Display, Lato)
- **Custom Fonts**: Local Gravity2 font family for brand-specific typography
- **Asset Management**: Local image storage with optimized delivery through Vite
- **Development Tools**: 
  - ESBuild for production bundling
  - TypeScript for type checking
  - Replit-specific development enhancements

### Key Architectural Decisions
- **Monorepo Structure**: Shared schema and types between client and server for consistency
- **Type Safety**: Full TypeScript implementation across frontend, backend, and shared modules
- **Component Architecture**: Modular component design with reusable UI primitives
- **Image Optimization**: Custom image positioning controls (scale, positionX, positionY) for precise gallery layouts
- **Progressive Enhancement**: Graceful fallbacks for image loading and error states
- **Performance**: Lazy loading, smooth scrolling, and parallax effects for enhanced user experience