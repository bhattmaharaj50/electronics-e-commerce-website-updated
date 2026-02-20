import Link from "next/link"
import {
  Tv,
  Smartphone,
  Tablet,
  Refrigerator,
  WashingMachine,
  Microwave,
  CookingPot,
  Coffee,
  Headphones,
  Speaker,
  Cable,
} from "lucide-react"
import { categories } from "@/lib/data"

const iconMap: Record<string, React.ElementType> = {
  Tv,
  Smartphone,
  Tablet,
  Refrigerator,
  WashingMachine,
  Microwave,
  CookingPot,
  Coffee,
  Headphones,
  Speaker,
  Cable,
}

export function CategoriesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <h2 className="mb-6 text-xl font-bold text-foreground">Shop by Category</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon] || Tv
          return (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/40 hover:bg-primary/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary transition-colors group-hover:bg-primary/10">
                <Icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <span className="text-center text-xs font-medium text-card-foreground">{cat.name}</span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
