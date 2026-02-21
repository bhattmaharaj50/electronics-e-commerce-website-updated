import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { categories, WHATSAPP_NUMBER } from "@/lib/data"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <ShoppingBag className="h-6 w-6 text-foreground" />
              <span className="text-lg font-bold text-foreground">
                25Flow<span className="text-muted-foreground">Electronics</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Your trusted electronics store in Kenya. Best prices, genuine products, and fast delivery across the country.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Call: <a href={`tel:+${WHATSAPP_NUMBER}`} className="text-foreground hover:underline">+254 793 823 013</a>
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">Pages</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Home</Link>
              <Link href="/categories" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Products</Link>
              <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">About Us</Link>
              <Link href="/faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">FAQ</Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">Categories</h3>
            <nav className="flex flex-col gap-2">
              {categories.slice(0, 6).map((cat) => (
                <Link key={cat.slug} href={`/category/${cat.slug}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {cat.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">Support</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Delivery & Warranty FAQ</Link>
              <Link href="/categories" className="text-sm text-muted-foreground transition-colors hover:text-foreground">All Categories</Link>
            </nav>
            <div className="mt-4">
              <h4 className="mb-1 text-sm font-medium text-foreground">Pay via M-Pesa</h4>
              <p className="text-xs text-muted-foreground">Safe and secure mobile payments accepted.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 25FlowElectronics. All rights reserved. Prices in Kenyan Shillings (KES).
          </p>
        </div>
      </div>
    </footer>
  )
}
