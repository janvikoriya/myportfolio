'use client';

import { motion } from 'framer-motion';
import { Code, ShoppingCart, Layout, Bug, Link, Terminal } from 'lucide-react';

const services = [
  { icon: <Code size={24} />, title: 'Full Stack Web Development', desc: 'Custom end-to-end web solutions using modern frameworks.' },
  { icon: <Layout size={24} />, title: 'Website Redesign & Opt.', desc: 'Transforming legacy sites into modern, high-performance experiences.' },
  { icon: <Bug size={24} />, title: 'Bug Fixing & QA Support', desc: 'Ensuring your application is reliable and bug-free through testing.' },
  { icon: <Link size={24} />, title: 'API Integration', desc: 'Connecting your web apps with third-party services and platforms.' },
  { icon: <Terminal size={24} />, title: 'AI-Assisted Solutions', desc: 'Leveraging AI tools for smarter development and debugging workflows.' },
];

const Services = () => {
  return (
    <section id="services" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Services I Offer</h2>
        <div style={{ width: '80px', height: '4px', background: 'var(--primary)', margin: '0 auto', borderRadius: '2px' }} />
      </motion.div>

      <div className="grid-cols grid-3">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="card"
            style={{ textAlign: 'center' }}
          >
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '12px',
              background: 'rgba(255,255,255,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              color: 'var(--primary)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              {service.icon}
            </div>
            <h3 style={{ marginBottom: '12px', fontSize: '1.2rem' }}>{service.title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
