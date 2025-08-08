import { 
  type User, 
  type InsertUser, 
  type Product, 
  type InsertProduct,
  type Order,
  type InsertOrder,
  type ContactInquiry,
  type InsertContactInquiry
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  createOrder(order: InsertOrder): Promise<Order>;
  getOrder(id: string): Promise<Order | undefined>;
  updateOrderStatus(id: string, status: string, paystackReference?: string): Promise<Order | undefined>;
  
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private products: Map<string, Product>;
  private orders: Map<string, Order>;
  private contactInquiries: Map<string, ContactInquiry>;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.orders = new Map();
    this.contactInquiries = new Map();
    
    // Initialize with sample products
    this.initializeProducts();
  }

  private initializeProducts() {
    const sampleProducts: InsertProduct[] = [
      {
        name: "BOA ME T-Shirt",
        description: "Premium cotton t-shirt with our logo",
        price: "25.00",
        category: "clothing",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        inStock: true
      },
      {
        name: "Empowerment Mug",
        description: "Inspirational ceramic mug for daily motivation",
        price: "15.00",
        category: "accessories",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        inStock: true
      },
      {
        name: "Youth Leadership Guide",
        description: "Complete handbook for young leaders",
        price: "35.00",
        category: "books",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        inStock: true
      },
      {
        name: "Youth Empowerment Hoodie",
        description: "Comfortable hoodie with empowerment message",
        price: "45.00",
        category: "clothing",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        inStock: true
      },
      {
        name: "BOA ME Tote Bag",
        description: "Eco-friendly canvas tote bag",
        price: "20.00",
        category: "accessories",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        inStock: true
      },
      {
        name: "Empowerment Journal",
        description: "Personal development journal with guided prompts",
        price: "18.00",
        category: "accessories",
        image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        inStock: true
      }
    ];

    sampleProducts.forEach(product => {
      this.createProduct(product);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { 
      ...insertProduct,
      inStock: insertProduct.inStock ?? true,
      id,
      createdAt: new Date()
    };
    this.products.set(id, product);
    return product;
  }

  async createOrder(insertOrder: InsertOrder): Promise<Order> {
    const id = randomUUID();
    const order: Order = {
      ...insertOrder,
      status: insertOrder.status ?? 'pending',
      paystackReference: insertOrder.paystackReference ?? null,
      id,
      createdAt: new Date()
    };
    this.orders.set(id, order);
    return order;
  }

  async getOrder(id: string): Promise<Order | undefined> {
    return this.orders.get(id);
  }

  async updateOrderStatus(id: string, status: string, paystackReference?: string): Promise<Order | undefined> {
    const order = this.orders.get(id);
    if (order) {
      const updatedOrder = { 
        ...order, 
        status,
        ...(paystackReference && { paystackReference })
      };
      this.orders.set(id, updatedOrder);
      return updatedOrder;
    }
    return undefined;
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = randomUUID();
    const inquiry: ContactInquiry = {
      ...insertInquiry,
      id,
      createdAt: new Date()
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }
}

export const storage = new MemStorage();
