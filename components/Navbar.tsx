'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '24px',
        paddingRight: '24px'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{ fontSize: '1.5rem', fontWeight: 'bold', cursor: 'pointer' }}
          className="gradient-text"
        >
          JK.
        </motion.div>

        <div style={{ display: 'flex', gap: '32px' }}>
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ color: 'var(--primary)', y: -2 }}
              style={{
                fontSize: '0.9rem',
                fontWeight: '500',
                color: isScrolled ? '#fff' : '#ccc',
                transition: 'color 0.3s ease'
              }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <motion.a
          href="/resume.pdf"
          target="_blank"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glow-button"
          style={{ padding: '8px 20px', fontSize: '0.85rem' }}
        >
          Resume
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
