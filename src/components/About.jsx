import { motion } from 'framer-motion';
import { Code, Palette, Zap } from 'lucide-react';
import './About.css';

const About = () => {
  const cards = [
    {
      icon: <Code size={32} className="about-icon text-gradient" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and elegant code is my priority."
    },
    {
      icon: <Palette size={32} className="about-icon text-gradient" />,
      title: "Pixel Perfect",
      description: "Translating beautiful designs into functional user interfaces."
    },
    {
      icon: <Zap size={32} className="about-icon text-gradient" />,
      title: "Fast & Smooth",
      description: "Optimizing performance and ensuring fluid micro-animations."
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
          <p className="section-subtitle">
            I'm a self-taught developer with a keen eye for design and a passion for building things that live on the internet.
          </p>
        </motion.div>

        <div className="about-grid">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="about-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {card.icon}
              <h3 className="about-card-title">{card.title}</h3>
              <p className="about-card-desc">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
