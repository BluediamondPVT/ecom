'use client'

import Link from 'next/link'
import { useCart } from '@/hooks/useCart'
import { useAuth } from '@/hooks/useAuth'

export default function Header() {
  const { items } = useCart()
  const { user, logout } = useAuth()

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          E-Store
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
          
          <Link href="/cart" className="relative">
            🛒
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {items.length}
              </span>
            )}
          </Link>

          {user ? (
            <>
              <Link href="/account/profile" className="hover:text-blue-600">
                Profile
              </Link>
              {user.role === 'admin' && (
                <Link href="/admin/dashboard" className="hover:text-blue-600">
                  Admin
                </Link>
              )}
              <button onClick={logout} className="hover:text-blue-600">
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="hover:text-blue-600">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
