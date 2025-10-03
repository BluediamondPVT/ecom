import ProductGrid from '@/components/products/ProductGrid'
import ProductFilter from '@/components/products/ProductFilter'

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      
      <div className="flex gap-8">
        <aside className="w-64">
          <ProductFilter />
        </aside>
        
        <main className="flex-1">
          <ProductGrid />
        </main>
      </div>
    </div>
  )
}
