'use client'

import React, { useState, useEffect } from 'react'

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div 
      className={`relative w-full overflow-hidden h-12 select-none transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ backgroundColor: '#36201A' }}
    >
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center h-12 shrink-0">
          <span 
            className="text-[1.375rem] tracking-widest uppercase font-light px-8"
            style={{ color: '#E7D5C3' }}
          >
            🎉 Updates | Satya USA Online Store Temporarily Closed | Check back Spring 2025 for updates | 
          </span>
          <span 
            className="text-[1.375rem] tracking-widest uppercase font-light px-8"
            style={{ color: '#E7D5C3' }}
          >
            ✨ New Collection Coming Soon | Exclusive Deals Available | Shop Premium Products | 
          </span>
          <span 
            className="text-[1.375rem] tracking-widest uppercase font-light px-8"
            style={{ color: '#E7D5C3' }}
          >
            🚀 Free Shipping on Orders Over $50 | 30-Day Money Back Guarantee | 
          </span>
        </div>
        
        <div className="flex items-center h-12 shrink-0">
          <span 
            className="text-[1.375rem] tracking-widest uppercase font-light px-8"
            style={{ color: '#E7D5C3' }}
          >
            🎉 Updates | Satya USA Online Store Temporarily Closed | Check back Spring 2025 for updates | 
          </span>
          <span 
            className="text-[1.375rem] tracking-widest uppercase font-light px-8"
            style={{ color: '#E7D5C3' }}
          >
            ✨ New Collection Coming Soon | Exclusive Deals Available | Shop Premium Products | 
          </span>
          <span 
            className="text-[1.375rem] tracking-widest uppercase font-light px-8"
            style={{ color: '#E7D5C3' }}
          >
            🚀 Free Shipping on Orders Over $50 | 30-Day Money Back Guarantee | 
          </span>
        </div>
      </div>
    </div>
  )
}
