'use client'

import { useEffect, useRef, useState } from 'react'

export default function AnimatedNumber({
  hasta,
  sufijo = '',
  duracionMs = 1500,
}: {
  hasta: number
  sufijo?: string
  duracionMs?: number
}) {
  // El valor inicial es el final: así el HTML del servidor ya trae la cifra real
  const [valor, setValor] = useState(hasta)
  const ref = useRef<HTMLSpanElement>(null)
  const yaAnimo = useRef(false)

  useEffect(() => {
    // Si la persona pidió menos movimiento, se queda con el valor final
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Sin IntersectionObserver tampoco animamos: el valor final ya está puesto
    if (typeof IntersectionObserver === 'undefined') return

    // Solo en el navegador, y solo si se va a animar, arrancamos desde 0
    setValor(0)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !yaAnimo.current) {
          yaAnimo.current = true
          const inicio = performance.now()

          function animar(ahora: number) {
            const progreso = Math.min((ahora - inicio) / duracionMs, 1)
            const facilitado = 1 - Math.pow(1 - progreso, 3)
            setValor(Math.round(facilitado * hasta))
            if (progreso < 1) requestAnimationFrame(animar)
          }

          requestAnimationFrame(animar)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasta, duracionMs])

  return (
    <span ref={ref}>
      {valor}
      {sufijo}
    </span>
  )
}