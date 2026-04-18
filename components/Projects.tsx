'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Logic Nest Technology',
    desc: 'Digital transformation firm focusing on software architecture, UI/UX engineering, and AI-driven smart solutions.',
    tech: ['React', 'Next.js', 'Software Architecture'],
    image: '/logicnest.png',
    github: '#',
    link: 'https://logicnesttechnology.com/',
  },
  {
    title: 'Kortex NU',
    desc: 'Premium brand specializing in precision-engineered kitchen and architectural hardware systems with a luxury aesthetic.',
    tech: ['UI/UX', 'Product Display', 'Responsive Design'],
    image: '/kortexnu.png',
    github: '#',
    link: 'https://kortex-nu.vercel.app/about.html',
  },
  {
    title: 'Nexvity Infotech',
    desc: 'Professional IT services and technology solutions provider, delivering scalable enterprise software and infrastructure support.',
    tech: ['IT Services', 'Cloud Solutions', 'Enterprise Software'],
    image: '/nexvity.png',
    github: '#',
    link: 'https://nexvityinfotech.com/',
  },
  {
    title: 'Madhav Epoxy Work',
    desc: 'Specialist provider of industrial and residential epoxy resin flooring solutions, known for durability and high-quality finishes.',
    tech: ['Service Platform', 'Industrial UI', 'Optimization'],
    image: '/madhavepoxy.png',
    github: '#',
    link: 'https://madhavepoxywork.com/',
  },
  {
    title: 'Kortex Hardware',
    desc: 'Official flagship platform for luxury kitchen and architectural hardware engineered for modern living and high-end residential projects.',
    tech: ['E-commerce', 'Architectural Fittings', 'Premium Branding'],
    image: '/kortexnu.png', // Reuse or generate a variant
    github: '#',
    link: 'https://kortexhardware.com/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{ marginBottom: '48px' }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
          <span style={{ color: 'var(--primary)', marginRight: '10px' }}>03.</span>
          Featured Projects
        </h2>
        <p style={{ color: '#aaa' }}>Some of the work I have done recently.</p>
      </motion.div>

      <div className="grid-cols grid-3">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="card"
            style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
              <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ marginBottom: '12px' }}>{project.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#aaa', marginBottom: '20px', flex: 1 }}>{project.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                {project.tech.map(t => (
                  <span key={t} style={{ fontSize: '0.75rem', color: 'var(--primary)', background: 'rgba(0, 242, 255, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                    {t}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href={project.github} className="hover:text-primary" style={{ color: '#fff', transition: 'color 0.3s' }}><FaGithub size={20} /></a>
                <a href={project.link} className="hover:text-primary" style={{ color: '#fff', transition: 'color 0.3s' }}><FaExternalLinkAlt size={20} /></a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
