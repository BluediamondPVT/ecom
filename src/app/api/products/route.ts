import { NextRequest, NextResponse } from 'next/server'

// Mock products data
const products = [
  { id: '1', name: 'Product 1', price: 99.99, image: '/images/product1.jpg', category: 'electronics' },
  { id: '2', name: 'Product 2', price: 149.99, image: '/images/product2.jpg', category: 'clothing' },
  { id: '3', name: 'Product 3', price: 79.99, image: '/images/product3.jpg', category: 'electronics' },
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const featured = searchParams.get('featured')

  let filteredProducts = products

  if (category) {
    filteredProducts = products.filter(p => p.category === category)
  }

  if (featured) {
    filteredProducts = products.slice(0, 3)
  }

  return NextResponse.json(filteredProducts)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const newProduct = { id: Date.now().toString(), ...body }
    products.push(newProduct)
    
    return NextResponse.json(newProduct, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: 'Failed to create product' }, { status: 500 })
  }
}
