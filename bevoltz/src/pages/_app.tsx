import { Figtree } from '@next/font/google'
import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@styles/global'
import defaultTheme from '@styles/theme'

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <main className={figtree.className}>
        <Component {...pageProps} />
      </main>
      <GlobalStyles />
    </ThemeProvider>
  )
}
