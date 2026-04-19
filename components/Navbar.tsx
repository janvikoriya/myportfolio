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
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isScrolled ? 12 : 24, 
          opacity: 1,
        }}
        className="fixed z-[100] transition-all duration-300"
        style={{
          left: 0,
          right: 0,
          margin: '0 auto',
          width: 'min(calc(100% - 32px), 1200px)',
          height: isScrolled ? '64px' : '76px',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(10, 10, 10, 0.8)',
          backdropFilter: 'blur(20px) saturate(180%)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
          top: 0
        }}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ 
            fontSize: '1.4rem', 
            fontWeight: '800', 
            cursor: 'pointer', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            color: '#fff' 
          }}
        >
          <div style={{
            width: '32px',
            height: '32px',
            position: 'relative'
          }}>
            <img 
              src="/laptop.png" 
              alt="Logo" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          <span style={{ letterSpacing: '-1px' }}>Janvi<span style={{ color: 'var(--primary)' }}>.</span></span>
        </motion.div>

        {/* Desktop Links */}
        <div className="desktop-nav">
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ color: '#fff' }}
                style={{
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  color: '#999',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="/jk.pdf"
              target="_blank"
              download
              whileHover={{ scale: 1.05, background: '#f0f0f0' }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '10px 24px',
                fontSize: '0.8rem',
                fontWeight: '800',
                borderRadius: '10px',
                background: '#fff',
                color: '#000',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                textTransform: 'uppercase'
              }}
            >
              Resume
            </motion.a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            cursor: 'pointer',
            color: '#fff',
            display: 'none',
            padding: '8px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '8px'
          }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(10px)',
                zIndex: 90
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              style={{
                position: 'fixed',
                top: '100px',
                left: '20px',
                right: '20px',
                padding: '40px 24px',
                background: 'rgba(15, 15, 15, 0.98)',
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
                zIndex: 101,
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#fff',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    letterSpacing: '2px'
                  }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/jk.pdf"
                target="_blank"
                download
                style={{
                  textAlign: 'center',
                  padding: '18px',
                  borderRadius: '12px',
                  fontWeight: '800',
                  background: '#fff',
                  color: '#000',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  marginTop: '10px'
                }}
              >
                Resume
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx>{`
        .desktop-nav {
          display: none;
        }
        .mobile-toggle {
          display: block !important;
        }

        @media (min-width: 768px) {
          .desktop-nav {
            display: block;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
