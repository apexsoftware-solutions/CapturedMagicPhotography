import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { EmailService } from "./email-service";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      
      // Send email notifications
      const emailService = EmailService.getInstance();
      
      // Send notification to photographer
      const notificationResult = await emailService.sendContactNotification(inquiry);
      
      // Send confirmation to client
      const confirmationResult = await emailService.sendClientConfirmation(inquiry);
      
      // Update the inquiry with email status
      if (notificationResult.success || confirmationResult.success) {
        await storage.updateContactInquiryEmailStatus(
          inquiry.id,
          notificationResult.success && confirmationResult.success,
          notificationResult.messageId || confirmationResult.messageId,
          notificationResult.success && confirmationResult.success ? 'sent' : 'failed'
        );
      }
      
      // Log email results for debugging
      if (!notificationResult.success) {
        console.error('Failed to send notification email:', notificationResult.error);
      }
      if (!confirmationResult.success) {
        console.error('Failed to send confirmation email:', confirmationResult.error);
      }
      
      res.json({ 
        success: true, 
        inquiry,
        emailNotification: notificationResult.success,
        emailConfirmation: confirmationResult.success
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit inquiry" 
        });
      }
    }
  });

  // Get all contact inquiries (for potential admin interface)
  app.get("/api/contact", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch inquiries" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
