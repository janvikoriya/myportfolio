'use client';


import React, { useRef, useState } from 'react';
import * as emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const SERVICE_ID = 'service_tx2sg8b';
    const TEMPLATE_ID = 'template_aac9xoi';
    const PUBLIC_KEY = 'HjK12yWf-jWLZJ2hj';

    // Initialize EmailJS explicitly
    emailjs.init(PUBLIC_KEY);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY)
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
        console.error('FAILED...', error);
        const errorMsg = error?.text || error?.message || JSON.stringify(error);
        alert('EmailJS Error: ' + errorMsg); // Pop up the actual error
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <section id="contact" className="section-container">
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
          06. Connect
        </span>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '20px', fontWeight: '800' }}>
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div style={{
          width: '60px',
          height: '4px',
          background: 'var(--primary)',
          margin: '0 0 24px',
          borderRadius: '2px'
        }}></div>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', fontSize: '1.1rem' }}>
          Whether you have a project idea or just want to say hi, my inbox is always open.
        </p>
      </motion.div>

      <div className="grid-cols grid-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
        >
          {/* Email Card */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="card"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '24px',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            <div style={{
              background: 'rgba(0, 242, 255, 0.1)',
              borderRadius: '12px',
              minWidth: '60px',
              width: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary)',
              border: '1px solid rgba(0, 242, 255, 0.2)',
            }}>
              <FaEnvelope size={24} />
            </div>
            <div style={{ overflow: 'hidden' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px', fontWeight: 'bold' }}>Email</p>
              <p style={{ fontWeight: '600', fontSize: 'clamp(0.85rem, 3.5vw, 1.1rem)', wordBreak: 'break-all' }}>janvikoriya123@gmail.com</p>
            </div>
            <div style={{ position: 'absolute', right: '20px', top: '20px', opacity: 0.3 }} className="desktop-only">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </div>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="card"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '24px',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            <div style={{
              background: 'rgba(0, 242, 255, 0.1)',
              borderRadius: '12px',
              minWidth: '60px',
              width: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary)',
              border: '1px solid rgba(0, 242, 255, 0.2)',
            }}>
              <FaPhone size={24} />
            </div>
            <div style={{ overflow: 'hidden' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px', fontWeight: 'bold' }}>Phone</p>
              <p style={{ fontWeight: '600', fontSize: 'clamp(0.9rem, 4vw, 1.1rem)' }}>+91 9512075324</p>
            </div>
            <div style={{ position: 'absolute', right: '20px', top: '20px', opacity: 0.3 }} className="desktop-only">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </div>
          </motion.div>

          <div style={{ display: 'flex', gap: '20px', marginTop: '12px', justifyContent: 'flex-start' }}>
            <motion.a whileHover={{ y: -5, color: 'var(--primary)' }} href="https://github.com/janvikoriya" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem', color: '#fff' }} title="GitHub"><FaGithub /></motion.a>
            <motion.a whileHover={{ y: -5, color: 'var(--primary)' }} href="https://www.linkedin.com/in/janvi-k-290177233/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem', color: '#fff' }} title="LinkedIn"><FaLinkedin /></motion.a>
            <motion.a whileHover={{ y: -5, color: 'var(--primary)' }} href="mailto:janvikoriya123@gmail.com" style={{ fontSize: '1.5rem', color: '#fff' }} title="Email"><FaEnvelope /></motion.a>
          </div>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card"
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '0.9rem', color: '#ccc' }}>Name</label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="John Doe"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--card-border)',
                borderRadius: '8px',
                padding: '12px',
                color: '#fff',
                outline: 'none',
                transition: 'border-color 0.3s'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '0.9rem', color: '#ccc' }}>Email</label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="john@example.com"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--card-border)',
                borderRadius: '8px',
                padding: '12px',
                color: '#fff',
                outline: 'none',
                transition: 'border-color 0.3s'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '0.9rem', color: '#ccc' }}>Message</label>
            <textarea
              name="message"
              required
              placeholder="Your message here..."
              rows={4}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--card-border)',
                borderRadius: '8px',
                padding: '12px',
                color: '#fff',
                outline: 'none',
                resize: 'none',
                transition: 'border-color 0.3s'
              }}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="glow-button"
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              opacity: status === 'sending' ? 0.7 : 1,
              cursor: status === 'sending' ? 'not-allowed' : 'pointer'
            }}
          >
            {status === 'idle' && <>Send Message <FaPaperPlane size={18} /></>}
            {status === 'sending' && <>Sending...</>}
            {status === 'success' && <>Message Sent! <FaCheckCircle size={18} /></>}
            {status === 'error' && <>Failed to Send <FaExclamationCircle size={18} /></>}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
