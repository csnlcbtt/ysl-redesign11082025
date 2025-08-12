import { 
  users, 
  contactMessages, 
  newsArticles, 
  projects,
  type User, 
  type InsertUser,
  type ContactMessage,
  type InsertContactMessage,
  type NewsArticle,
  type InsertNewsArticle,
  type Project,
  type InsertProject
} from "@shared/schema";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact message operations
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  markContactMessageAsRead(id: number): Promise<void>;
  
  // News operations
  getPublishedNews(): Promise<NewsArticle[]>;
  getAllNews(): Promise<NewsArticle[]>;
  createNewsArticle(article: InsertNewsArticle): Promise<NewsArticle>;
  
  // Project operations
  getPublishedProjects(): Promise<Project[]>;
  getAllProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User> = new Map();
  private contactMessages: Map<number, ContactMessage> = new Map();
  private newsArticles: Map<number, NewsArticle> = new Map();
  private projects: Map<number, Project> = new Map();
  private currentUserId: number = 1;
  private currentContactId: number = 1;
  private currentNewsId: number = 1;
  private currentProjectId: number = 1;

  constructor() {
    // Initialize with sample news articles
    const sampleNews: NewsArticle[] = [
      {
        id: this.currentNewsId++,
        title: "Brief introduction and overview of YSL",
        content: "We are a privately held company established in 1972 providing a comprehensive structural engineering service, specialising in the fabrication, supply and erection of steel structures and other structural components. As the market leader in the Caribbean Yorke Structures Limited operates the largest steel fabricating facility in the region.",
        excerpt: "We are a privately held company established in 1972 providing comprehensive structural engineering services...",
        isPublished: true,
        publishDate: new Date('2024-01-15'),
        createdAt: new Date('2024-01-15')
      },
      {
        id: this.currentNewsId++,
        title: "Dr. Robert T. Yorke Retirement and Award",
        content: "After 39 hard working years to keep his business, Yorke Structures Ltd thriving, Dr. Robert T. Yorke retired on January 1, 2011, though he knows it will be difficult to stay away. On the 31st August 2011 Dr. Robert T. Yorke was awarded the Chaconia Medal Gold for his long and meritorious service to Trinidad and Tobago in sphere of business.",
        excerpt: "Dr. Robert T. Yorke retired in 2011 and was awarded the Chaconia Medal Gold...",
        isPublished: true,
        publishDate: new Date('2024-01-10'),
        createdAt: new Date('2024-01-10')
      },
      {
        id: this.currentNewsId++,
        title: "New Project Announcement",
        content: "Yorke Structures Limited is proud to announce our latest major infrastructure project...",
        excerpt: "Latest major infrastructure project announcement",
        isPublished: true,
        publishDate: new Date('2024-03-15'),
        createdAt: new Date('2024-03-15')
      }
    ];

    sampleNews.forEach(news => this.newsArticles.set(news.id, news));

    // Initialize with sample projects
    const sampleProjects: Project[] = [
      {
        id: this.currentProjectId++,
        title: "M5000 Methanol Plant",
        description: "Advanced industrial steel fabrication project showcasing our expertise in large-scale structural engineering.",
        client: "Industrial Client",
        category: "Industrial",
        year: 2023,
        imageUrl: "/api/assets/New Assets/m5000.jpg",
        isPublished: true,
        createdAt: new Date('2023-01-15')
      },
      {
        id: this.currentProjectId++,
        title: "Shaw Park Cultural Complex",
        description: "Premier cultural venue construction featuring innovative steel framework design.",
        client: "Cultural Authority",
        category: "Cultural",
        year: 2022,
        imageUrl: "/api/assets/New Assets/shaw park.jpg",
        isPublished: true,
        createdAt: new Date('2022-06-10')
      },
      {
        id: this.currentProjectId++,
        title: "Skinner Park Project",
        description: "State-of-the-art recreational facility featuring modern steel construction and innovative design elements for community use.",
        client: "Ministry of Sport and Youth Affairs",
        category: "Recreational",
        year: 2021,
        imageUrl: "/api/assets/New Assets/Skinner-Park.jpg",
        isPublished: true,
        createdAt: new Date('2021-09-20')
      },
      {
        id: this.currentProjectId++,
        title: "Piarco International Airport",
        description: "Critical infrastructure development enhancing regional transportation capabilities.",
        client: "Airport Authority",
        category: "Infrastructure",
        year: 2020,
        imageUrl: "/api/assets/New Assets/piarco.jpg",
        isPublished: true,
        createdAt: new Date('2020-11-30')
      },
      {
        id: this.currentProjectId++,
        title: "National Centre for Oncology",
        description: "Leading cancer treatment centre in the Caribbean islands designed by Farrow architects, spanning 7,000 m² over three storeys with cutting-edge medical equipment.",
        client: "Urban Development Corporation",
        category: "Healthcare",
        year: 2024,
        imageUrl: "/api/assets/New Assets/national_oncology_centre_0_28.png",
        isPublished: true,
        createdAt: new Date('2024-01-15')
      },
      {
        id: this.currentProjectId++,
        title: "Moruga Multi-Purpose Youth and Sport Facility",
        description: "Modern sports facility with 500 seating capacity, multi-purpose field with football and cricket pitches, complete with facilities and solar-lit parking.",
        client: "Ministry of Sport and Youth Affairs",
        category: "Sports Facility",
        year: 2020,
        imageUrl: "/api/assets/New Assets/Moruga-Multi-Purpose-Youth-and-Sport-Facility-image.jpg",
        isPublished: true,
        createdAt: new Date('2020-08-05')
      }
    ];

    sampleProjects.forEach(project => this.projects.set(project.id, project));
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.email === email);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user: User = {
      ...insertUser,
      id: this.currentUserId++,
      isActive: true,
      createdAt: new Date()
    };
    this.users.set(user.id, user);
    return user;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const message: ContactMessage = {
      ...insertMessage,
      id: this.currentContactId++,
      isRead: false,
      createdAt: new Date()
    };
    this.contactMessages.set(message.id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async markContactMessageAsRead(id: number): Promise<void> {
    const message = this.contactMessages.get(id);
    if (message) {
      message.isRead = true;
      this.contactMessages.set(id, message);
    }
  }

  async getPublishedNews(): Promise<NewsArticle[]> {
    return Array.from(this.newsArticles.values())
      .filter(article => article.isPublished)
      .sort((a, b) => new Date(b.publishDate!).getTime() - new Date(a.publishDate!).getTime());
  }

  async getAllNews(): Promise<NewsArticle[]> {
    return Array.from(this.newsArticles.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async createNewsArticle(insertArticle: InsertNewsArticle): Promise<NewsArticle> {
    const article: NewsArticle = {
      ...insertArticle,
      id: this.currentNewsId++,
      publishDate: insertArticle.isPublished ? new Date() : null,
      createdAt: new Date()
    };
    this.newsArticles.set(article.id, article);
    return article;
  }

  async getPublishedProjects(): Promise<Project[]> {
    return Array.from(this.projects.values())
      .filter(project => project.isPublished)
      .sort((a, b) => (b.year || 0) - (a.year || 0));
  }

  async getAllProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const project: Project = {
      ...insertProject,
      id: this.currentProjectId++,
      createdAt: new Date()
    };
    this.projects.set(project.id, project);
    return project;
  }
}

export const storage = new MemStorage();
