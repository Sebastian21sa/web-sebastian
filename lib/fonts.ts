import { Fraunces, Inter } from 'next/font/google'

export const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['normal', 'italic'],
})

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
})
