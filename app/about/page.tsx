import type { Metadata } from "next"
import Link from "next/link"
import { ShoppingBag, Truck, Shield, CreditCard, Users, MapPin, Phone } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { WHATSAPP_NUMBER } from "@/lib/data"

export const metadata: Metadata = {
  title: "About Us - 25FlowElectronics",
  description: "Learn about 25FlowElectronics - Kenya's trusted online electronics store. Genuine products, M-Pesa payments, and fast delivery.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-12">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <ShoppingBag className="h-8 w-8 text-foreground" />
              <h1 className="text-3xl font-bold text-foreground">
                25Flow<span className="text-muted-foreground">Electronics</span>
              </h1>
            </div>
            <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              We are Kenya&apos;s trusted online electronics store, delivering genuine products at the best prices. From the latest smartphones to premium home appliances, we bring quality electronics to your doorstep.
            </p>
          </div>

          {/* Mission */}
          <div className="mb-12 rounded-lg border border-border bg-card p-8">
            <h2 className="mb-4 text-xl font-bold text-card-foreground">Our Mission</h2>
            <p className="leading-relaxed text-muted-foreground">
              At 25FlowElectronics, we believe everyone in Kenya deserves access to quality electronics at fair prices. We partner directly with authorized distributors and brands to bring you genuine products with full manufacturer warranties. Our simple WhatsApp ordering system and M-Pesa payments make shopping easy and accessible for everyone.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="mb-12">
            <h2 className="mb-6 text-center text-xl font-bold text-foreground">Why Choose Us</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-card p-5">
                <Shield className="mb-3 h-8 w-8 text-foreground" />
                <h3 className="mb-1 font-semibold text-card-foreground">100% Genuine Products</h3>
                <p className="text-sm text-muted-foreground">Every product comes with a manufacturer warranty. We source directly from authorized distributors.</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-5">
                <CreditCard className="mb-3 h-8 w-8 text-foreground" />
                <h3 className="mb-1 font-semibold text-card-foreground">Easy M-Pesa Payments</h3>
                <p className="text-sm text-muted-foreground">Pay securely using M-Pesa. No credit card needed, just your phone.</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-5">
                <Truck className="mb-3 h-8 w-8 text-foreground" />
                <h3 className="mb-1 font-semibold text-card-foreground">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">Same-day delivery in Nairobi. 2-5 business days to all major towns across Kenya.</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-5">
                <Users className="mb-3 h-8 w-8 text-foreground" />
                <h3 className="mb-1 font-semibold text-card-foreground">Personal Support</h3>
                <p className="text-sm text-muted-foreground">Chat with us directly on WhatsApp. Real people helping you find the right products.</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="rounded-lg border border-border bg-card p-8 text-center">
            <h2 className="mb-2 text-xl font-bold text-card-foreground">Get in Touch</h2>
            <p className="mb-6 text-muted-foreground">We&apos;re here to help you find the perfect electronics</p>
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello 25FlowElectronics! I'd like to learn more about your products.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 font-bold text-background transition-colors hover:bg-foreground/90"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
                <Link
                  href="/categories"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 font-bold text-foreground transition-colors hover:bg-secondary/80"
                >
                  Browse Products
                </Link>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Phone className="h-4 w-4" />
                  +254 793 823 013
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  Nairobi, Kenya
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
