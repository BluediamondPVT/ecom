'use client'

import Link from 'next/link'
import { useCart } from '@/hooks/useCart'

interface CartSummaryProps {
  showCheckoutButton?: boolean
}

export default function CartSummary({ showCheckoutButton = true }: CartSummaryProps) {
  const { items, getTotal } = useCart()

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
      
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>${getTotal()}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping:</span>
          <span>$10.00</span>
        </div>
        <div className="flex justify-between">
          <span>Tax:</span>
          <span>${(getTotal() * 0.1).toFixed(2)}</span>
        </div>
        <div className="border-t pt-2 flex justify-between font-bold">
          <span>Total:</span>
          <span>${(getTotal() + 10 + (getTotal() * 0.1)).toFixed(2)}</span>
        </div>
      </div>
      
      {showCheckoutButton && (
        <Link 
          href="/checkout"
          className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700"
        >
          Proceed to Checkout
        </Link>
      )}
    </div>
  )
}
