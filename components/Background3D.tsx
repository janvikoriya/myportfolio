"use client"

import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
// Removed maath to avoid NaN issues with ESM in Next.js
function generateSphere(count: number, radius: number) {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const r = radius * Math.pow(Math.random(), 1 / 3);
    points[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    points[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    points[i * 3 + 2] = r * Math.cos(phi);
  }
  return points;
}

function StarField(props: any) {
  const ref = useRef<any>(null)
  const [sphere] = useState(() => generateSphere(5000, 1.2))

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
      
      // Add subtle parallax based on mouse
      const mouseX = state.mouse.x * 0.1
      const mouseY = state.mouse.y * 0.1
      ref.current.rotation.x += (mouseY - ref.current.rotation.x) * 0.05
      ref.current.rotation.y += (mouseX - ref.current.rotation.y) * 0.05
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#00f2ff"
          size={0.0015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  )
}

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-[-20] pointer-events-none">
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -21,
          background: '#05070a'
        }}
      />
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -19,
          background: 'radial-gradient(circle at center, rgba(5, 7, 10, 0.2) 0%, rgba(5, 7, 10, 0.8) 50%, #05070a 100%)'
        }}
      />
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        gl={{ antialias: false, alpha: true }}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          <StarField />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default Background3D
