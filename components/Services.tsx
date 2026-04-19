'use client';

import { motion } from 'framer-motion';
import { Code, ShoppingCart, Layout, Bug, Link, Terminal } from 'lucide-react';

const services = [
  { icon: <Code size={24} />, title: 'Full Stack Web Development', desc: 'Custom end to end web solutions using modern frameworks.' },
  { icon: <Layout size={24} />, title: 'Website Redesign & Opt.', desc: 'Transforming legacy sites into modern, high performance experiences.' },
  { icon: <Bug size={24} />, title: 'Bug Fixing & QA Support', desc: 'Ensuring your application is reliable and bug-free through testing.' },
  { icon: <Link size={24} />, title: 'API Integration', desc: 'Connecting your web apps with third party services and platforms.' },
  { icon: <Terminal size={24} />, title: 'AI-Assisted Solutions', desc: 'Leveraging AI tools for smarter development and debugging workflows.' },
];

const Services = () => {
  return (
    <section id="services" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ textAlign: 'left', marginBottom: '64px' }}
      >
        <span style={{
          color: 'var(--primary)',
          fontSize: '0.9rem',
          fontWeight: '600',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '12px'
        }}>
          05. Solutions
        </span>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '20px', fontWeight: '800' }}>
          How I Can <span className="gradient-text">Help</span>
        </h2>
        <div style={{
          width: '60px',
          height: '4px',
          background: 'var(--primary)',
          margin: '0 0 24px',
          borderRadius: '2px'
        }} />
      </motion.div>

      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid-cols grid-3"
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="card"
            style={{ textAlign: 'left' }}
          >
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              background: 'rgba(255,255,255,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px',
              color: 'var(--primary)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              {service.icon}
            </div>
            <h3 style={{ marginBottom: '12px', fontSize: '1.4rem', color: '#fff' }}>{service.title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
