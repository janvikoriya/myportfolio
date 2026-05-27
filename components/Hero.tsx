'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="section-container hero-container">
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
            <a href="/janvi_koriya.pdf" target="_blank" download className="glow-button">Download Resume</a>
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

      <style jsx>{`
        .hero-section {
          min-height: auto;
          display: flex;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 100px 20px 80px;
          align-items: flex-start;
        }
        
        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 40px;
        }

        @media (min-width: 768px) {
          .hero-section {
            min-height: 100vh;
            align-items: center;
            padding: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
