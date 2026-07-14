import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Information Science and Technology",
      specialization: "Specialization in Artificial Intelligence and Data Science",
      university: "Presidency University",
      location: "Bangalore",
      year: "Expected Graduation: 2027",
      description: "Focusing on advanced algorithms, data structures, full-stack development, and machine learning principles.",
      icon: <GraduationCap size={24} />
    }
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">My <span className="text-gradient">Education</span></h2>
          <p className="section-subtitle">
            My academic journey and qualifications.
          </p>
        </motion.div>

        <div className="timeline">
          <div className="timeline-line"></div>
          
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-dot">
                {item.icon}
              </div>
              
              <div className="timeline-content glass">
                <h3 className="timeline-degree">{item.degree}</h3>
                <h4 className="timeline-specialization text-gradient">{item.specialization}</h4>
                
                <div className="timeline-meta">
                  <span className="meta-item">
                    <MapPin size={16} /> {item.university}, {item.location}
                  </span>
                  <span className="meta-item">
                    <Calendar size={16} /> {item.year}
                  </span>
                </div>
                
                <p className="timeline-desc">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
