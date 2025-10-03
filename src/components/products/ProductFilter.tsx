'use client'

export default function ProductFilter() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold mb-4">Filters</h3>
      
      <div className="mb-6">
        <h4 className="font-medium mb-2">Category</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Electronics
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Clothing
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Books
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-medium mb-2">Price Range</h4>
        <input type="range" min="0" max="1000" className="w-full" />
      </div>
    </div>
  )
}
