import Link from "next/link"
import type { Metadata } from "next"
import {
  Tv, Smartphone, Tablet, Refrigerator, WashingMachine,
  Microwave, CookingPot, Coffee, Headphones, Speaker, Cable, ArrowRight,
} from "lucide-react"
import { categories, getProductsByCategory, formatPrice } from "@/lib/data"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "All Categories - 25FlowElectronics",
  description: "Browse all electronics categories at 25FlowElectronics. TVs, smartphones, appliances, audio, accessories and more.",
}

const iconMap: Record<string, React.ElementType> = {
  Tv, Smartphone, Tablet, Refrigerator, WashingMachine,
  Microwave, CookingPot, Coffee, Headphones, Speaker, Cable,
}

export default function CategoriesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <h1 className="mb-2 text-3xl font-bold text-foreground">All Categories</h1>
          <p className="mb-8 text-muted-foreground">Browse our complete range of electronics</p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const Icon = iconMap[cat.icon] || Tv
              const prods = getProductsByCategory(cat.slug)
              const minPrice = prods.length > 0 ? Math.min(...prods.map((p) => p.price)) : 0
              return (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="group flex items-start gap-4 rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/40 hover:bg-primary/5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary transition-colors group-hover:bg-primary/10">
                    <Icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-semibold text-card-foreground group-hover:text-primary">{cat.name}</h2>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {prods.length} products {minPrice > 0 && `from ${formatPrice(minPrice)}`}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {cat.brands.slice(0, 4).join(", ")}{cat.brands.length > 4 && " +more"}
                    </p>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </Link>
              )
            })}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
