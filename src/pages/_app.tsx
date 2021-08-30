import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { AppProps } from 'next/app';

import { AuthProvider } from '../hooks/useAuth';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
