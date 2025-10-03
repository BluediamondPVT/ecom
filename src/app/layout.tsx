import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { CartProvider } from '@/contexts/CartContext'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-Commerce Store',
  description: 'Modern e-commerce built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return ( 
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            {/* Announcement Bar - Fixed at top */}
            <div className="fixed top-0 left-0 right-0 z-[60]">
              <AnnouncementBar />
            </div>
            
            {/* Header - Below announcement bar */}
            <Header />
            
            {/* Main content with padding for fixed header */}
            <main className="min-h-screen pt-[140px]">
              {children}
            </main>
            
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
