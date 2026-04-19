"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Particles = () => {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "vw", 
            y: Math.random() * 100 + "vh",
            opacity: Math.random() * 0.3 + 0.1,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            y: [null, (Math.random() * -100 - 50) + "px"],
            opacity: [null, 0]
          }}
          transition={{ 
            duration: Math.random() * 5 + 5, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 5
          }}
          style={{
            position: 'absolute',
            width: '2px',
            height: '2px',
            backgroundColor: 'var(--primary)',
            borderRadius: '50%',
          }}
        />
      ))}
    </div>
  );
};

export default function BackgroundEffect() {
  const [mounted, setMounted] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const shadowX = useSpring(mouseX, springConfig);
  const shadowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: -10,
      overflow: 'hidden',
      pointerEvents: 'none',
      backgroundColor: 'transparent'
    }}>
      {/* Grid Pattern */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          backgroundImage: `radial-gradient(circle at 1.5px 1.5px, var(--primary) 0.5px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Primary Spotlight (Dynamic) */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(600px circle at ${shadowX}px ${shadowY}px, var(--primary-glow), transparent 60%)`,
          opacity: 0.15
        }}
      />
      
      {/* Secondary Spotlight (Aura) */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(800px circle at ${shadowX}px ${shadowY}px, var(--secondary-glow), transparent 70%)`,
          opacity: 0.1
        }}
      />

      {/* Static Blobs (Top Left) */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '50vw',
        height: '50vw',
        borderRadius: '50%',
        background: 'var(--primary-glow)',
        filter: 'blur(100px)',
        opacity: 0.07,
        animation: 'pulse 10s infinite alternate'
      }} />

      {/* Static Blobs (Bottom Right) */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '-10%',
        width: '50vw',
        height: '50vw',
        borderRadius: '50%',
        background: 'var(--secondary-glow)',
        filter: 'blur(100px)',
        opacity: 0.07,
        animation: 'pulse 8s infinite alternate-reverse'
      }} />
      
      {/* Subtle Noise Texture */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.02,
          mixBlendMode: 'overlay',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating Particles */}
      <Particles />

      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.05; }
          100% { transform: scale(1.2); opacity: 0.1; }
        }
      `}</style>
    </div>
  );
}
