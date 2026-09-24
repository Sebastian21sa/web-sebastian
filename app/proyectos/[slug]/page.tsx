import Link from 'next/link'
import { notFound } from 'next/navigation'
import { proyectos } from '../../../data/proyectos'
import { iconosStack, coloresStack } from '../../../lib/icons'
import Nav from '../../../components/Nav'
import { fraunces, inter } from '../../../lib/fonts'
import styles from './page.module.css'
import Footer from '../../../components/Footer'
import AnimatedNumber from '../../../components/AnimatedNumber'

export function generateStaticParams() {
  return proyectos.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const proyecto = proyectos.find((p) => p.slug === slug)

  return {
    title: proyecto ? `${proyecto.titulo} - Sebastian Sanchez` : 'Proyecto no encontrado',
    description: proyecto?.resumen,
  }
}

export default async function ProyectoDetalle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const proyecto = proyectos.find((p) => p.slug === slug)

  if (!proyecto) {
    notFound()
  }

  return (
    <div className={inter.className}>
      <Nav />
      <div className={styles.contenedor}>
        <Link href="/#proyectos" className={styles.volver}>← Volver a proyectos</Link>

        <p className={styles.numero}>{proyecto.numero}</p>
        <h1 className={`${styles.titulo} ${fraunces.className}`}>{proyecto.titulo}</h1>

        <div className={styles.stackContenedor}>
          {proyecto.stack.map((t) => {
            const Icono = iconosStack[t]
            const color = coloresStack[t]
            return (
              <span key={t} className={styles.stackTag}>
                {Icono && <Icono size={14} color={color} />}
                {t}
              </span>
            )
          })}
        </div>

        <div className={styles.estadisticas}>
          {proyecto.estadisticas.map((stat) => (
            <div key={stat.label} className={styles.estadisticaItem}>
              <p className={`${styles.estadisticaNumero} ${fraunces.className}`}>
                <AnimatedNumber hasta={stat.valor} sufijo={stat.sufijo} />
              </p>
              <p className={styles.estadisticaLabel}>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className={styles.seccion}>
          <h2 className={`${styles.seccionTitulo} ${fraunces.className}`}>El problema</h2>
          <p className={styles.parrafo}>{proyecto.elProblema}</p>
        </div>

        <div className={styles.seccion}>
          <h2 className={`${styles.seccionTitulo} ${fraunces.className}`}>Como funciona</h2>
          <p className={styles.parrafo}>{proyecto.comoFunciona}</p>
          {proyecto.imagenes && (
            <div className={styles.galeria}>
              {proyecto.imagenes.map((img) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className={styles.fotoGaleria}
                />
              ))}
            </div>
          )}
        </div>

        <div className={styles.seccion}>
          <h2 className={`${styles.seccionTitulo} ${fraunces.className}`}>Resultados</h2>
          <table className={styles.tabla}>
            <thead>
              <tr><th>Metrica</th><th>Valor</th></tr>
            </thead>
            <tbody>
              {proyecto.resultados.map((r) => (
                <tr key={r.label}><td>{r.label}</td><td>{r.valor}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.seccion}>
          <h2 className={`${styles.seccionTitulo} ${fraunces.className}`}>Limitaciones conocidas</h2>
          <ul className={styles.listaLimitaciones}>
            {proyecto.limitaciones.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>

        <div className={styles.enlaces}>
          <a
            href={proyecto.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.boton} ${styles.botonPrimario} efectoVidrio`}
          >
            Ver demo en vivo
          </a>
          <a
            href={proyecto.repo}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.boton} ${styles.botonSecundario} efectoVidrio`}
          >
            Ver repositorio
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
