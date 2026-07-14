import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Java', level: 95, color: '#B07219' },
    { name: 'HTML5', level: 90, color: '#E34F26' },
    { name: 'CSS3', level: 85, color: '#1572B6' },
    { name: 'JavaScript', level: 80, color: '#F7DF1E' },
    { name: 'Python', level: 75, color: '#3776AB' },
    { name: 'React', level: 75, color: '#61DAFB' },
    { name: 'SQL', level: 75, color: '#336791' },
    { name: 'C & C++', level: 70, color: '#00599C' },
    { name: 'Git', level: 70, color: '#F05032' },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">My <span className="text-gradient">Skills</span></h2>
          <p className="section-subtitle">
            Technologies I'm learning and mastering to build modern web applications.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card glass"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: skill.color }}
            >
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent" style={{ color: skill.color }}>{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <motion.div 
                  className="skill-bar-fill"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
