import Link from "next/link"
import { ArrowRight, Truck, Shield, CreditCard } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                New Arrivals
              </span>
              <span className="rounded-full bg-sale/10 px-3 py-1 text-xs font-semibold text-sale">
                Up to 40% Off
              </span>
            </div>
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-6xl">
              Premium Electronics,{" "}
              <span className="text-primary">Best Prices</span> in Kenya
            </h1>
            <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              Shop the latest TVs, smartphones, appliances & accessories. Genuine products with warranty. Pay via M-Pesa & get fast delivery across Kenya.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/categories"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Shop Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/254XXXXXXXXX?text=Hello%2025FlowElectronics!%20I%20need%20help%20shopping."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-6 py-3 text-sm font-bold text-whatsapp-foreground transition-colors hover:bg-whatsapp/90"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat with Us
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800&h=800&fit=crop"
                alt="Electronics collection"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm font-medium text-foreground/90">Featured Collection</p>
                <p className="text-2xl font-bold text-foreground">Latest Tech Deals</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
            <Truck className="h-8 w-8 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold text-card-foreground">Fast Delivery</p>
              <p className="text-xs text-muted-foreground">Across Kenya, 2-5 days</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
            <Shield className="h-8 w-8 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold text-card-foreground">Genuine Warranty</p>
              <p className="text-xs text-muted-foreground">1-2 year manufacturer warranty</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
            <CreditCard className="h-8 w-8 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold text-card-foreground">M-Pesa Payments</p>
              <p className="text-xs text-muted-foreground">Pay securely via mobile money</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
