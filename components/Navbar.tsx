'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

        {/* Desktop Links */}
        <div style={{ display: 'none' }} className="desktop-nav">
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
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
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ cursor: 'pointer', display: 'block' }}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              borderTop: '1px solid var(--glass-border)'
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ fontSize: '1.1rem', fontWeight: '500' }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              download
              className="glow-button"
              style={{ textAlign: 'center' }}
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .desktop-nav {
          display: none !important;
        }
        .mobile-toggle {
          display: block !important;
        }

        @media (min-width: 768px) {
          .desktop-nav {
            display: block !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
