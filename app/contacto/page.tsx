import Nav from '../../components/Nav'
import FadeIn from '../../components/FadeIn'
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'
import { fraunces, inter } from '../../lib/fonts'
import styles from './page.module.css'
import Footer from '../../components/Footer'

export default function Contacto() {
  return (
    <div className={inter.className}>
      <Nav />
      <div className={styles.contenedor}>
        <FadeIn>
          <h1 className={`${styles.titulo} ${fraunces.className}`}>Hablemos</h1>
          <p className={styles.parrafo}>
            Si algo de lo que viste en este portafolio
            resuena contigo, o simplemente quieres conectar, aqui me
            encuentras, contactame, o agregame en alguna de estas redes. Siempre estoy abierto a
            nuevas oportunidades, colaboraciones, o simplemente a charlar sobre
            tecnologia, IA, o tenis de mesa.
          </p>
          <div className={styles.opcionesContacto}>
            <a href="mailto:sebastian2105sanchez@gmail.com" className={styles.opcionContacto}>
              <FaEnvelope size={22} className={styles.iconoContacto} style={{ color: 'var(--accent-4)' }} />
              <div className={styles.textoContacto}>
                <span className={styles.labelContacto}>Email</span>
                <span className={styles.valorContacto}>sebastian2105sanchez@gmail.com</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/sebasti%C3%A1n-s%C3%A1nchez-0ab0b6314/" target="_blank" rel="noopener noreferrer" className={styles.opcionContacto}>
              <FaLinkedin size={22} className={styles.iconoContacto} style={{ color: '#0A66C2' }} />
              <div className={styles.textoContacto}>
                <span className={styles.labelContacto}>LinkedIn</span>
                <span className={styles.valorContacto}>Sebastian Sanchez</span>
              </div>
            </a>

            <a href="https://github.com/Sebastian21sa" target="_blank" rel="noopener noreferrer" className={styles.opcionContacto}>
              <FaGithub size={22} className={styles.iconoContacto} style={{ color: 'var(--ink)' }} />
              <div className={styles.textoContacto}>
                <span className={styles.labelContacto}>GitHub</span>
                <span className={styles.valorContacto}>Sebastian21sa</span>
              </div>
            </a>

            <a href="https://www.instagram.com/sebastian.sanchez2105" target="_blank" rel="noopener noreferrer" className={styles.opcionContacto}>
              <FaInstagram size={22} className={styles.iconoContacto} style={{ color: '#E1306C' }} />
              <div className={styles.textoContacto}>
                <span className={styles.labelContacto}>Instagram</span>
                <span className={styles.valorContacto}>sebastian.sanchez2105</span>
              </div>
            </a>
          </div>
        </FadeIn>
      </div>
      <Footer />
    </div>
  )
}
