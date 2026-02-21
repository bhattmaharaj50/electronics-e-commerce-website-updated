"use client"

import { Zap } from "lucide-react"
import { getFlashSaleProducts } from "@/lib/data"
import { ProductCard } from "./product-card"
import { CountdownTimer } from "./countdown-timer"

export function FlashSales() {
  const flashProducts = getFlashSaleProducts()
  if (flashProducts.length === 0) return null

  const nextEnding = flashProducts
    .filter((p) => p.flashSaleEnds)
    .sort((a, b) => new Date(a.flashSaleEnds!).getTime() - new Date(b.flashSaleEnds!).getTime())[0]

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-3 py-1.5">
            <Zap className="h-5 w-5 text-foreground" />
            <h2 className="text-xl font-bold text-foreground">Flash Sales</h2>
          </div>
          {nextEnding?.flashSaleEnds && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Ends in:</span>
              <CountdownTimer targetDate={nextEnding.flashSaleEnds} />
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-foreground" />
          <span className="text-xs font-medium text-foreground">Limited Stock</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {flashProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
