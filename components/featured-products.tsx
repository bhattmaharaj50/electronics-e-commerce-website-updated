import { Sparkles } from "lucide-react"
import { getFeaturedProducts } from "@/lib/data"
import { ProductCard } from "./product-card"

export function FeaturedProducts() {
  const featured = getFeaturedProducts()
  if (featured.length === 0) return null

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-3 py-1.5">
          <Sparkles className="h-5 w-5 text-foreground" />
          <h2 className="text-xl font-bold text-foreground">Featured Products</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
