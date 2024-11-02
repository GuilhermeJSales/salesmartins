import type { Metadata } from 'next'
import './globals.css'
import { typeFirst, typeSecond } from './functions/fonts'

export const metadata: Metadata = {
  title: 'Sales Martins Advogados',
  description: 'Criado por @guijsales',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${typeSecond.variable} ${typeFirst.variable}`}>
        {children}
      </body>
    </html>
  )
}
