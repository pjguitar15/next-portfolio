import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/Footer'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
// Context
import { GlobalContextProvider } from '@/context/ModalContext'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Phil Codes | Portfolio Website',
  description:
    'I make innovative web experiences meticulously brought to life. Elevate your online presence with cutting-edge frontend solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <GlobalContextProvider>
          <Navbar />
          {children}
          <Footer />
        </GlobalContextProvider>
      </body>
    </html>
  )
}
