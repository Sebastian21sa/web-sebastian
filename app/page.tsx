import Link from 'next/link'
import { proyectos } from '../data/proyectos'
import { fraunces, inter } from '../lib/fonts'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={inter.className}>
      <nav className={styles.nav}>
        <div className={styles.navContenido}>
          <span>Sebastian Sanchez</span>
          <div className={styles.navLinks}>
            <span>Proyectos</span>
            <span>Sobre mi</span>
            <span>Contacto</span>
          </div>
        </div>
      </nav>

      <section className={`${styles.hero} ${styles.contenedor}`}>
        <div className={styles.heroTexto}>
          <p className={styles.eyebrow}>
            Ingeniero de Sistemas · Especializacion en IA
          </p>
          <h1 className={`${styles.titulo} ${fraunces.className}`}>
            Sebastian Sanchez
          </h1>
          <p className={styles.descripcion}>
            Construyo sistemas de Machine Learning llevados a produccion:
            desde el dato hasta la API, el frontend y el despliegue.
            Ex-jugador de tenis de mesa, aplicando codigo a lo que ya conocia
            de toda la vida.
          </p>
        </div>
      </section>

      <section className={`${styles.seccionProyectos} ${styles.contenedor}`}>
        <h2 className={`${styles.tituloSeccion} ${fraunces.className}`}>
          Proyectos
        </h2>
        <div className={styles.listaProyectos}>
          {proyectos.map((p) => (
            <Link key={p.slug} href={`/proyectos/${p.slug}`}>
              <div className={styles.tarjeta}>
                <p className={styles.numeroProyecto}>{p.numero}</p>
                <h3
                  className={`${styles.tituloProyecto} ${fraunces.className}`}
                >
                  {p.titulo}
                </h3>
                <p className={styles.resumenProyecto}>{p.resumen}</p>
                <div className={styles.stackContenedor}>
                  {p.stack.map((t) => (
                    <span key={t} className={styles.stackTag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
