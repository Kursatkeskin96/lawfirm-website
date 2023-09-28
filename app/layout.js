import '../syles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Özdemir Hukuk Bürosu',
  description: 'Özdemir Hukuk Bürosu',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <main>
        <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
