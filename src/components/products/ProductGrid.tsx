'use client'

import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

interface ProductGridProps {
  featured?: boolean
}

export default function ProductGrid({ featured }: ProductGridProps) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const url = featured ? '/api/products?featured=true' : '/api/products'
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [featured])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
