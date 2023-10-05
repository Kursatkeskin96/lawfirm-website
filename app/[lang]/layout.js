import { Analytics } from '@vercel/analytics/react';
import '@/styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
import { i18n } from "@/i18n.config"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Özdemir Hukuk Bürosu',
  description: 'Özdemir Hukuk Bürosu',
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}className='font-body '>
      <body suppressHydrationWarning={true}>
        <main>
        <Navbar lang={params.lang} />
          {children}
          <Analytics />
          <Footer lang={params.lang} />
        </main>
      </body>
    </html>
  )
}
