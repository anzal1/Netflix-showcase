import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'
import { RecoilRoot } from 'recoil'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      {/* Higher Order Component */}
      <AuthProvider>
        <Toaster position="top-right" reverseOrder={true} />
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  )
}

export default MyApp
