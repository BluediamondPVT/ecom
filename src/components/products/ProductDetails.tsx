'use client'

import { useCart } from '@/hooks/useCart'

export default function ProductDetails({ product }: any) {
  const { addItem } = useCart()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full rounded-lg"
        />
      </div>
      
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-2xl text-blue-600 mb-4">${product.price}</p>
        <p className="text-gray-700 mb-6">{product.description}</p>
        
        <button
          onClick={() => addItem(product)}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
