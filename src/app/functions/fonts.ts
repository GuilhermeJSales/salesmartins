import { Noto_Serif, Roboto } from 'next/font/google'

export const typeFirst = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--roboto',
  display: 'swap',
})

export const typeSecond = Noto_Serif({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--noto-serif',
  display: 'swap',
})
