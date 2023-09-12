import './globals.css'
// import { Inter } from 'next/font/google'
import Header from '@/components/Header'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'iGoCar',
  description: 'rental car',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}

      </body>
    </html>
  )
}
