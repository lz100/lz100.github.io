import './styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { NavBar } from './components/NavBar'
import { NavigationEvents } from './components/navigation-events'
import { Suspense } from 'react'

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
      <body className={inter.className}>
        <Providers>
          <Suspense fallback={null}>
            <NavigationEvents />
          </Suspense>
          <NavBar/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
