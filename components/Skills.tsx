'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
  },
  {
    title: 'Backend & Database',
    skills: ['Node.js', 'Express.js', 'PHP', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Tools & Concepts',
    skills: ['Git/GitHub', 'Postman', 'VS Code', 'QA Testing', 'Agile/SDLC', 'REST APIs'],
  },
  {
    title: 'Cloud & Deployment',
    skills: ['Vercel', 'Netlify', 'Hosting', 'Domain setup', 'Cpanel'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ marginBottom: '48px' }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
          <span style={{ color: 'var(--primary)', marginRight: '10px' }}>02.</span>
          Technical Expertise
        </h2>
        <p style={{ color: '#aaa', fontSize: '1.1rem' }}>A comprehensive set of tools and technologies I use to bring ideas to life.</p>
      </motion.div>

      <div className="grid-cols grid-2">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 style={{ marginBottom: '20px', fontSize: '1.3rem', color: 'var(--primary)' }}>{cat.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {cat.skills.map(skill => (
                <span
                  key={skill}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '20px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    fontSize: '0.85rem',
                    color: '#ddd',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = '#ddd';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
