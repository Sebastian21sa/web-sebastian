import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { fraunces, inter } from '../lib/fonts'

export default function NotFound() {
  return (
    <div className={inter.className}>
      <Nav />
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '100px 24px', textAlign: 'center' }}>
        <h1 className={fraunces.className} style={{ fontSize: 64, fontStyle: 'italic', marginBottom: 16 }}>404</h1>
        <p style={{ color: 'var(--ink-muted)', fontSize: 18, marginBottom: 30 }}>
          Ups, al parecer esta pagina no existe o se movio a otro lado 😳.
        </p>
        <Link href="/" style={{ display: 'inline-block', padding: '12px 26px', borderRadius: 30, background: 'var(--accent)', color: 'var(--bg)', fontSize: 14 }}>
          Volver al inicio
        </Link>
      </div>
      <Footer />
    </div>
  )
}
