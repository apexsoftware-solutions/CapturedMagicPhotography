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
- **Email Service Integration**: EmailJS browser-based email service for contact form submissions (no backend required)
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
- **Browser-Based Email**: EmailJS integration eliminates need for backend email server, making deployment easier

## EmailJS Setup Instructions

The contact form uses EmailJS for browser-based email sending, which works perfectly with Hostinger's shared hosting since no backend server is required.

### Prerequisites
1. EmailJS account (free tier available)
2. Email template configured in EmailJS
3. Three environment variables

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address
3. Note your **User ID** (this will be your Public Key)

### Step 2: Connect Your Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (easiest for personal use)
   - **Outlook/Hotmail**
   - **Yahoo Mail**
   - **Custom SMTP** (for business email)
4. Follow the setup wizard to connect your email account
5. Note your **Service ID** (e.g., "gmail_service")

### Step 3: Create Email Template
1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use this template structure:
   ```html
   Subject: New Photography Inquiry - {{fullName}}
   
   From: {{email}}
   To: kim@capturedmagicfxbg.com
   
   New inquiry details:
   
   Name: {{firstName}} {{lastName}}
   Email: {{email}}
   Phone: {{phone}}
   Session Type: {{sessionType}}
   Preferred Date: {{eventDate}}
   
   Message:
   {{message}}
   
   Submitted: {{submissionDate}}
   ```
4. Save the template and note your **Template ID**

### Step 4: Configure Environment Variables
Add these three variables to your project:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here  
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Step 5: Deploy to Hostinger
1. Upload your built website files to Hostinger
2. Add the environment variables through Hostinger's control panel or include them in your build process
3. The contact form will now send emails directly from the browser

### Benefits of EmailJS Integration
- ✅ **No Backend Required**: Works with any static hosting (Hostinger, Netlify, Vercel)
- ✅ **Reliable Delivery**: Uses established email providers (Gmail, Outlook, etc.)
- ✅ **Free Tier Available**: Up to 200 emails/month on free plan
- ✅ **Real-time Sending**: Immediate email delivery without server processing
- ✅ **Error Handling**: Graceful fallbacks and user feedback

### Troubleshooting
- **Missing Environment Variables**: Check that all three VITE_ variables are set
- **Email Not Sending**: Verify your EmailJS service is properly connected
- **Template Errors**: Ensure template variable names match the form fields
- **Spam Issues**: Consider adding SPF/DKIM records to your domain

### Development vs Production
- Development: Environment variables can be set in `.env.local`
- Production: Set variables through your hosting provider's control panel