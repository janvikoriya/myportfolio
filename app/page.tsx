import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import AIChat from '@/components/AIChat';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <Navbar />
      <Hero />
      <div style={{ position: 'relative' }}>
          {/* Decorative gradients between sections */}
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: -1,
            background: 'radial-gradient(circle at 10% 20%, rgba(112, 0, 255, 0.05) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(0, 242, 255, 0.05) 0%, transparent 50%)'
          }} />

          <About />
          <Skills />
          <Projects />
          <Experience />
          <Services />
          <Contact />
      </div>

      <AIChat />

      <footer style={{
        padding: '40px 24px',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        color: 'var(--text-muted)',
        fontSize: '0.9rem'
      }}>
        <p>© 2026 Janvi Koriya. Designed & Built with Next.js</p>
      </footer>
    </main>
  );
}
