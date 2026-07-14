import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, CheckCircle, Loader2 } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('submitting');
    
    const formData = new FormData(e.target);
    
    // NOTE: Replace "YOUR_ACCESS_KEY_HERE" with your actual Web3Forms access key
    formData.append("access_key", "b26349b7-a85a-4e2a-b79b-498ca193349d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormState('success');
        e.target.reset();
        setTimeout(() => setFormState('idle'), 4000);
      } else {
        console.error("Form error:", data);
        setFormState('error');
        setTimeout(() => setFormState('idle'), 4000);
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setFormState('error');
      setTimeout(() => setFormState('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="contact-header"
        >
          <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
          <p className="section-subtitle">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info glass"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Contact Information</h3>
            <p>Ready to start a project together? Let's connect.</p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="icon-wrapper"><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <p>saruspartans1354@gmail.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon-wrapper"><MapPin size={20} /></div>
                <div>
                  <h4>Location</h4>
                  <p>Madurai</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon-wrapper"><Phone size={20} /></div>
                <div>
                  <h4>Phone</h4>
                  <p>+917904685840</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form glass"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
          >
            {/* Add Web3Forms Access Key Input Here when live: <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" /> */}
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" placeholder="john@example.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="How can I help you?" required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary submit-btn" disabled={formState === 'submitting' || formState === 'success'}>
              {formState === 'idle' && <><Send size={18} /> Send Message</>}
              {formState === 'submitting' && <><Loader2 size={18} className="spin" /> Sending...</>}
              {formState === 'success' && <><CheckCircle size={18} /> Message Sent!</>}
              {formState === 'error' && <>⚠️ Try Again</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
