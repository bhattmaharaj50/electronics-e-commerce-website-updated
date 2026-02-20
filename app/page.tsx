import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroBanner } from "@/components/hero-banner"
import { FlashSales } from "@/components/flash-sales"
import { DealsOfDay } from "@/components/deals-of-day"
import { CategoriesGrid } from "@/components/categories-grid"
import { FeaturedProducts } from "@/components/featured-products"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroBanner />
        <CategoriesGrid />
        <FlashSales />
        <DealsOfDay />
        <FeaturedProducts />
      </main>
      <SiteFooter />
    </div>
  )
}
