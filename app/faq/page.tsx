import type { Metadata } from "next"
import { Truck, Shield, CreditCard, HelpCircle, Clock, MapPin, Phone, MessageCircle } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

export const metadata: Metadata = {
  title: "Delivery & Warranty FAQ - 25FlowElectronics",
  description: "Learn about our delivery options, warranty policy, M-Pesa payment, and return policy.",
}

const deliveryInfo = [
  {
    icon: Truck,
    title: "Delivery Timeframe",
    description: "We deliver within 2-5 business days across Kenya. Same-day delivery available in Nairobi for orders placed before 12 PM.",
  },
  {
    icon: MapPin,
    title: "Delivery Areas",
    description: "We deliver to all major towns in Kenya including Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, Nyeri, and more.",
  },
  {
    icon: CreditCard,
    title: "Payment via M-Pesa",
    description: "We accept M-Pesa payments. After placing your order on WhatsApp, you will receive our M-Pesa details. Send payment and share the confirmation screenshot.",
  },
  {
    icon: Shield,
    title: "Warranty Policy",
    description: "All products come with manufacturer warranty (1-2 years depending on product). We handle warranty claims on your behalf for a hassle-free experience.",
  },
]

const faqs = [
  {
    q: "How do I place an order?",
    a: "Simply click the 'Buy on WhatsApp' button on any product page. You'll be connected to our sales team who will guide you through the ordering process.",
  },
  {
    q: "How do I pay for my order?",
    a: "We accept M-Pesa payments. Once you confirm your order on WhatsApp, we'll send you the M-Pesa payment details. After payment, share the confirmation screenshot with us.",
  },
  {
    q: "How long does delivery take?",
    a: "Delivery within Nairobi takes 1-2 business days. Deliveries to other major towns take 3-5 business days. We'll provide a tracking update via WhatsApp.",
  },
  {
    q: "Can I return a product?",
    a: "Yes, we accept returns within 7 days of delivery for products in their original condition and packaging. Contact us on WhatsApp to initiate a return.",
  },
  {
    q: "Are the products genuine?",
    a: "Yes, all our products are 100% genuine and sourced from authorized distributors. Every product comes with a manufacturer warranty.",
  },
  {
    q: "Do you offer installation services?",
    a: "Yes, we offer free installation for TVs, washing machines, and other large appliances within Nairobi. For other areas, installation can be arranged at a small fee.",
  },
  {
    q: "What if my product is faulty?",
    a: "If your product is faulty within the warranty period, contact us on WhatsApp. We'll arrange for repair or replacement as per the manufacturer's warranty terms.",
  },
  {
    q: "Do you offer bulk/corporate discounts?",
    a: "Yes, we offer special pricing for bulk orders and corporate purchases. Contact us on WhatsApp for a custom quote.",
  },
]

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-foreground">Delivery & Warranty FAQ</h1>
            <p className="mt-2 text-muted-foreground">Everything you need to know about ordering from 25FlowElectronics</p>
          </div>

          {/* Info Cards */}
          <div className="mb-12 grid gap-4 sm:grid-cols-2">
            {deliveryInfo.map((info) => (
              <div key={info.title} className="rounded-lg border border-border bg-card p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <info.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-1 font-semibold text-card-foreground">{info.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{info.description}</p>
              </div>
            ))}
          </div>

          {/* M-Pesa Steps */}
          <div className="mb-12 rounded-lg border border-primary/20 bg-primary/5 p-6">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
              <CreditCard className="h-5 w-5 text-primary" />
              How to Pay via M-Pesa
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { step: 1, title: "Order on WhatsApp", desc: "Click 'Buy on WhatsApp' on the product you want" },
                { step: 2, title: "Receive Payment Details", desc: "Our team will send you M-Pesa Till/Paybill details" },
                { step: 3, title: "Make Payment", desc: "Pay the exact amount via M-Pesa" },
                { step: 4, title: "Confirm & Deliver", desc: "Share screenshot & provide delivery address" },
              ].map((s) => (
                <div key={s.step} className="flex flex-col items-center text-center">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {s.step}
                  </div>
                  <h4 className="text-sm font-semibold text-foreground">{s.title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-foreground">
              <HelpCircle className="h-5 w-5 text-primary" />
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group rounded-lg border border-border bg-card">
                  <summary className="cursor-pointer px-5 py-4 text-sm font-semibold text-card-foreground transition-colors hover:text-primary">
                    {faq.q}
                  </summary>
                  <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="rounded-lg border border-border bg-card p-8 text-center">
            <h2 className="mb-2 text-xl font-bold text-card-foreground">Still have questions?</h2>
            <p className="mb-6 text-muted-foreground">Our team is available to help you via WhatsApp</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/254XXXXXXXXX?text=Hello%2025FlowElectronics!%20I%20have%20a%20question."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-6 py-3 font-bold text-whatsapp-foreground transition-colors hover:bg-whatsapp/90"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Chat on WhatsApp
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                Available Mon-Sat, 8AM - 8PM
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
