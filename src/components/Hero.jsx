import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section section">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="hero-badge glass">Available for work</span>
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Hi, I'm <span className="text-gradient">Saru</span>.<br />
            I build digital <span className="hero-italic">experiences</span>.
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            An aspiring AI/ML engineer and frontend developer passionate about creating beautiful, 
            interactive, and user-centered web applications.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a href="#projects" className="btn btn-primary hero-btn">
              View Work <ArrowRight size={18} />
            </a>
            <a
              href="/Sarukesh_R_Resume%20up.docx"
              download="Sarukesh_R_Resume up.docx"
              className="btn btn-outline hero-btn"
            >
              Resume <Download size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
        >
          <div className="hero-image-wrapper glass">
            <img src="/profile.jpg" alt="Saru Profile" className="hero-image" />
            <div className="hero-image-glow"></div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="hero-decoration">
          <motion.div 
            className="blob blob-1"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="blob blob-2"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
