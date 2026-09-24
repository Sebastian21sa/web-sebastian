import { Inter } from 'next/font/google'
import './globals.css'
import ScrollTop from '../components/ScrollTop'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export const metadata = {
  title: 'Sebastian Sanchez - Portafolio',
  description: 'Ingeniero de Sistemas y Computacion - Especializacion en IA',
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
          <div className="formaFlotante forma1">
          </div> 
          <div className="formaFlotante forma2">
          </div> 
          <div className="formaFlotante forma3">
          </div> 
        </div>
        {children} <Analytics /><ScrollTop /> </body>
    </html>
  )
}
