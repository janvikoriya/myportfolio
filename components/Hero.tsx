'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>

      <div className="section-container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '40px'
      }}>

        <div style={{ maxWidth: '800px' }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ fontWeight: '800', marginBottom: '16px' }}
          >
            I&apos;m <span className="gradient-text">Janvi Koriya</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ color: 'var(--text-muted)', marginBottom: '24px' }}
          >
            AI & Full Stack Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ lineHeight: '1.6', color: '#ccc', marginBottom: '40px' }}
          >
            I specialize in building AI-powered, scalable web applications and integrating GenAI features to automate complex processes and elevate user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}
          >
            <a href="/resume.pdf" target="_blank" download className="glow-button">Download Resume</a>
            <a href="#contact" style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              padding: '12px 24px',
              borderRadius: '8px',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'} 
               onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
