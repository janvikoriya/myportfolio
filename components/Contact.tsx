'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ marginBottom: '60px', textAlign: 'center' }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Get In Touch</h2>
        <p style={{ color: 'var(--text-muted)' }}>Whether you have a project idea or just want to say hi, my inbox is always open.</p>
      </motion.div>

      <div className="grid-cols grid-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
        >
          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ color: 'var(--primary)' }}><FaEnvelope size={24} /></div>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email</p>
              <p style={{ fontWeight: '500' }}>janvikoriya123@gmail.com</p>
            </div>
          </div>

          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ color: 'var(--primary)' }}><FaPhone size={24} /></div>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Phone</p>
              <p style={{ fontWeight: '500' }}>+91 9512075324</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px', marginTop: '12px' }}>
            <motion.a whileHover={{ y: -5, color: 'var(--primary)' }} href="https://github.com/janvikoriya" target="_blank" style={{ fontSize: '1.5rem' }}><FaGithub /></motion.a>
            <motion.a whileHover={{ y: -5, color: 'var(--primary)' }} href="https://www.linkedin.com/in/janvi-k-290177233/" target="_blank" style={{ fontSize: '1.5rem' }}><FaLinkedin /></motion.a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card"
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '0.9rem', color: '#ccc' }}>Name</label>
            <input type="text" placeholder="John Doe" style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--card-border)',
              borderRadius: '8px',
              padding: '12px',
              color: '#fff',
              outline: 'none',
              transition: 'border-color 0.3s'
            }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '0.9rem', color: '#ccc' }}>Email</label>
            <input type="email" placeholder="john@example.com" style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--card-border)',
              borderRadius: '8px',
              padding: '12px',
              color: '#fff',
              outline: 'none',
              transition: 'border-color 0.3s'
            }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '0.9rem', color: '#ccc' }}>Message</label>
            <textarea placeholder="Your message here..." rows={4} style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--card-border)',
              borderRadius: '8px',
              padding: '12px',
              color: '#fff',
              outline: 'none',
              resize: 'none',
              transition: 'border-color 0.3s'
            }} />
          </div>

          <button className="glow-button" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            Send Message <FaPaperPlane size={18} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
