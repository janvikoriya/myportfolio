'use client';

import { motion } from 'framer-motion';
import { Code, ShoppingCart, Layout, Bug, Link, Terminal, Video } from 'lucide-react';

const services = [
  {
    icon: <Code size={24} />,
    title: 'Full Stack Web Development',
    desc: 'Custom end-to-end web solutions using modern frameworks.',
    details: [
      'React & Next.js applications',
      'Scalable Node.js & PHP backends',
      'Database design & integration',
      'Modern, responsive layouts'
    ]
  },
  {
    icon: <Layout size={24} />,
    title: 'Website Redesign & Opt.',
    desc: 'Transforming legacy sites into modern, high-performance experiences.',
    details: [
      'Core Web Vitals optimization',
      'Sleek modern UI/UX design',
      'SEO & metadata best practices',
      'Mobile-first responsiveness'
    ]
  },
  {
    icon: <Bug size={24} />,
    title: 'Bug Fixing & QA Support',
    desc: 'Ensuring your application is reliable and bug-free through testing.',
    details: [
      'API testing using Postman',
      'Cross-browser compatibility checks',
      'Automated & manual QA workflows',
      'Performance debugging & profiling'
    ]
  },
  {
    icon: <Link size={24} />,
    title: 'API Integration',
    desc: 'Connecting your web apps with third-party services and platforms.',
    details: [
      'Secure payment gateway systems',
      'OAuth & role-based authentication',
      'Webhooks & background tasks',
      'Custom API endpoint development'
    ]
  },
  {
    icon: <Terminal size={24} />,
    title: 'AI-Assisted Solutions',
    desc: 'Leveraging AI tools for smarter development and debugging workflows.',
    details: [
      'Development process automation',
      'Smarter code generation & debugging',
      'LLM integration & prompt design',
      'AI assistant/chatbot plugins'
    ]
  },
  {
    icon: <Video size={24} />,
    title: 'AI Video & Generative Content',
    desc: 'Creating AI-powered cinematic videos, promotional reels, and engaging social media content.',
    details: [
      'AI-generated cinematic videos & visuals',
      'AI voiceovers and synced subtitles',
      'Promotional and marketing campaigns',
      'Creative storytelling workflows',
      'Short-form social media production',
      'Google Flow, Runway, prompt engineering'
    ]
  }
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
          06. Solutions
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
            style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', height: '100%' }}
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
              border: '1px solid rgba(255,255,255,0.1)',
              flexShrink: 0
            }}>
              {service.icon}
            </div>
            <h3 style={{ marginBottom: '12px', fontSize: '1.4rem', color: '#fff' }}>{service.title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '16px' }}>{service.desc}</p>
            
            {service.details && (
              <ul style={{ 
                listStyle: 'none', 
                color: '#ccc', 
                fontSize: '0.85rem', 
                marginTop: 'auto', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '8px',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                paddingTop: '16px'
              }}>
                {service.details.map((detail, dIdx) => (
                  <li key={dIdx} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--primary)', flexShrink: 0 }}>▹</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
