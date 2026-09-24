import Link from 'next/link'
import { proyectos } from '../data/proyectos'
import { fraunces, inter } from '../lib/fonts'
import styles from './page.module.css'
import { iconosStack, coloresStack } from '../lib/icons'
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'
import Nav from '../components/Nav'
import FadeIn from '../components/FadeIn'
import Footer from '../components/Footer'
import TiltCard from '../components/TiltCard'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={inter.className}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Joan Sebastian Sanchez Acuna',
            jobTitle: 'Ingeniero de Sistemas y Computacion',
            url: 'https://web-sebastian.vercel.app',
            sameAs: [
              'https://github.com/Sebastian21sa',
              'https://www.linkedin.com/in/sebasti%C3%A1n-s%C3%A1nchez-0ab0b6314/',
            ],
          }),
        }}
      />
      <Nav />
      <section id="inicio" className={`${styles.hero} ${styles.contenedor}`}>
        <Image src="/foto-sebastian.jpg" alt="Sebastian Sanchez" width={140} height={140} className={styles.foto} />
        <div className={styles.heroTexto}>
          <p className={styles.eyebrow}>
            Ingeniero de Sistemas y computación · Especializacion en IA
          </p>
          <h1 className={`${styles.titulo} ${fraunces.className}`}>
            Sebastian Sanchez
          </h1>
          <p className={styles.descripcion}>
            Construyo sistemas de Machine Learning llevados a producción:
            desde el dato hasta la API, el frontend y el despliegue.
            Ex-jugador de tenis de mesa, aplicando codigo a lo que ya conocia
            de toda la vida.
          </p>
        </div>
      </section>
      <FadeIn>
        <section
          id="proyectos"
          className={`${styles.seccionProyectos} ${styles.contenedor}`}
        >
          <h2 className={`${styles.tituloSeccion} ${fraunces.className}`}>
            Proyectos
          </h2>
          <div className={styles.listaProyectos}>
            {proyectos.map((p) => (
              <Link key={p.slug} href={`/proyectos/${p.slug}`}>
                <TiltCard className={styles.tarjeta}>
                  <p className={styles.numeroProyecto}>{p.numero}</p>
                  <h3
                    className={`${styles.tituloProyecto} ${fraunces.className}`}
                  >
                    {p.titulo}
                  </h3>
                  <p className={styles.resumenProyecto}>{p.resumen}</p>
                  <div className={styles.stackContenedor}>
                    {p.stack.map((t) => {
                      const Icono = iconosStack[t]
                      const color = coloresStack[t]
                      return (
                        <span key={t} className={styles.stackTag}>
                          {Icono && <Icono size={14} color={color} />} {t}
                        </span>
                      )
                    })}
                  </div>
                </TiltCard>
              </Link>
            ))}
          </div>
        </section>
      </FadeIn>

      <Footer />
    </div>
  )
}
