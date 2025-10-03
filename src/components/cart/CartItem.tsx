'use client'

import { useCart } from '@/hooks/useCart'

export default function CartItem({ item }: any) {
  const { updateQuantity, removeItem } = useCart()

  return (
    <div className="flex items-center gap-4 border-b py-4">
      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
      
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-gray-600">${item.price}</p>
      </div>
      
      <div className="flex items-center gap-2">
        <button 
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="px-3 py-1 border rounded"
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button 
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="px-3 py-1 border rounded"
        >
          +
        </button>
      </div>
      
      <button 
        onClick={() => removeItem(item.id)}
        className="text-red-600"
      >
        Remove
      </button>
    </div>
  )
}
