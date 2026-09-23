'use client'

import { useRef, useState } from 'react'

export default function TiltCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [estilo, setEstilo] = useState({})
  const [luz, setLuz] = useState({ x: 50, y: 50, activa: false })

  function manejarMovimiento(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const porcentajeX = (x / rect.width) * 100
    const porcentajeY = (y / rect.height) * 100
    const rotY = ((x / rect.width) - 0.5) * 8
    const rotX = ((y / rect.height) - 0.5) * -8

    setEstilo({
      transform: `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`,
    })
    setLuz({ x: porcentajeX, y: porcentajeY, activa: true })
  }

  function manejarSalida() {
    setEstilo({ transform: 'perspective(800px) rotateX(0) rotateY(0) scale(1)' })
    setLuz((prev) => ({ ...prev, activa: false }))
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={manejarMovimiento}
      onMouseLeave={manejarSalida}
      style={{
        ...estilo,
        transition: 'transform 0.15s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at ${luz.x}% ${luz.y}%, rgba(127, 203, 232, 0.12), transparent 60%)`,
          opacity: luz.activa ? 1 : 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
        }}
      />
      {children}
    </div>
  )
}
