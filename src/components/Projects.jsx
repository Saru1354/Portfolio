import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, Sparkles, Search, X } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Offline Document Auditor Pro",
      category: "AI-Powered Contract Risk Analyzer",
      description: "100% Offline, 100% Private AI tool that analyzes contracts and legal documents. Generates professional PDF reports with risk scores and suggested fixes - all without uploading sensitive documents to the cloud.",
      tags: ["Python", "Streamlit", "Ollama", "Phi-3", "PyMuPDF", "Tesseract"],
      repoUrl: "https://github.com/Saru1354/Offline_Auditor",
      color: "var(--accent-color)",
      deepDive: {
        problem: "People sign contracts they don't understand daily - NDAs, rental agreements, job offers. Legal review costs ₹2,000-₹10,000 per document. Online AI tools upload sensitive documents to cloud APIs, creating privacy risks.",
        techChoices: "Streamlit for interactive UI, Ollama + Phi-3 Mini for local AI inference, PyMuPDF + Tesseract for text extraction, SQLite for data storage, and fpdf2 for PDF report generation.",
        features: ["Fast Mode (3-10 sec rule-engine scan)", "Thorough Mode (2-5 min full AI analysis)", "Risk Score (0-100 with color coding)", "Plain English summaries", "Professional PDF export", "Document fingerprinting (SHA-256)", "History tracking with SQLite", "Side-by-side document comparison", "Batch processing for multiple documents", "Redlined text with suggested edits"]
      }
    },
    {
      title: "Enron NLP Dashboard",
      category: "Full-Stack ML Application",
      description: "A comprehensive web application for analyzing the Enron email corpus using machine learning and natural language processing. Features spam detection, topic modeling, sentiment analysis, and email summarization.",
      tags: ["React", "Flask", "Scikit-learn", "NLTK", "Gensim", "Pandas"],
      repoUrl: "https://github.com/Saru1354/Enron_NLP",
      color: "var(--accent-color-2)",
      deepDive: {
        problem: "The Enron email dataset contains valuable insights about corporate communication patterns, but analyzing this large corpus requires specialized tools and expertise in NLP and machine learning.",
        techChoices: "React 18 for modern frontend with Recharts for data visualization, Flask backend with Flask-CORS for API endpoints, Scikit-learn and NLTK for ML/NLP processing, and Gensim for topic modeling.",
        features: ["Dashboard with email statistics and monthly volume charts", "ML-powered spam/ham classification with confidence scores", "LDA topic modeling (10 topics discovered)", "Sentiment analysis using VADER for emotional tone trends", "Extractive email summarization with compression stats", "Interactive data visualizations", "RESTful API endpoints", "Responsive design with custom CSS"]
      }
    }
    ,
    {
      title: "Bullion (Gold Marketplace)",
      category: "Gold E‑commerce",
      description: "A focused platform for buying/selling investment-grade gold (24K/22K) with live per‑gram pricing, hallmark certification, buyback options, and GST-compliant invoicing.",
      tags: ["React", "Node.js", "Express", "Stripe", "Chart.js", "Socket.IO"],
      repoUrl: "https://github.com/Saru1354/Bullion",
      color: "var(--accent-color-3)",
      deepDive: {
        problem: "Retail buyers and small investors need a simple, transparent way to purchase and manage physical gold with guaranteed purity, clear making charges, and reliable buyback terms.",
        techChoices: "React frontend, Node + Express API, Stripe/Razorpay for payments, WebSockets for live per-gram rates, Chart.js for historical charts, and MongoDB/Postgres for orders and inventory.",
        features: [
          "Live gold rates per gram with 1s refresh",
          "Buy/sell in grams or fixed denominations",
          "Support for 24K and 22K purity selection",
          "Hallmark & purity certificate generation",
          "Making charges calculator shown upfront",
          "GST-compliant invoice and digital receipt",
          "Buyback program with transparent rates",
          "Order tracking with insured delivery",
          "Price charts (1M/6M/1Y) and historical data",
          "Price alerts, watchlist, and portfolio in grams/INR"
        ]
      }
    }
    ,
    {
      title: "Portfolio Website",
      category: "Personal Website",
      description: "This portfolio website showcases projects, skills, and contact — built with React, Vite, and Framer Motion.",
      tags: ["React", "Vite", "Framer Motion", "CSS", "JavaScript"],
      color: "var(--accent-color-4)",
      deepDive: {
        problem: "Showcase work, skills, and contact information in a performant, responsive site.",
        techChoices: "React + Vite for fast builds, Framer Motion for animations, CSS modules for styling, and simple contact handling via mailto/WhatsApp link.",
        features: [
          "Responsive layout with dark/light theme toggle",
          "Animated sections using Framer Motion",
          "Projects modal with detailed deep dives",
          "Contact form and quick WhatsApp link",
          "Resume download and social links",
          "Optimized assets and fast dev server with Vite"
        ]
      }
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="projects-header"
        >
          <h2 className="section-title">My <span className="text-gradient">Projects</span></h2>
          <p className="section-subtitle">
            Here are some of the projects I've built, showcasing my experience as an AI engineer, expertise in NLP using ML, full-stack development, and problem-solving.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="project-badge" style={{ backgroundColor: `${project.color}20`, color: project.color }}>
                <Sparkles size={14} style={{ marginRight: '6px' }} />
                {project.category}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <div className="project-links-grid">
                  <button 
                    className="btn btn-primary" 
                    onClick={() => setSelectedProject(project)}
                  >
                    <Search size={18} /> Deep Dive
                  </button>
                  <button 
                    className="btn btn-primary"
                    onClick={() => project.repoUrl ? window.open(project.repoUrl, '_blank') : null}
                    disabled={!project.repoUrl}
                    title={project.repoUrl ? "Open GitHub repository" : "Coming soon - GitHub repository"}
                  >
                    <Code size={18} /> GitHub
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                className="modal-content glass"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="modal-close" aria-label="Close modal" onClick={() => setSelectedProject(null)}>
                  <X size={24} />
                </button>
                
                <div className="modal-header">
                  <h3 className="modal-title text-gradient">{selectedProject.title}</h3>
                  <div className="project-tags">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-body">
                  <div className="modal-section">
                    <h4>The Problem</h4>
                    <p>{selectedProject.deepDive.problem}</p>
                  </div>
                  
                  <div className="modal-section">
                    <h4>Tech Choices</h4>
                    <p>{selectedProject.deepDive.techChoices}</p>
                  </div>
                  
                  <div className="modal-section">
                    <h4>Planned Features</h4>
                    <ul className="modal-features-list">
                      {selectedProject.deepDive.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
