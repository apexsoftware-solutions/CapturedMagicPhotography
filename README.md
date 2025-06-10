# Captured Magic Photography

An elegant wedding and family photography portfolio website featuring sophisticated visual presentation and seamless navigation.

## Features

- **Responsive Design**: Optimized for all devices with Tailwind CSS
- **Interactive Portfolio**: Advanced image gallery with custom positioning controls
- **Dynamic Navigation**: Smooth scrolling between sections with custom navigation
- **Contact System**: Integrated contact form for client inquiries
- **Blog-Style About Page**: Dedicated page with detailed photographer information
- **Advanced Image Controls**: Precise positioning system with scale, positionX, and positionY controls

## Tech Stack

- **Frontend**: React.js with TypeScript
- **Styling**: Tailwind CSS with custom fonts
- **Routing**: Wouter for client-side navigation
- **Backend**: Express.js server
- **Database**: PostgreSQL with Drizzle ORM
- **Development**: Vite for fast development and hot reloading

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Access the Application**
   - Open browser to `http://localhost:5000`
   - Backend and frontend run on the same port

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   └── lib/           # Utilities and configurations
├── server/                # Express backend
├── shared/                # Shared types and schemas
└── attached_assets/       # Photography portfolio images
```

## Key Components

- **Hero Section**: Full-width introduction with call-to-action
- **Services Grid**: Photography session types with custom image positioning
- **Portfolio Gallery**: Interactive image showcase with lightbox modal
- **Testimonials**: Client reviews with balanced visual layout
- **Contact Form**: Inquiry submission with validation

## Image Management

Images support advanced positioning controls:
- **positionX**: 0-100 (horizontal positioning)
- **positionY**: 0-100 (vertical positioning)  
- **scale**: Percentage-based sizing (100 = default)

## Deployment

The application is configured for Replit Deployments with automatic TLS and health checks.

---

*Built for professional photography portfolios with emphasis on visual storytelling and user experience.*