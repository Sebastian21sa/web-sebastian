import Link from 'next/link'
import { notFound } from 'next/navigation'
import { proyectos } from '../../../data/proyectos'
import { fraunces, inter } from '../../../lib/fonts'
import styles from './page.module.css'
import { iconosStack } from '../../../lib/icons'

export function generateStaticParams() {
  return proyectos.map((p) => ({ slug: p.slug }))
}

export default async function ProyectoDetalle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const proyecto = proyectos.find((p) => p.slug === slug)

  if (!proyecto) {
    notFound()
  }

  return (
    <div className={`${styles.contenedor} ${inter.className}`}>
      <Link href="/" className={styles.volver}>← Volver a proyectos</Link>

      <p className={styles.numero}>{proyecto.numero}</p>
      <h1 className={`${styles.titulo} ${fraunces.className}`}>{proyecto.titulo}</h1>

      <div className={styles.stackContenedor}>
        {proyecto.stack.map((t) => { const Icono = iconosStack[t] 
          return ( 
          <span key={t} className={styles.stackTag}> {Icono && <Icono size={14} />} {t} 
          </span> ) })}
      </div>

      <div className={styles.seccion}>
        <h2 className={`${styles.seccionTitulo} ${fraunces.className}`}>El problema</h2>
        <p className={styles.parrafo}>
          Jugue tenis de mesa competitivamente durante buena parte de mi vida. Al cursar una especializacion en Inteligencia Artificial, quise construir algo que combinara ambas cosas: aplicar vision por computador y deep learning a un problema donde mi criterio como jugador realmente importa.
        </p>
      </div>

      <div className={styles.seccion}>
        <h2 className={`${styles.seccionTitulo} ${fraunces.className}`}>Como funciona</h2>
        <p className={styles.parrafo}>
          El usuario sube un video (o graba en vivo) ejecutando un drive o un reves. El sistema extrae los puntos clave del cuerpo con MediaPipe Pose, calcula angulos articulares (codo, cadera, altura de muneca) definidos a partir de criterios tecnicos reales de tenis de mesa, y un modelo de red neuronal (TensorFlow), entrenado con un dataset propio de 71 repeticiones grabadas y etiquetadas manualmente, predice si la ejecucion fue correcta o incorrecta.
        </p>
      </div>

      <div className={styles.seccion}>
        <h2 className={`${styles.seccionTitulo} ${fraunces.className}`}>Resultados</h2>
        <p className={styles.parrafo}>
          Validado con 5-fold cross-validation (no una sola particion, para evitar resultados optimistas por azar):
        </p>
        <table className={styles.tabla}>
          <thead>
            <tr><th>Golpe</th><th>Accuracy promedio</th></tr>
          </thead>
          <tbody>
            <tr><td>Drive</td><td>74% ± 13%</td></tr>
            <tr><td>Reves</td><td>76% ± 15%</td></tr>
          </tbody>
        </table>
      </div>

      <div className={styles.seccion}>
        <h2 className={`${styles.seccionTitulo} ${fraunces.className}`}>Limitaciones conocidas</h2>
        <ul className={styles.listaLimitaciones}>
          <li>Dataset pequeno (71 repeticiones): valida el enfoque, no es suficiente para produccion real.</li>
          <li>Sensibilidad fuera de distribucion: el modelo asume que el usuario selecciona correctamente el golpe.</li>
          <li>Sensibilidad al angulo de camara: el dataset se grabo desde un unico angulo lateral.</li>
        </ul>
      </div>

      <div className={styles.enlaces}>
        <a href={proyecto.demo} target="_blank" rel="noopener noreferrer" className={`${styles.boton} ${styles.botonPrimario}`}>
          Ver demo en vivo
        </a>
        <a href={proyecto.repo} target="_blank" rel="noopener noreferrer" className={`${styles.boton} ${styles.botonSecundario}`}>
          Ver repositorio
        </a>
      </div>
    </div>
  )
}