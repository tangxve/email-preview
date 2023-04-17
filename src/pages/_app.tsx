import '@/src/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  console.log('pageProps', Component)
  return <Component {...pageProps} />
}
