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
        from: 'website@capturedmagicfxbg.com', // Use your verified domain
        to: 'kim@capturedmagicfxbg.com', // Photographer's email
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
        from: 'kim@capturedmagicfxbg.com', // Photographer's email
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
      to: 'kim@capturedmagicfxbg.com',
      subject: `New Photography Inquiry - ${inquiry.firstName} ${inquiry.lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { 
              font-family: Georgia, 'Times New Roman', serif; 
              line-height: 1.6; 
              color: #2c2c2c; 
              max-width: 600px; 
              margin: 0 auto; 
              padding: 0; 
              background-color: #f9f7f4; 
            }
            .container { background: #ffffff; margin: 20px; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
            .header { 
              background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%); 
              color: white; 
              padding: 30px; 
              text-align: center; 
            }
            .header h2 { 
              margin: 0 0 10px 0; 
              font-size: 28px; 
              font-weight: normal; 
              letter-spacing: 1px; 
            }
            .header p { 
              margin: 0; 
              font-size: 16px; 
              opacity: 0.9; 
              font-style: italic; 
            }
            .content { padding: 40px 30px; }
            .field { 
              margin-bottom: 20px; 
              padding-bottom: 15px; 
              border-bottom: 1px solid #f0f0f0; 
            }
            .field:last-child { border-bottom: none; margin-bottom: 0; }
            .label { 
              font-weight: 600; 
              color: #8B4513; 
              font-size: 14px; 
              text-transform: uppercase; 
              letter-spacing: 0.5px; 
              margin-bottom: 8px; 
            }
            .value { 
              font-size: 16px; 
              color: #2c2c2c; 
            }
            .value a { 
              color: #8B4513; 
              text-decoration: none; 
            }
            .value a:hover { 
              text-decoration: underline; 
            }
            .highlight { 
              background: #faf8f5; 
              padding: 20px; 
              border-radius: 8px; 
              border-left: 4px solid #D2B48C; 
              font-style: italic; 
              line-height: 1.7; 
            }
            .footer { 
              background: #f8f6f3; 
              padding: 20px 30px; 
              text-align: center; 
              font-size: 13px; 
              color: #8B4513; 
              border-top: 1px solid #f0f0f0; 
            }
            .client-name { 
              font-size: 20px; 
              font-weight: 600; 
              color: #8B4513; 
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>✨ New Photography Inquiry</h2>
              <p>A potential client is interested in your services!</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">Client Name</div>
                <div class="value client-name">${inquiry.firstName} ${inquiry.lastName}</div>
              </div>
              
              <div class="field">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${inquiry.email}">${inquiry.email}</a></div>
              </div>
              
              ${inquiry.phone ? `
              <div class="field">
                <div class="label">Phone Number</div>
                <div class="value"><a href="tel:${inquiry.phone}">${inquiry.phone}</a></div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Session Type</div>
                <div class="value">${sessionTypeFormatted} Session</div>
              </div>
              
              ${inquiry.eventDate ? `
              <div class="field">
                <div class="label">Preferred Event Date</div>
                <div class="value">${inquiry.eventDate}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Personal Message</div>
                <div class="value highlight">"${inquiry.message}"</div>
              </div>
              
              <div class="field">
                <div class="label">Inquiry Submitted</div>
                <div class="value">${new Date(inquiry.createdAt).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: 'numeric',
                  minute: '2-digit'
                })}</div>
              </div>
            </div>
            
            <div class="footer">
              Submitted through your Captured Magic Photography website
            </div>
          </div>
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
            body { 
              font-family: Georgia, 'Times New Roman', serif; 
              line-height: 1.7; 
              color: #2c2c2c; 
              max-width: 600px; 
              margin: 0 auto; 
              padding: 0; 
              background-color: #f9f7f4; 
            }
            .container { background: #ffffff; margin: 20px; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
            .header { 
              background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%); 
              color: white; 
              padding: 40px 30px; 
              text-align: center; 
            }
            .brand-name { 
              font-size: 32px; 
              font-weight: normal; 
              margin: 0 0 8px 0; 
              letter-spacing: 2px; 
              font-style: italic; 
            }
            .tagline { 
              margin: 0; 
              font-size: 16px; 
              opacity: 0.9; 
              letter-spacing: 1px; 
            }
            .content { padding: 40px 30px; }
            .greeting { 
              font-size: 20px; 
              margin-bottom: 25px; 
              color: #8B4513; 
              font-weight: 600; 
            }
            .message { 
              margin-bottom: 25px; 
              font-size: 16px; 
              line-height: 1.8; 
            }
            .message p { 
              margin-bottom: 18px; 
            }
            .highlight-box { 
              background: #faf8f5; 
              padding: 20px; 
              border-radius: 8px; 
              border-left: 4px solid #D2B48C; 
              margin: 25px 0; 
              font-style: italic; 
            }
            .signature { 
              margin-top: 35px; 
              padding-top: 25px; 
              border-top: 1px solid #f0f0f0; 
              color: #8B4513; 
              font-style: italic; 
            }
            .signature-name { 
              font-size: 18px; 
              font-weight: 600; 
              margin-bottom: 5px; 
            }
            .signature-title { 
              font-size: 14px; 
              opacity: 0.8; 
            }
            .footer { 
              background: #f8f6f3; 
              padding: 25px 30px; 
              text-align: center; 
              font-size: 13px; 
              color: #8B4513; 
              border-top: 1px solid #f0f0f0; 
            }
            .footer p { 
              margin: 5px 0; 
            }
            .session-type { 
              color: #8B4513; 
              font-weight: 600; 
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="brand-name">Captured Magic Photography</div>
              <div class="tagline">Fredericksburg, Virginia</div>
            </div>
            
            <div class="content">
              <div class="greeting">Dear ${inquiry.firstName},</div>
              
              <div class="message">
                <p>Thank you so much for reaching out about your <span class="session-type">${inquiry.sessionType} session</span>! I'm absolutely thrilled that you're considering me to capture these precious moments for you and your family.</p>
                
                <div class="highlight-box">
                  I've received your inquiry and will personally review every detail you've shared with me. Your story matters, and I want to make sure I understand your vision perfectly.
                </div>
                
                <p>I typically respond to all inquiries within 24-48 hours, so please keep an eye on your inbox. Don't forget to check your spam folder, just in case my response takes a little detour!</p>
                
                <p>While you wait, I encourage you to browse through my portfolio and client galleries on the website. Every family has a unique story to tell, and I believe that authentic, heartfelt photography should reflect exactly who you are.</p>
                
                <p>If you have any urgent questions or just want to chat about your session ideas, please don't hesitate to reach out directly. I love hearing from my clients!</p>
              </div>
              
              <div class="signature">
                <div class="signature-name">With so much excitement,</div>
                <div class="signature-name">Kimberly</div>
                <div class="signature-title">Captured Magic Photography</div>
              </div>
            </div>
            
            <div class="footer">
              <p>✨ This is an automated confirmation, but I will personally respond to your inquiry very soon!</p>
              <p>📧 kim@capturedmagicfxbg.com • 📍 Fredericksburg, Virginia</p>
            </div>
          </div>
        </body>
        </html>
      `
    };
  }
}