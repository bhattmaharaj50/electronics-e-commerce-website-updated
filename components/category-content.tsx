"use client"

import { useState, useMemo } from "react"
import { SlidersHorizontal, Star, X } from "lucide-react"
import type { Product, Category } from "@/lib/types"
import { filterProducts, formatPrice } from "@/lib/data"
import { ProductCard } from "./product-card"

interface CategoryContentProps {
  category: Category
  products: Product[]
}

export function CategoryContent({ category, products }: CategoryContentProps) {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [minRating, setMinRating] = useState(0)
  const [sortBy, setSortBy] = useState("featured")
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = filterProducts(products, {
      brands: selectedBrands.length > 0 ? selectedBrands : undefined,
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      minRating: minRating || undefined,
    })

    switch (sortBy) {
      case "price-low":
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return result
  }, [products, selectedBrands, minPrice, maxPrice, minRating, sortBy])

  function toggleBrand(brand: string) {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    )
  }

  function clearFilters() {
    setSelectedBrands([])
    setMinPrice("")
    setMaxPrice("")
    setMinRating(0)
  }

  const activeFilterCount = selectedBrands.length + (minPrice ? 1 : 0) + (maxPrice ? 1 : 0) + (minRating ? 1 : 0)

  const filtersContent = (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">Brands</h3>
        <div className="flex flex-col gap-1.5">
          {category.brands.map((brand) => (
            <label key={brand} className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleBrand(brand)}
                className="h-4 w-4 rounded border-border bg-secondary accent-foreground"
              />
              <span className="text-sm text-muted-foreground">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">Price Range (KES)</h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min"
            className="w-full rounded-md border border-input bg-secondary px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground"
          />
          <span className="text-muted-foreground">-</span>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max"
            className="w-full rounded-md border border-input bg-secondary px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">Minimum Rating</h3>
        <div className="flex flex-col gap-1.5">
          {[4, 3, 2, 1].map((r) => (
            <button
              key={r}
              onClick={() => setMinRating(minRating === r ? 0 : r)}
              className={`flex items-center gap-1 rounded-md px-2 py-1.5 text-left text-sm transition-colors ${
                minRating === r ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-3.5 w-3.5 ${i < r ? "fill-foreground text-foreground" : "fill-secondary text-secondary"}`}
                />
              ))}
              <span className="ml-1">& up</span>
            </button>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <button
          onClick={clearFilters}
          className="rounded-md border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">{category.name}</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found
          {products.length > 0 && ` - Prices from ${formatPrice(Math.min(...products.map((p) => p.price)))}`}
        </p>
      </div>

      <div className="mb-4 flex items-center justify-between gap-4">
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary lg:hidden"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
          {activeFilterCount > 0 && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
              {activeFilterCount}
            </span>
          )}
        </button>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="ml-auto rounded-lg border border-input bg-secondary px-3 py-2 text-sm text-foreground"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      {filtersOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setFiltersOpen(false)} />
          <div className="relative ml-auto flex h-full w-80 flex-col overflow-y-auto bg-background p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-foreground">Filters</h2>
              <button onClick={() => setFiltersOpen(false)} className="text-muted-foreground" aria-label="Close filters">
                <X className="h-5 w-5" />
              </button>
            </div>
            {filtersContent}
          </div>
        </div>
      )}

      <div className="flex gap-8">
        <aside className="hidden w-56 shrink-0 lg:block">
          {filtersContent}
        </aside>

        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card py-16">
              <p className="text-lg font-semibold text-foreground">No products found</p>
              <p className="mt-1 text-sm text-muted-foreground">Try adjusting your filters</p>
              <button
                onClick={clearFilters}
                className="mt-4 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
