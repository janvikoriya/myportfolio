'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Marwadi University',
    duration: '2024 - 2026',
    description: 'Specializing in advanced software development, AI integration, and enterprise system architecture.',
    status: 'In Progress'
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Saurashtra University',
    duration: '2021 - 2024',
    description: 'Foundation in computer science, web technologies, and database management systems.',
    status: 'Completed'
  }
];

const Education = () => {
  return (
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ marginBottom: '48px' }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
          <span style={{ color: 'var(--primary)', marginRight: '10px' }}>05.</span>
          Academic Background
        </h2>
      </motion.div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '32px' 
      }}>
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card"
            style={{
              position: 'relative',
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}
          >
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'rgba(0, 242, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary)',
              border: '1px solid rgba(0, 242, 255, 0.2)'
            }}>
              <GraduationCap size={28} />
            </div>

            <div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                marginBottom: '8px',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                <h3 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: '700' }}>{edu.degree}</h3>
                <span style={{ 
                  fontSize: '0.8rem', 
                  padding: '4px 12px', 
                  borderRadius: '20px', 
                  background: edu.status === 'Completed' ? 'rgba(0, 255, 127, 0.1)' : 'rgba(255, 165, 0, 0.1)',
                  color: edu.status === 'Completed' ? '#00ff7f' : '#ffa500',
                  border: `1px solid ${edu.status === 'Completed' ? 'rgba(0, 255, 127, 0.2)' : 'rgba(255, 165, 0, 0.2)'}`,
                  fontWeight: '600'
                }}>
                  {edu.status}
                </span>
              </div>
              <p style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '4px' }}>{edu.institution}</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>{edu.duration}</p>
              <p style={{ color: '#ccc', fontSize: '0.95rem', lineHeight: '1.6' }}>{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
