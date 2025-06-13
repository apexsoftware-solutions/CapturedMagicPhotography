import { users, contactInquiries, emailNotifications, type User, type InsertUser, type ContactInquiry, type InsertContactInquiry, type EmailNotification, type InsertEmailNotification } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getContactInquiries(): Promise<ContactInquiry[]>;
  updateContactInquiryStatus(id: number, status: string, sesMessageId?: string, sesStatus?: string): Promise<ContactInquiry | undefined>;
  createEmailNotification(notification: InsertEmailNotification): Promise<EmailNotification>;
  getEmailNotificationsByInquiry(inquiryId: number): Promise<EmailNotification[]>;
  updateEmailNotificationStatus(id: number, sesStatus: string, deliveredAt?: Date, error?: string): Promise<EmailNotification | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactInquiries: Map<number, ContactInquiry>;
  private currentUserId: number;
  private currentInquiryId: number;

  constructor() {
    this.users = new Map();
    this.contactInquiries = new Map();
    this.currentUserId = 1;
    this.currentInquiryId = 1;
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
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = this.currentInquiryId++;
    const createdAt = new Date();
    const inquiry: ContactInquiry = { ...insertInquiry, id, createdAt };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
