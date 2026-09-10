import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import styles from '../app/page.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContenido}>
        <p className={styles.footerTitulo}>Hablemos</p>

        <div className={styles.footerIconos}>
          <a href="mailto:sebastian2105sanchez@gmail.com" className={styles.footerIcono} aria-label="Email">
            <FaEnvelope size={20} />
          </a>
          <a href="https://www.linkedin.com/in/sebasti%C3%A1n-s%C3%A1nchez-0ab0b6314/" target="_blank" rel="noopener noreferrer" className={styles.footerIcono} aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/Sebastian21sa" target="_blank" rel="noopener noreferrer" className={styles.footerIcono} aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href="https://www.instagram.com/sebastian.sanchez2105" target="_blank" rel="noopener noreferrer" className={styles.footerIcono} aria-label="Instagram">
            <FaInstagram size={20} />
          </a>
          <a href="https://wa.me/573126841341?text=Hola%2C%20estoy%20interesado%20en%20comunicarme%20contigo" target="_blank" rel="noopener noreferrer" className={styles.footerIcono} aria-label="WhatsApp">
            <FaWhatsapp size={20} />
          </a>
        </div>

        <p className={styles.footerCopy}>Sebastian Sanchez - {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
