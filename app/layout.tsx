import './styles/globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Le Zhang',
  description: 'Le Zhang\'s personal website',
}

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes='any'/>
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
