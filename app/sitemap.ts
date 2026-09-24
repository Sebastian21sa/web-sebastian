import { MetadataRoute } from 'next'
import { proyectos } from '../data/proyectos'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://web-sebastian.vercel.app'

  const paginasEstaticas = [
    { url: base, lastModified: new Date() },
    { url: `${base}/sobre-mi`, lastModified: new Date() },
    { url: `${base}/contacto`, lastModified: new Date() },
  ]

  const paginasProyectos = proyectos.map((p) => ({
    url: `${base}/proyectos/${p.slug}`,
    lastModified: new Date(),
  }))

  return [...paginasEstaticas, ...paginasProyectos]
}
