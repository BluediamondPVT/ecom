import Link from 'next/link'
import { FadeIn } from '@/components/animations/FadeIn'
import ProductGrid from '@/components/products/ProductGrid'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <FadeIn>
        <section className="py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Our Store
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover amazing products at great prices
          </p>
          <Link 
            href="/products"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Shop Now
          </Link>
        </section>
      </FadeIn>

      <section className="py-10">
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
        <ProductGrid featured={true} />
      </section>
    </div>
  )
}
