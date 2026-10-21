import Image from 'next/image'
import Nav from '../../components/Nav'
import FadeIn from '../../components/FadeIn'
import { habilidades } from '../../data/habilidades'
import { fraunces, inter } from '../../lib/fonts'
import styles from './page.module.css'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Sobre mí – Sebastián Sánchez',
  description:
    'Ingeniero de Sistemas y Computación especializado en IA. Conoce mi historia, habilidades y trayectoria.',
}

const timeline = [
  {
    anio: 'Niñez y adolescencia',
    titulo: 'Jugador de tenis de mesa',
    desc: 'Entrené y competí activamente, desarrollando el criterio técnico que más tarde aplicaría en código.',
  },
  {
    anio: '2020',
    titulo: 'Bachillerato',
    desc: 'Institución Educativa Departamental Serrezuela.',
  },
  {
    anio: '2026',
    titulo: 'Ingeniería de Sistemas y Computación',
    desc: 'Universidad de Cundinamarca.',
  },
  {
    anio: '2026',
    titulo: 'Especialización en Inteligencia Artificial',
    desc: 'Universidad de Cundinamarca.',
  },
  {
    anio: '2026',
    titulo: 'Analizador de Técnica – Tenis de Mesa',
    desc: 'Proyecto insignia: visión por computador y deep learning aplicado a mi propio deporte.',
  },
  {
    anio: '2026',
    titulo: 'Simulador de Compostaje',
    desc: 'Evolución de un proyecto académico a un sistema con modelos reales de ML y visión por computador.',
  },
]

const galeria = [
  { src: '/galeria-1.jpg', alt: 'Sebastián jugando tenis de mesa' },
  { src: '/galeria-2.png', alt: 'Sebastián trabajando' },
  { src: '/galeria-3.jpeg ', alt: 'Sebastián' },
]

export default function SobreMi() {
  return (
    <div className={inter.className}>
      <Nav />
      <div className={styles.contenedor}>
        <FadeIn>
          <h1 className={`${styles.titulo} ${fraunces.className}`}>Sobre mí</h1>
          <p className={styles.parrafo}>
            Soy Sebastián, Ingeniero de Sistemas y Computación con
            especialización en Inteligencia Artificial. Jugué tenis de mesa
            competitivamente durante buena parte de mi vida, desde niño hasta
            la adolescencia, y ese fue el punto de partida real de mi interés
            por la tecnología y la programación: como jugador, siempre busqué
            mejorar mi juego, y eso me llevó a explorar cómo la tecnología
            podía ayudarme a hacerlo. De ahí nació PongIQ, un proyecto que
            aplica visión por computador y deep learning a algo que ya conocía
            de primera mano.
          </p>
          <p className={styles.parrafo}>
            Me interesa construir sistemas completos, no solo modelos
            entrenados en un notebook: desde la recolección y etiquetado de
            datos, pasando por el entrenamiento, hasta la API, el frontend, y
            el despliegue en producción con prácticas reales de ingeniería
            (testing automatizado, CI/CD, contenedores con Docker).
          </p>
          <p className={styles.parrafo}>
            Este portafolio (junto con cada proyecto documentado en él) es el
            registro real de cómo construyo: con criterio propio, honestidad
            sobre las limitaciones, y ganas genuinas de seguir aprendiendo.
          </p>
          <a
            href="/CV-Sebastian-Sanchez.pdf"
            download
            className={`${styles.botonCV} efectoVidrio`}
          >
            Descargar CV
          </a>
        </FadeIn>

        <FadeIn>
          <h2 className={`${styles.tituloSub} ${fraunces.className}`}>
            Habilidades
          </h2>
          <div className={styles.categoriasHabilidades}>
            {habilidades.map((cat) => (
              <div key={cat.categoria} className={styles.categoriaCard}>
                <p className={styles.categoriaNombre}>{cat.categoria}</p>
                {cat.items.map((item) => (
                  <p key={item} className={styles.habilidadItem}>
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className={`${styles.tituloSub} ${fraunces.className}`}>
            Mi camino
          </h2>
          <div className={styles.timeline}>
            <div className={styles.timelineLinea}></div>
            {timeline.map((item, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <p className={styles.timelineAnio}>{item.anio}</p>
                <p className={styles.timelineTitulo}>{item.titulo}</p>
                <p className={styles.timelineDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className={`${styles.tituloSub} ${fraunces.className}`}>
            Un poco más de mí
          </h2>
          <div className={styles.galeria}>
            {galeria.map((foto) => (
              <div key={foto.src} className={styles.fotoGaleriaWrapper}>
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.fotoGaleria}
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
      <Footer />
    </div>
  )
}