import { Resend } from 'resend';
import type { ContactInquiry } from '@shared/schema';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY environment variable is required');
}

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailTemplate {
  to: string;
  subject: string;
  html: string;
}

export class EmailService {
  private static instance: EmailService;
  
  private constructor() {}
  
  static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  /**
   * Send a notification email to the photographer when a new contact inquiry is submitted
   */
  async sendContactNotification(inquiry: ContactInquiry): Promise<{ messageId: string | null; success: boolean; error?: string }> {
    try {
      const emailTemplate = this.createContactNotificationEmail(inquiry);
      
      const { data, error } = await resend.emails.send({
        from: 'website@capturedmagicphoto.com', // Use your verified domain
        to: 'kimberly@capturedmagicphoto.com', // Photographer's email
        subject: emailTemplate.subject,
        html: emailTemplate.html,
      });

      if (error) {
        console.error('Resend email error:', error);
        return { messageId: null, success: false, error: error.message };
      }

      return { messageId: data?.id || null, success: true };
    } catch (error) {
      console.error('Email service error:', error);
      return { 
        messageId: null, 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      };
    }
  }

  /**
   * Send a confirmation email to the client after they submit the contact form
   */
  async sendClientConfirmation(inquiry: ContactInquiry): Promise<{ messageId: string | null; success: boolean; error?: string }> {
    try {
      const emailTemplate = this.createClientConfirmationEmail(inquiry);
      
      const { data, error } = await resend.emails.send({
        from: 'kimberly@capturedmagicphoto.com', // Photographer's email
        to: inquiry.email,
        subject: emailTemplate.subject,
        html: emailTemplate.html,
      });

      if (error) {
        console.error('Resend email error:', error);
        return { messageId: null, success: false, error: error.message };
      }

      return { messageId: data?.id || null, success: true };
    } catch (error) {
      console.error('Email service error:', error);
      return { 
        messageId: null, 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      };
    }
  }

  private createContactNotificationEmail(inquiry: ContactInquiry): EmailTemplate {
    const sessionTypeFormatted = inquiry.sessionType.charAt(0).toUpperCase() + inquiry.sessionType.slice(1);
    
    return {
      to: 'kimberly@capturedmagicphoto.com',
      subject: `New Photography Inquiry - ${inquiry.firstName} ${inquiry.lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
            .content { background: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #495057; }
            .value { margin-top: 5px; }
            .highlight { background: #fff3cd; padding: 10px; border-radius: 4px; border-left: 4px solid #ffc107; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>New Photography Inquiry</h2>
            <p>You've received a new inquiry through your website!</p>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="label">Client Name:</div>
              <div class="value">${inquiry.firstName} ${inquiry.lastName}</div>
            </div>
            
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${inquiry.email}">${inquiry.email}</a></div>
            </div>
            
            ${inquiry.phone ? `
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value"><a href="tel:${inquiry.phone}">${inquiry.phone}</a></div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">Session Type:</div>
              <div class="value">${sessionTypeFormatted}</div>
            </div>
            
            ${inquiry.eventDate ? `
            <div class="field">
              <div class="label">Event Date:</div>
              <div class="value">${inquiry.eventDate}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">Message:</div>
              <div class="value highlight">${inquiry.message}</div>
            </div>
            
            <div class="field">
              <div class="label">Submitted:</div>
              <div class="value">${new Date(inquiry.createdAt).toLocaleString()}</div>
            </div>
          </div>
          
          <p style="margin-top: 20px; font-size: 14px; color: #6c757d;">
            This inquiry was submitted through your Captured Magic Photography website.
          </p>
        </body>
        </html>
      `
    };
  }

  private createClientConfirmationEmail(inquiry: ContactInquiry): EmailTemplate {
    return {
      to: inquiry.email,
      subject: 'Thank you for your photography inquiry!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Georgia', serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { text-align: center; margin-bottom: 30px; }
            .logo { font-family: 'Dancing Script', cursive; font-size: 28px; color: #8B4513; margin-bottom: 10px; }
            .content { background: #fefefe; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .greeting { font-size: 18px; margin-bottom: 20px; color: #5a5a5a; }
            .message { margin-bottom: 20px; }
            .signature { margin-top: 30px; font-style: italic; color: #8B4513; }
            .footer { text-align: center; margin-top: 30px; font-size: 14px; color: #888; }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo">Captured Magic Photography</div>
            <p>Fredericksburg, VA</p>
          </div>
          
          <div class="content">
            <div class="greeting">Dear ${inquiry.firstName},</div>
            
            <div class="message">
              <p>Thank you so much for reaching out about your ${inquiry.sessionType} session! I'm thrilled that you're considering me to capture these special moments for you.</p>
              
              <p>I've received your inquiry and will personally review all the details you've shared. I typically respond to all inquiries within 24-48 hours, so please keep an eye on your inbox (and don't forget to check your spam folder, just in case!).</p>
              
              <p>In the meantime, feel free to browse my portfolio and client galleries on the website. I believe that photography should tell your unique story, and I can't wait to learn more about the vision you have for your session.</p>
              
              <p>If you have any urgent questions, please don't hesitate to reach out directly.</p>
            </div>
            
            <div class="signature">
              <p>With excitement,<br>
              Kimberly<br>
              <em>Captured Magic Photography</em></p>
            </div>
          </div>
          
          <div class="footer">
            <p>This is an automated confirmation. I will personally respond to your inquiry soon!</p>
            <p>📧 kimberly@capturedmagicphoto.com | 📍 Fredericksburg, VA</p>
          </div>
        </body>
        </html>
      `
    };
  }
}