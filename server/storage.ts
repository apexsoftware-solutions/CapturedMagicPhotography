import { users, contactInquiries, emailNotifications, type User, type InsertUser, type ContactInquiry, type InsertContactInquiry, type EmailNotification, type InsertEmailNotification } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getContactInquiries(): Promise<ContactInquiry[]>;
  updateContactInquiryEmailStatus(id: number, emailSent: boolean, resendMessageId?: string | null, resendStatus?: string): Promise<ContactInquiry | undefined>;
  createEmailNotification(notification: InsertEmailNotification): Promise<EmailNotification>;
  getEmailNotificationsByInquiry(inquiryId: number): Promise<EmailNotification[]>;
  updateEmailNotificationStatus(id: number, resendStatus: string, deliveredAt?: Date, error?: string): Promise<EmailNotification | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactInquiries: Map<number, ContactInquiry>;
  private emailNotifications: Map<number, EmailNotification>;
  private currentUserId: number;
  private currentInquiryId: number;
  private currentEmailNotificationId: number;

  constructor() {
    this.users = new Map();
    this.contactInquiries = new Map();
    this.emailNotifications = new Map();
    this.currentUserId = 1;
    this.currentInquiryId = 1;
    this.currentEmailNotificationId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const now = new Date();
    const user: User = { ...insertUser, id, createdAt: now, updatedAt: now };
    this.users.set(id, user);
    return user;
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = this.currentInquiryId++;
    const now = new Date();
    const inquiry: ContactInquiry = { 
      ...insertInquiry,
      phone: insertInquiry.phone || null,
      eventDate: insertInquiry.eventDate || null,
      id, 
      createdAt: now, 
      updatedAt: now,
      status: 'pending',
      emailSent: false,
      resendMessageId: null,
      resendStatus: null,
      notes: null,
      followUpDate: null
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async updateContactInquiryEmailStatus(id: number, emailSent: boolean, resendMessageId?: string | null, resendStatus?: string): Promise<ContactInquiry | undefined> {
    const inquiry = this.contactInquiries.get(id);
    if (!inquiry) return undefined;
    
    const updatedInquiry: ContactInquiry = {
      ...inquiry,
      emailSent,
      resendMessageId: resendMessageId || null,
      resendStatus: resendStatus || null,
      updatedAt: new Date()
    };
    
    this.contactInquiries.set(id, updatedInquiry);
    return updatedInquiry;
  }

  async createEmailNotification(insertNotification: InsertEmailNotification): Promise<EmailNotification> {
    const id = this.currentEmailNotificationId++;
    const now = new Date();
    const notification: EmailNotification = {
      ...insertNotification,
      contactInquiryId: insertNotification.contactInquiryId || 0,
      resendMessageId: insertNotification.resendMessageId || null,
      resendStatus: insertNotification.resendStatus || null,
      id,
      sentAt: now,
      deliveredAt: null,
      error: null
    };
    this.emailNotifications.set(id, notification);
    return notification;
  }

  async getEmailNotificationsByInquiry(inquiryId: number): Promise<EmailNotification[]> {
    return Array.from(this.emailNotifications.values())
      .filter(notification => notification.contactInquiryId === inquiryId)
      .sort((a, b) => b.sentAt.getTime() - a.sentAt.getTime());
  }

  async updateEmailNotificationStatus(id: number, resendStatus: string, deliveredAt?: Date, error?: string): Promise<EmailNotification | undefined> {
    const notification = this.emailNotifications.get(id);
    if (!notification) return undefined;
    
    const updatedNotification: EmailNotification = {
      ...notification,
      resendStatus,
      deliveredAt: deliveredAt || null,
      error: error || null
    };
    
    this.emailNotifications.set(id, updatedNotification);
    return updatedNotification;
  }
}

export const storage = new MemStorage();
