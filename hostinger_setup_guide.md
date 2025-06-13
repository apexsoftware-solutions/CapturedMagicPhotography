# Hostinger Deployment Guide - Captured Magic Photography

## Database Setup for Hostinger

### 1. Database Schema Import
Upload the `enhanced_database_schema.sql` file to your Hostinger MySQL/PostgreSQL database:

```sql
-- Enhanced schema includes full Amazon SES integration support
-- Tables: users, contact_inquiries, email_notifications
-- All tables include proper indexing and constraints
```

### 2. Environment Variables for Hostinger
Add these environment variables in your Hostinger hosting panel:

```bash
# Database Connection
DATABASE_URL=postgresql://username:password@localhost:5432/your_database_name
PGHOST=localhost
PGPORT=5432
PGUSER=your_username
PGPASSWORD=your_password
PGDATABASE=your_database_name

# Amazon SES Configuration (when ready)
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
SES_FROM_EMAIL=noreply@yourdomain.com
SES_REPLY_TO_EMAIL=info@yourdomain.com

# Application Settings
NODE_ENV=production
PORT=5000
```

### 3. Amazon SES Integration Features

The database now includes comprehensive SES tracking:

**Contact Inquiries Table Enhancements:**
- `ses_message_id`: Tracks each email sent through SES
- `ses_status`: Monitors delivery status (sent, delivered, bounced, complained)
- `email_sent`: Boolean flag for email confirmation
- `status`: Inquiry workflow status (pending, contacted, completed, archived)
- `notes`: Internal notes for client management
- `follow_up_date`: Scheduled follow-up tracking

**Email Notifications Table:**
- Complete audit trail of all emails sent
- Links back to contact inquiries
- Error tracking and delivery confirmation
- Support for multiple email types (welcome, followup, confirmation)

### 4. Database Migration Steps for Hostinger

1. **Create Database**: Set up PostgreSQL database in Hostinger control panel
2. **Import Schema**: Upload `enhanced_database_schema.sql`
3. **Configure Connection**: Update environment variables
4. **Test Connection**: Verify database connectivity

### 5. Amazon SES Setup Preparation

**DNS Configuration Required:**
- Verify your domain with Amazon SES
- Add DKIM records to your domain DNS
- Configure SPF and DMARC records

**SES Features Ready for Implementation:**
- Automatic email confirmations to clients
- Admin notifications for new inquiries
- Delivery status tracking and bounce handling
- Email template management
- Complaint and unsubscribe handling

### 6. File Structure for Hostinger Upload

```
website_files/
├── client/                 # React frontend build
├── server/                # Node.js backend
├── shared/                # Shared schemas and types
├── package.json           # Dependencies
├── enhanced_database_schema.sql  # Database structure
└── README.md             # Documentation
```

### 7. Production Deployment Checklist

- [ ] Database schema imported successfully
- [ ] Environment variables configured
- [ ] Node.js dependencies installed
- [ ] SSL certificate configured
- [ ] Domain DNS pointing to Hostinger
- [ ] Amazon SES domain verification (when implementing email)
- [ ] Contact form testing completed

The enhanced database structure ensures seamless integration with Amazon SES while maintaining compatibility with your current contact form functionality.