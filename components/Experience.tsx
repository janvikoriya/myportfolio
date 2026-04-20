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

        {/* Role 2: LogicNest Full Stack */}
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

          <h3 style={{ fontSize: '1.4rem', color: '#fff' }}>Full Stack Developer | MERN <span className="gradient-text">@ LogicNest Technology</span></h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '16px', fontSize: '0.9rem' }}>Rajkot</p>

          <ul style={{ listStyle: 'none', color: '#ccc', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> Delivered end-to-end features from requirement analysis to deployment.
            </li>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> Developed and maintained full-stack applications using MERN stack.
            </li>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> Optimized application performance and maintained code quality.
            </li>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> Built secure RESTful APIs with authentication & role-based access control.
            </li>
          </ul>
        </motion.div>

        {/* Role 3: LogicNest Intern */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
              <span style={{ color: 'var(--primary)' }}>▹</span> Implemented authentication and designed scalable API architecture to support increased demand.
            </li>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> Developed responsive web apps and integrated CRUD-based backend systems.
            </li>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> Contributed to AI-based automation concepts, improving development efficiency.
            </li>
          </ul>
        </motion.div>

        {/* Role 4: Freelance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
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

          <h3 style={{ fontSize: '1.4rem', color: '#fff' }}>Freelance Web Developer <span className="gradient-text">@ Self-Employed</span></h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '16px', fontSize: '0.9rem' }}>Remote</p>

          <ul style={{ listStyle: 'none', color: '#ccc', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> Developed and redesigned websites for businesses focusing on UX and performance.
            </li>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> Built customized websites to support e-commerce and service-based businesses.
            </li>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> Improved navigation and conversion flow to enhance user engagement.
            </li>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> Worked on modern tech stacks including React, Next.js, and Node.js.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
