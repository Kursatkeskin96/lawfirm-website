import { Analytics } from '@vercel/analytics/react';
import '@/styles/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {i18n} from '@/i18n.config'; // Ensure correct import

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Özdemir Hukuk Bürosu',
  description: 'Özdemir Hukuk ofisi, uzmanlık alanları arasında sigorta ve reasürans hukuku başta olmak üzere geniş bir yelpazede hizmet sunmaktadır. Müvekkillerimize ulusal ve uluslararası düzeyde danışmanlık, takip ve vekillik hizmetleri sağlamaktayız. Türk ve yabancı mevzuat, yargı kararları ve sektörel gelişmeler titizlikle takip edilmektedir.'
};

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang} className="font-body ">
      <body suppressHydrationWarning={true}>
        <main>
          <Navbar lang={params.lang} />
          {children}
          <Analytics />
          <Footer lang={params.lang} />
        </main>
      </body>
    </html>
  );
}
