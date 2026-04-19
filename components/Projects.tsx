'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Logic Nest Technology',
    desc: 'Digital transformation firm focusing on software architecture, UI/UX engineering, and AI driven smart solutions.',
    tech: ['React', 'Next.js', 'Software Architecture'],
    image: '/logicnest_new.png',
    link: 'https://logicnesttechnology.com/',
  },

  {
    title: 'Nexvity Infotech',
    desc: 'Professional IT services and technology solutions provider, delivering scalable enterprise software and infrastructure support.',
    tech: ['IT Services', 'Cloud Solutions', 'Enterprise Software'],
    image: '/nexvity_new.png',
    link: 'https://nexvityinfotech.com/',
  },
  {
    title: 'Madhav Epoxy Work',
    desc: 'Specialist provider of industrial and residential epoxy resin flooring solutions, known for durability and high quality finishes.',
    tech: ['Service Platform', 'Industrial UI', 'Optimization'],
    image: '/madhavepoxy_new.png',
    link: 'https://madhavepoxywork.com/',
  },
  {
    title: 'Kortex Hardware',
    desc: 'Official flagship platform for luxury kitchen and architectural hardware engineered for modern living and high end residential projects.',
    tech: ['E commerce', 'Architectural Fittings', 'Premium Branding'],
    image: '/kortex_new.png',
    link: 'https://kortexhardware.com/',
  },
  {
    title: 'Kodoya Systems',
    desc: 'Advanced workflow and design platform with secure employee management. Use Credentials ID: Emp001 | Pass: 123456',
    tech: ['PHP', 'MySQL', 'Workflow Design', 'Management'],
    image: '/nexvity_new.png', // Using a premium placeholder
    link: 'https://kodoya.ct.ws/login.php',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ marginBottom: '64px', textAlign: 'left' }}
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
          03. Showcase
        </span>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '20px', fontWeight: '800' }}>
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div style={{
          width: '60px',
          height: '4px',
          background: 'var(--primary)',
          margin: '0 0 24px',
          borderRadius: '2px'
        }}></div>
        <p style={{ color: 'var(--text-muted)', maxWidth: '100%', margin: '0', fontSize: '1.1rem' }}>
          A collection of digital experiences crafted with precision, focus, and modern engineering.
        </p>
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
        viewport={{ once: true }}
        className="grid-cols grid-3"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="card"
            style={{
              padding: '0',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
            }}
          >
            <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                src={project.image}
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                className="project-image"
              />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, transparent 0%, rgba(5, 7, 10, 0.4) 100%)',
                pointerEvents: 'none'
              }}></div>
            </div>

            <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                {project.tech.map(t => (
                  <motion.span 
                    key={t} 
                    whileHover={{ scale: 1.1, background: 'rgba(0, 242, 255, 0.15)' }}
                    style={{
                      fontSize: '0.7rem',
                      color: 'var(--primary)',
                      background: 'rgba(0, 242, 255, 0.08)',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      border: '1px solid rgba(0, 242, 255, 0.15)',
                      fontWeight: '500',
                      cursor: 'default'
                    }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              <h3 style={{ marginBottom: '12px', fontSize: '1.4rem', color: '#fff' }}>{project.title}</h3>
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--text-muted)',
                marginBottom: '24px',
                flex: 1,
                lineHeight: '1.6'
              }}>
                {project.desc}
              </p>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-project-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '12px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  transition: 'all 0.3s ease',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}
              >
                View Project <FaExternalLinkAlt size={14} />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <style jsx>{`
        .card:hover .project-image {
          transform: scale(1.1);
        }
        .card:hover {
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 242, 255, 0.15);
          border-color: rgba(0, 242, 255, 0.3) !important;
        }
        .view-project-btn:hover {
          background: var(--primary);
          color: var(--background) !important;
          border-color: var(--primary);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px var(--primary-glow);
        }
      `}</style>
    </section>
  );
};

export default Projects;
