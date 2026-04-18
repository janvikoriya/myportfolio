'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-container">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
            <span style={{ color: 'var(--primary)', marginRight: '10px' }}>01.</span>
            About Me
          </h2>
          <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '20px', color: '#ccc', lineHeight: '1.8' }}>
            <p>
              I am an <span style={{ color: 'var(--primary)' }}>AI Software Developer & Full Stack Engineer</span> with a proven track record of building production-ready systems that prioritize performance and scalability.
            </p>
            <p>
              During my time at <span style={{ color: 'var(--primary)' }}>Nexvity Infotech</span>, I led the integration of Generative AI features and developed scalable web applications using React, Node.js, and MongoDB. My experience at <span style={{ color: 'var(--primary)' }}>LogicNest Technology</span> further solidified my foundation in designing robust API architectures and responsive web systems.
            </p>
            <p>
              I specialize in merging modern Full Stack technologies with cutting-edge AI automation to create digital solutions that are not only functional but intelligent. I am passionate about the intersection of software engineering and machine learning.
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
              <span style={{ color: 'var(--primary)' }}>▹</span> QA Enthusiast
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> Agile/SDLC
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> AI-Assisted Dev
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> E-commerce Expert
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--primary)' }}>▹</span> Project Coord.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
