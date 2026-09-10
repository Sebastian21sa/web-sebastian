'use client'

import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import styles from '../app/page.module.css'

export default function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={styles.scrollTop}
      aria-label="Volver arriba"
    >
      <FaArrowUp size={16} />
    </button>
  )
}
