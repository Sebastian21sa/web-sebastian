import Nav from '../../components/Nav'
import FadeIn from '../../components/FadeIn'
import { habilidades } from '../../data/habilidades'
import { fraunces, inter } from '../../lib/fonts'
import styles from './page.module.css'
import Footer from '../../components/Footer'



export const metadata = {
  title: 'Sobre mi - Sebastian Sanchez',
  description: 'Ingeniero de Sistemas y Computacion especializado en IA. Conoce mi historia, habilidades y trayectoria.',
}

const timeline = [
  { anio: 'Ninez y adolescencia', titulo: 'Jugador de tenis de mesa', desc: 'Entrene y competi activamente, desarrollando el criterio tecnico que mas tarde aplicaria en codigo.' },
  { anio: '2020', titulo: 'Bachillerato', desc: 'Institucion Educativa Departamental Serrezuela.' },
  { anio: '2026', titulo: 'Ingenieria de Sistemas y Computacion', desc: 'Universidad de Cundinamarca.' },
  { anio: '2026', titulo: 'Especializacion en Inteligencia Artificial', desc: 'Universidad de Cundinamarca.' },
  { anio: '2026', titulo: 'Analizador de Tecnica - Tenis de Mesa', desc: 'Proyecto insignia: vision por computador y deep learning aplicado a mi propio deporte.' },
  { anio: '2026', titulo: 'Simulador de Compostaje', desc: 'Evolucion de un proyecto academico a un sistema con modelos reales de ML y vision por computador.' },
]

export default function SobreMi() {
  return (
    <div className={inter.className}>
      <Nav />
      <div className={styles.contenedor}>
        <FadeIn>
          <h1 className={`${styles.titulo} ${fraunces.className}`}>Sobre mi</h1>
          <p className={styles.parrafo}>
            Soy Sebastian, Ingeniero de Sistemas y Computacion con
            especializacion en Inteligencia Artificial. Jugue tenis de mesa
            competitivamente durante buena parte de mi vida, desde niño hasta
            la adolescencia, y ese fue el punto de partida real de mi interes por la tecnologia y la programacion: como jugador, siempre
            busque mejorar mi juego, y eso me llevo a explorar como la tecnologia
            podia ayudarme a hacerlo. De ahi nacio poniq: un proyecto que conceptualizaba
            aplicar vision por computador y deep learning
            a algo que ya conocia de primera mano.
          </p>
          <p className={styles.parrafo}>
            Me interesa construir sistemas completos, no solo modelos
            entrenados en un notebook: desde la recoleccion y etiquetado de
            datos, pasando por el entrenamiento, hasta la API, el frontend, y
            el despliegue en produccion con practicas reales de ingenieria
            (testing automatizado, CI/CD, contenedores con Docker).
          </p>
          <p className={styles.parrafo}>
            Este portafolio (junto con
            cada proyecto documentado en el) es el registro real de como
            construyo: con criterio propio, honestidad sobre las
            limitaciones, y ganas genuinas de seguir aprendiendo.
          </p>
          <a href="/CV-Sebastian-Sanchez.pdf" download className={`${styles.botonCV} efectoVidrio`}>
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
            Un poco mas de mi
          </h2>
          <div className={styles.galeria}>
            <img
              src="/galeria-1.jpg"
              alt="Sebastian jugando tenis de mesa"
              className={styles.fotoGaleria}
            />
            <img
              src="/galeria-2.jpg"
              alt="Sebastian trabajando"
              className={styles.fotoGaleria}
            />
            <img
              src="/galeria-3.jpg"
              alt="Sebastian"
              className={styles.fotoGaleria}
            />
          </div>
        </FadeIn>
      </div>
      <Footer />
    </div>
  )
}
