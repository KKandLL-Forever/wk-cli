import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@unocss/reset/tailwind.css'
import 'uno.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
