import { ContextFilterProvider } from '@/contexts/contextFilter'
import '@/styles/globals.css'
import type { Metadata } from 'next'

import Edo from 'next/font/local'
const edo = Edo({
  subsets: ['latin'],
  display: 'swap',
  src: '../..//public/assets/fonts/edo/edo.ttf',
  variable: '--font-edo',
})

import RobotoRegular from 'next/font/local'
const robotoRegular = RobotoRegular({
  subsets: ['latin'],
  display: 'swap',
  src: '../..//public/assets/fonts/roboto/roboto-regular.ttf',
  variable: '--font-robotoRegular'
})

export const metadata: Metadata = {
  title: {
    default: 'Barbearia Rock Bar | Jardim São Luis',
    template: 'Barbearia Rock Bar | s%',
  },
  description: 'Escolha o seu estilo, que a gente capricha!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${robotoRegular.variable} ${edo.variable} bg-black text-white selection:bg-black selection:text-orange-mrbarber-400`}>
        <ContextFilterProvider>
          {children}
        </ContextFilterProvider>
      </body>
    </html>
  )
}
