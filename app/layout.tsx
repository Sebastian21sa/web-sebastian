import { Inter } from 'next/font/google'
import './globals.css'
import ScrollTop from '../components/ScrollTop'

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
      <body className={inter.className}>{children} <ScrollTop /> </body>
    </html>
  )
}
