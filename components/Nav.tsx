import Link from 'next/link'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import styles from '../app/page.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContenido}>
        <Link href="/">Sebastian Sanchez</Link>

        <div className={styles.navLinks}>
          <Link href="/#proyectos">Proyectos</Link>
          <Link href="/sobre-mi">Sobre mi</Link>
          <Link href="/contacto">Contacto</Link>
        </div>

        <div className={styles.navIconos}>
          <a href="https://wa.me/573126841341?text=Hola%2C%20estoy%20interesado%20en%20comunicarme%20contigo" target="_blank" rel="noopener noreferrer" className={styles.navIcono} aria-label="WhatsApp">
            <FaWhatsapp size={20} />
          </a>
          <a href="https://www.instagram.com/sebastian.sanchez2105" target="_blank" rel="noopener noreferrer" className={styles.navIcono} aria-label="Instagram">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </nav>
  )
}
