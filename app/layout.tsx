import { Inter } from 'next/font/google'
import './globals.css'
import ScrollTop from '../components/ScrollTop'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://web-sebastian.vercel.app'),
  title: 'Sebastián Sánchez',
  description: 'Ingeniero de Sistemas y Computación – Especialización en IA',
  alternates: {
    canonical: './',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    siteName: 'Sebastián Sánchez',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="fondoAnimado">
          <div className="formaFlotante forma1"></div>
          <div className="formaFlotante forma2"></div>
          <div className="formaFlotante forma3"></div>
        </div>

        {children}

        <Analytics />
        <ScrollTop />
      </body>
    </html>
  )
}