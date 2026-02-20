import type { Metadata } from "next"
import { searchProducts } from "@/lib/data"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProductCard } from "@/components/product-card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Search - 25FlowElectronics",
}

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams
  const query = q || ""
  const results = query ? searchProducts(query) : []

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <h1 className="mb-1 text-2xl font-bold text-foreground">
            {query ? `Search results for "${query}"` : "Search Products"}
          </h1>
          <p className="mb-6 text-sm text-muted-foreground">
            {results.length} product{results.length !== 1 ? "s" : ""} found
          </p>

          {results.length === 0 && query ? (
            <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card py-16">
              <p className="text-lg font-semibold text-foreground">No products found</p>
              <p className="mt-1 text-sm text-muted-foreground">Try a different search term</p>
              <Link
                href="/categories"
                className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                Browse Categories
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {results.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
