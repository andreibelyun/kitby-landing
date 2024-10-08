import { Inter } from 'next/font/google'
import './globals.scss'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { ModalContextProvider } from '@/context/ModalContext'

const inter = Inter({ subsets: ['cyrillic'], display: 'swap', variable: '--font-inter' })

export const metadata = {
  title: 'KITBY - Ваш надежный партнёр в поставках из Китая',
  description:
    'Найдем, купим, доставим, растаможим, сертифицируем в Беларусь, Россию и страны Европы любые товары из Китая'
}

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <head>
        <link rel='icon' type='image/png' href='/favicon-48x48.png' sizes='48x48' />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <meta name='apple-mobile-web-app-title' content='KITBY' />
        <link rel='manifest' href='/site.webmanifest' />
      </head>
      <body className={`${inter.className} ${inter.variable}`}>
        <ModalContextProvider>
          <div className='page'>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ModalContextProvider>
      </body>
    </html>
  )
}
