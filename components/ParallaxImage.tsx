'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function ParallaxImage({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    function onScroll() {
      setOffset(window.scrollY * 0.15)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      style={{ transform: `translateY(${offset}px)`, objectFit: 'cover' }}
      priority
    />
  )
}
