'use client'

import Link from 'next/link'
import { useCart } from '@/hooks/useCart'
import { AnimatedCard } from '@/components/animations/AnimatedCard'

interface ProductCardProps {
  product: {
    id: string
    name: string
    price: number
    image: string
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  return (
    <AnimatedCard>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Link href={`/products/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-48 object-cover"
          />
        </Link>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4">${product.price}</p>
          
          <button
            onClick={() => addItem(product)}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </AnimatedCard>
  )
}
