import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import ScrollToTop from '@/components/ScrollToTop';
import Background3D from '@/components/Background3D';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: 'transparent' }}>
      <Background3D />
      <Navbar />
      <Hero />
      <div style={{ position: 'relative' }}>

        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </div>

      <ScrollToTop />

      <footer style={{
        padding: '40px 24px',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        color: 'var(--text-muted)',
        fontSize: '0.9rem'
      }}>
        <p>© 2026 Janvi Koriya.</p>
      </footer>
    </main>
  );
}
