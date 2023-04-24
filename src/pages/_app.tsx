import '@/styles/globals.css'
import type { AppProps, AppType } from 'next/app'
import { trpc } from '@/utils/trpc';

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

const App: AppType = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}


export default trpc.withTRPC(App);