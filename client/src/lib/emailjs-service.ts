import emailjs from '@emailjs/browser';
import type { InsertContactInquiry } from '@shared/schema';

// EmailJS configuration - these will be set as environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

// Deployment debugging (remove in production)
if (import.meta.env.DEV) {
  console.log('EmailJS Debug Info:', {
    hasServiceId: !!EMAILJS_SERVICE_ID,
    hasTemplateId: !!EMAILJS_TEMPLATE_ID,
    hasPublicKey: !!EMAILJS_PUBLIC_KEY,
    serviceIdPrefix: EMAILJS_SERVICE_ID ? EMAILJS_SERVICE_ID.substring(0, 8) + '...' : 'missing',
    env: import.meta.env.MODE
  });
}

export interface EmailJSResponse {
  status: number;
  text: string;
}

export interface EmailSendResult {
  success: boolean;
  error?: string;
  messageId?: string;
}

export class EmailJSService {
  private static instance: EmailJSService;
  private isInitialized = false;

  private constructor() {}

  static getInstance(): EmailJSService {
    if (!EmailJSService.instance) {
      EmailJSService.instance = new EmailJSService();
    }
    return EmailJSService.instance;
  }

  /**
   * Initialize EmailJS with the public key
   */
  private initialize(): void {
    if (!this.isInitialized && EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      this.isInitialized = true;
    }
  }

  /**
   * Check if EmailJS is properly configured
   */
  isConfigured(): boolean {
    return !!(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);
  }

  /**
   * Send contact inquiry email using EmailJS
   */
  async sendContactInquiry(inquiry: InsertContactInquiry): Promise<EmailSendResult> {
    try {
      // Check if EmailJS is configured
      if (!this.isConfigured()) {
        console.error('EmailJS is not properly configured. Missing environment variables:', {
          hasServiceId: !!EMAILJS_SERVICE_ID,
          hasTemplateId: !!EMAILJS_TEMPLATE_ID,
          hasPublicKey: !!EMAILJS_PUBLIC_KEY
        });
        return {
          success: false,
          error: 'Email service not configured. Please check environment variables.',
        };
      }

      // Initialize EmailJS
      this.initialize();

      // Format the session type for display
      const sessionTypeFormatted = inquiry.sessionType
        .split('-')
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      // Prepare template parameters
      const templateParams = {
        // Client information
        firstName: inquiry.firstName,
        lastName: inquiry.lastName,
        fullName: `${inquiry.firstName} ${inquiry.lastName}`,
        email: inquiry.email,
        phone: inquiry.phone || 'Not provided',
        
        // Session details
        sessionType: sessionTypeFormatted,
        eventDate: inquiry.eventDate || 'Not specified',
        message: inquiry.message,
        
        // Additional context
        submissionDate: new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
        }),
        
        // Email addresses for reply-to functionality
        reply_to: inquiry.email,
        to_email: 'kim@capturedmagicfxbg.com',
      };

      // Send email using EmailJS
      const response: EmailJSResponse = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        return {
          success: true,
          messageId: response.text,
        };
      } else {
        return {
          success: false,
          error: `Email service returned status ${response.status}: ${response.text}`,
        };
      }
    } catch (error) {
      console.error('EmailJS send error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred while sending email',
      };
    }
  }

  /**
   * Get the configuration status for debugging
   */
  getConfigStatus(): { configured: boolean; missingVars: string[] } {
    const missingVars: string[] = [];
    
    if (!EMAILJS_SERVICE_ID) missingVars.push('VITE_EMAILJS_SERVICE_ID');
    if (!EMAILJS_TEMPLATE_ID) missingVars.push('VITE_EMAILJS_TEMPLATE_ID');
    if (!EMAILJS_PUBLIC_KEY) missingVars.push('VITE_EMAILJS_PUBLIC_KEY');

    return {
      configured: missingVars.length === 0,
      missingVars,
    };
  }
}

// Export singleton instance
export const emailJSService = EmailJSService.getInstance();