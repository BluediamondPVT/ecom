'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCart } from '@/hooks/useCart'
import { useAuth } from '@/hooks/useAuth'

export default function Header() {
  const { items } = useCart()
  const { user, logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [headerTop, setHeaderTop] = useState('48px')

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // When scrolled past 50px, move header to top (announcement bar is hidden)
      if (currentScrollY > 50) {
        setScrolled(true)
        setHeaderTop('0px')
      } else {
        setScrolled(false)
        setHeaderTop('48px')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }

  return (
    <header 
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3' 
          : 'bg-white py-5'
      }`}
      style={{ top: headerTop }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between gap-6 lg:gap-12">
          
          {/* Logo - Left Side */}
          <Link 
            href="/" 
            className="text-3xl font-light tracking-wider text-black hover:opacity-70 transition-opacity duration-300 whitespace-nowrap"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            E-STORE
          </Link>

          {/* Search Bar - Center */}
          <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-xl">
            <div className="relative w-full group">
              <input
                type="text"
                placeholder="Search for luxury products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-black focus:bg-white transition-all duration-300 outline-none text-sm tracking-wide placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>

          {/* Right Side Actions */}
          <div className="flex items-center gap-8">
            
            {/* Wishlist Icon */}
            <Link 
              href="/wishlist" 
              className="hidden lg:flex flex-col items-center gap-1 hover:opacity-60 transition-opacity duration-300 group"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-xs tracking-wider uppercase">Wishlist</span>
            </Link>

            {/* Cart Icon */}
            <Link 
              href="/cart" 
              className="hidden lg:flex flex-col items-center gap-1 hover:opacity-60 transition-opacity duration-300 relative group"
            >
              <div className="relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-light">
                    {items.length}
                  </span>
                )}
              </div>
              <span className="text-xs tracking-wider uppercase">Cart</span>
            </Link>

            {/* Account Icon */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col items-center gap-1 hover:opacity-60 transition-opacity duration-300 group"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-xs tracking-wider uppercase">Account</span>
            </button>

          </div>
        </div>

        {/* Mobile Search Bar */}
        <form onSubmit={handleSearch} className="lg:hidden mt-4">
          <div className="relative group">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-gray-50 border-b-2 border-gray-200 focus:border-black transition-all duration-300 outline-none text-sm"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </form>
      </div>

      {/* Elegant Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 mt-1 w-72 bg-white shadow-2xl border-t border-gray-100 animate-fadeIn">
          <div className="py-2">
            
            {/* Navigation Section */}
            <div className="px-6 py-3 border-b border-gray-100">
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-3 font-light">Navigation</p>
              <Link
                href="/products"
                className="block py-2 text-sm tracking-wide hover:translate-x-2 transition-transform duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/collections"
                className="block py-2 text-sm tracking-wide hover:translate-x-2 transition-transform duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Collections
              </Link>
              <Link
                href="/about"
                className="block py-2 text-sm tracking-wide hover:translate-x-2 transition-transform duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block py-2 text-sm tracking-wide hover:translate-x-2 transition-transform duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>

            {/* Account Section */}
            <div className="px-6 py-3">
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-3 font-light">Account</p>
              
              {user ? (
                <>
                  <Link
                    href="/account/profile"
                    className="flex items-center gap-3 py-2 text-sm tracking-wide hover:translate-x-2 transition-transform duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>My Profile</span>
                  </Link>
                  
                  <Link
                    href="/account/orders"
                    className="flex items-center gap-3 py-2 text-sm tracking-wide hover:translate-x-2 transition-transform duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span>Orders</span>
                  </Link>

                  {/* Mobile Wishlist/Cart */}
                  <div className="lg:hidden">
                    <Link
                      href="/wishlist"
                      className="flex items-center gap-3 py-2 text-sm tracking-wide hover:translate-x-2 transition-transform duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span>Wishlist</span>
                    </Link>
                    
                    <Link
                      href="/cart"
                      className="flex items-center justify-between py-2 text-sm tracking-wide hover:translate-x-2 transition-transform duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <span>Shopping Cart</span>
                      </div>
                      {items.length > 0 && (
                        <span className="bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                          {items.length}
                        </span>
                      )}
                    </Link>
                  </div>
                  
                  {user.role === 'admin' && (
                    <Link
                      href="/admin/dashboard"
                      className="flex items-center gap-3 py-2 text-sm tracking-wide hover:translate-x-2 transition-transform duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Admin Panel</span>
                    </Link>
                  )}
                  
                  <button
                    onClick={() => {
                      logout()
                      setIsMenuOpen(false)
                    }}
                    className="flex items-center gap-3 py-2 text-sm tracking-wide hover:translate-x-2 transition-transform duration-300 mt-3 pt-3 border-t border-gray-100 w-full text-left"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="flex items-center gap-3 py-2 text-sm tracking-wide hover:translate-x-2 transition-transform duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    <span>Sign In</span>
                  </Link>
                  <Link
                    href="/signup"
                    className="flex items-center gap-3 py-2 text-sm tracking-wide hover:translate-x-2 transition-transform duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    <span>Create Account</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Backdrop Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  )
}
