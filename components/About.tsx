'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-container responsive-border">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={{ marginBottom: '24px' }}>
            <span style={{ color: 'var(--primary)', marginRight: '10px' }}>01.</span>
            About Me
          </h2>
          <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '20px', color: '#ccc', lineHeight: '1.8', textAlign: 'justify' }}>
            <p>
              I’m a <span style={{ color: 'var(--primary)' }}>Full Stack Developer</span> with experience in building responsive and scalable web applications using technologies like <span style={{ color: 'var(--primary)' }}>React, Node.js, PHP, and MySQL</span>. I focus on developing efficient, user-friendly solutions with clean code and strong performance.
            </p>
            <p>
              Alongside development, I have hands-on experience in <span style={{ color: 'var(--primary)' }}>QA testing</span>, ensuring applications are reliable, bug-free, and work smoothly across different devices and browsers. I also have a basic understanding of <span style={{ color: 'var(--primary)' }}>domain and server management</span>, including deploying websites, handling hosting environments, and managing live projects.
            </p>
            <p>
              I’m continuously learning and improving my skills to build <span style={{ color: 'var(--primary)' }}>smarter, more scalable</span> digital products that deliver real-world impact.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card"
          style={{ maxWidth: '600px' }}
        >
          <h3 style={{ marginBottom: '16px', color: 'var(--primary)' }}>Quick Highlights</h3>
          <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '0.95rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> Full Stack Dev
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> React & Node.js
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> PHP & MySQL
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> QA & Testing
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> Live Deployment
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> Server Mgmt
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
