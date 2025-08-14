import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema, insertUserSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
import express from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Internal health check for deployment monitoring (not user-facing)
  // Only responds to specific health check headers or internal monitoring
  app.get("/health", (req, res) => {
    // Only respond to deployment health checks, not regular user requests
    const userAgent = req.get('User-Agent') || '';
    const isHealthCheck = userAgent.includes('GoogleHC') || 
                         userAgent.includes('kube-probe') ||
                         req.headers['x-health-check'] === 'true';
    
    if (isHealthCheck) {
      res.status(200).json({ 
        status: "ok", 
        message: "Yorke Structures Limited - Server is running",
        timestamp: new Date().toISOString()
      });
    } else {
      // Regular users get 404 for health check endpoint
      res.status(404).json({ error: "Not Found" });
    }
  });
  
  // Serve assets from attached_assets folder
  app.use("/api/assets", express.static(path.join(process.cwd(), "attached_assets")));
  
  // Redirects for old URLs
  app.get('/products-services/products', (req, res) => {
    res.redirect(301, '/products');
  });

  app.get('/products-services/services', (req, res) => {
    res.redirect(301, '/services');
  });

  app.get('/products-services', (req, res) => {
    res.redirect(301, '/products');
  });

  app.get('/about/quality', (req, res) => {
    res.redirect(301, '/quality');
  });

  // Redirects for removed management profiles
  app.get('/about/management/laura-cozier', (req, res) => {
    res.redirect(301, '/about/management');
  });

  app.get('/about/management/herman-pereira', (req, res) => {
    res.redirect(301, '/about/management');
  });

  app.get('/about/management/elizabeth-saunders', (req, res) => {
    res.redirect(301, '/about/management');
  });

  app.get('/about/management/ramesh-maharaj', (req, res) => {
    res.redirect(301, '/about/management');
  });

  app.get('/about/management/donna-greenidge', (req, res) => {
    res.redirect(301, '/about/management');
  });
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.json({ success: true, message: "Message sent successfully", id: message.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    }
  });

  // Get contact messages (for admin)
  app.get("/api/contact/messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // User registration
  app.post("/api/users/register", async (req, res) => {
    try {
      const validatedData = insertUserSchema.parse(req.body);
      
      // Check if user already exists
      const existingUser = await storage.getUserByUsername(validatedData.username);
      if (existingUser) {
        return res.status(400).json({ success: false, message: "Username already exists" });
      }

      const existingEmail = await storage.getUserByEmail(validatedData.email);
      if (existingEmail) {
        return res.status(400).json({ success: false, message: "Email already registered" });
      }

      const user = await storage.createUser(validatedData);
      res.json({ success: true, user: { id: user.id, username: user.username, email: user.email } });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    }
  });

  // User login (basic implementation)
  app.post("/api/users/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ success: false, message: "Username and password required" });
      }

      const user = await storage.getUserByUsername(username);
      if (!user) {
        return res.status(401).json({ success: false, message: "Invalid credentials" });
      }

      // In a real app, you'd hash and compare passwords
      if (user.password !== password) {
        return res.status(401).json({ success: false, message: "Invalid credentials" });
      }

      res.json({ 
        success: true, 
        user: { id: user.id, username: user.username, email: user.email } 
      });
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Get published news articles
  app.get("/api/news", async (req, res) => {
    try {
      const news = await storage.getPublishedNews();
      res.json(news);
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Get published projects
  app.get("/api/projects", async (req, res) => {
    try {
      const projects = await storage.getPublishedProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Search functionality
  app.get("/api/search", async (req, res) => {
    try {
      const { q } = req.query;
      if (!q || typeof q !== 'string') {
        return res.status(400).json({ success: false, message: "Search query required" });
      }

      const query = q.toLowerCase();
      const news = await storage.getPublishedNews();
      const projects = await storage.getPublishedProjects();

      const newsResults = news.filter(article => 
        article.title.toLowerCase().includes(query) ||
        article.content.toLowerCase().includes(query)
      );

      const projectResults = projects.filter(project => 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query)
      );

      res.json({
        news: newsResults,
        projects: projectResults,
        total: newsResults.length + projectResults.length
      });
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
