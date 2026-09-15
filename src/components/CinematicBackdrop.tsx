import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef, useState, useEffect, Suspense } from 'react'
import * as THREE from 'three'

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

function Particles({ count = 140 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.02
    ref.current.rotation.x += delta * 0.008
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#E8282C"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function SoftGlow() {
  const mesh = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (!mesh.current) return
    const t = clock.getElapsedTime()
    mesh.current.scale.setScalar(1 + Math.sin(t * 0.4) * 0.08)
    const mat = mesh.current.material as THREE.MeshBasicMaterial
    mat.opacity = 0.12 + Math.sin(t * 0.35) * 0.03
  })

  return (
    <mesh ref={mesh} position={[2.4, 0.6, -3]}>
      <sphereGeometry args={[2.8, 32, 32]} />
      <meshBasicMaterial
        color="#E8282C"
        transparent
        opacity={0.14}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  )
}

function LightRig() {
  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[4, 2, 2]} intensity={1.2} color="#FF3236" distance={18} />
      <pointLight position={[-5, -1, 1]} intensity={0.35} color="#ffffff" distance={14} />
    </>
  )
}

function Scene() {
  return (
    <>
      <LightRig />
      <SoftGlow />
      <Particles />
    </>
  )
}

/** Deferred WebGL ambience — skips entirely under reduced motion / weak DPR. */
export function CinematicBackdrop() {
  const reduced = usePrefersReducedMotion()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (reduced) return
    let cancelled = false
    let idleId: number | undefined
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    const go = () => {
      if (!cancelled) setReady(true)
    }

    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(go, { timeout: 1800 })
    } else {
      timeoutId = setTimeout(go, 600)
    }

    return () => {
      cancelled = true
      if (idleId !== undefined && typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(idleId)
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId)
    }
  }, [reduced])

  if (reduced || !ready) {
    return (
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-void"
        aria-hidden
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 45% at 78% 18%, color-mix(in oklab, #e8282c 18%, transparent), transparent 70%), radial-gradient(ellipse 50% 40% at 12% 80%, color-mix(in oklab, #e8282c 8%, transparent), transparent 65%)',
        }}
      />
    )
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      <div
        className="absolute inset-0 bg-void"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 55% 40% at 80% 15%, color-mix(in oklab, #e8282c 14%, transparent), transparent 70%)',
        }}
      />
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
