import '../styles/globals.css'
import { Roboto_Condensed } from '@next/font/google';
import '../styles/main.css';

const robotoCondensed = Roboto_Condensed({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-robotoCondensed'
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${robotoCondensed.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
