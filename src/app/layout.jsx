import './globals.css'
import { Inter } from 'next/font/google'
import Cabecalho from '@/components/Cabecalho/Cabecalho'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MEU LAYOUT',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Cabecalho/>
        {children}

      </body>
    </html>
  )
}