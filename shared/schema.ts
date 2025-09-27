import { pgTable, text, serial, timestamp, boolean, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const contactInquiries = pgTable("contact_inquiries", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  sessionType: text("session_type").notNull(),
  eventDate: text("event_date"),
  message: text("message").notNull(),
  status: varchar("status", { length: 50 }).default("pending").notNull(), // pending, contacted, completed, archived
  emailSent: boolean("email_sent").default(false).notNull(),
  resendMessageId: text("resend_message_id"), // Resend message ID for tracking
  resendStatus: varchar("resend_status", { length: 50 }), // sent, delivered, bounced, complained
  notes: text("notes"), // Internal notes for follow-up
  followUpDate: timestamp("follow_up_date"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const emailNotifications = pgTable("email_notifications", {
  id: serial("id").primaryKey(),
  contactInquiryId: serial("contact_inquiry_id").references(() => contactInquiries.id),
  emailType: varchar("email_type", { length: 50 }).notNull(), // welcome, followup, confirmation
  recipientEmail: text("recipient_email").notNull(),
  subject: text("subject").notNull(),
  resendMessageId: text("resend_message_id"),
  resendStatus: varchar("resend_status", { length: 50 }), // sent, delivered, bounced, complained
  sentAt: timestamp("sent_at").defaultNow().notNull(),
  deliveredAt: timestamp("delivered_at"),
  error: text("error"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
});

export const insertContactInquirySchema = createInsertSchema(contactInquiries).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  status: true,
  emailSent: true,
  resendMessageId: true,
  resendStatus: true,
  notes: true,
  followUpDate: true,
});

export const insertEmailNotificationSchema = createInsertSchema(emailNotifications).omit({
  id: true,
  sentAt: true,
  deliveredAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type ContactInquiry = typeof contactInquiries.$inferSelect;
export type InsertContactInquiry = z.infer<typeof insertContactInquirySchema>;
export type EmailNotification = typeof emailNotifications.$inferSelect;
export type InsertEmailNotification = z.infer<typeof insertEmailNotificationSchema>;
