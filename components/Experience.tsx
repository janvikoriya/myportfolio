'use client';

import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ marginBottom: '48px' }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
          <span style={{ color: 'var(--primary)', marginRight: '10px' }}>04.</span>
          Professional Journey
        </h2>
      </motion.div>

      <div style={{ position: 'relative', borderLeft: '2px solid rgba(255,255,255,0.1)', paddingLeft: '32px', marginLeft: '8px' }}>
        {/* Role 1: Nexvity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ position: 'relative', marginBottom: '60px' }}
        >
          <div style={{
            position: 'absolute',
            left: '-41px',
            top: '0',
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            background: 'var(--primary)',
            boxShadow: '0 0 10px var(--primary-glow)'
          }} />

          <h3 style={{ fontSize: '1.4rem', color: '#fff' }}>AI Software Developer | Full Stack Engineer <span className="gradient-text">@ Nexvity Infotech</span></h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '16px', fontSize: '0.9rem' }}>Rajkot</p>

          <ul style={{ listStyle: 'none', color: '#ccc', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> Integrated AI & GenAI features to automate processes and improve user experience.
            </li>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> Building AI-powered, scalable web applications using React, Node.js, and MongoDB.
            </li>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> Designed production-ready systems prioritizing performance and scalability.
            </li>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> Collaborated cross-functionally to develop effective digital solutions.
            </li>
          </ul>
        </motion.div>

        {/* Role 2: LogicNest */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          style={{ position: 'relative', marginBottom: '60px' }}
        >
          <div style={{
            position: 'absolute',
            left: '-41px',
            top: '0',
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            background: 'var(--primary)',
            boxShadow: '0 0 10px var(--primary-glow)'
          }} />

          <h3 style={{ fontSize: '1.4rem', color: '#fff' }}>Full Stack Web Developer Intern <span className="gradient-text">@ LogicNest Technology</span></h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '16px', fontSize: '0.9rem' }}>Rajkot</p>

          <ul style={{ listStyle: 'none', color: '#ccc', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> Implemented authentication and designed scalable API architecture to support increased user demand.
            </li>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> Developed responsive web apps and integrated CRUD-based backend systems to enhance user interaction.
            </li>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> Contributed to AI-based automation concepts, improving development efficiency and innovation.
            </li>
          </ul>
        </motion.div>

        {/* Role 3: Self-Employed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ position: 'relative', marginBottom: '40px' }}
        >
          <div style={{
            position: 'absolute',
            left: '-41px',
            top: '0',
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.2)',
          }} />

          <h3 style={{ fontSize: '1.4rem', color: '#fff' }}>Self-Employed Developer <span className="gradient-text">@ Remote</span></h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '16px', fontSize: '0.9rem' }}>Project Basis</p>

          <ul style={{ listStyle: 'none', color: '#ccc', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> Built and redesigned professional websites for international clients.
            </li>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> Developed product-based e-commerce platforms with integrated payment gateways.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
