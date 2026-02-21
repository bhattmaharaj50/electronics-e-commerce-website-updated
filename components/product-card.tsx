import Link from "next/link"
import { Star } from "lucide-react"
import type { Product } from "@/lib/types"
import { formatPrice, getWhatsAppLink } from "@/lib/data"
import { WhatsAppIcon } from "./whatsapp-icon"

export function ProductCard({ product }: { product: Product }) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-muted-foreground/30">
      {discount > 0 && (
        <span className="absolute left-2 top-2 z-10 rounded bg-foreground px-2 py-0.5 text-xs font-bold text-background">
          -{discount}%
        </span>
      )}
      {product.flashSale && (
        <span className="absolute right-2 top-2 z-10 rounded border border-border bg-secondary px-2 py-0.5 text-xs font-bold text-foreground">
          Flash Sale
        </span>
      )}

      <Link href={`/product/${product.slug}`} className="relative overflow-hidden">
        <div className="aspect-square bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-3">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{product.brand}</p>
        <Link href={`/product/${product.slug}`}>
          <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-card-foreground transition-colors hover:text-muted-foreground">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${i < Math.round(product.rating) ? "fill-foreground text-foreground" : "fill-secondary text-secondary"}`}
            />
          ))}
          <span className="ml-1 text-xs text-muted-foreground">({product.reviewCount})</span>
        </div>

        <div className="mt-auto flex items-end justify-between pt-1">
          <div>
            <span className="text-lg font-bold text-card-foreground">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="ml-2 text-xs text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/product/${product.slug}`}
            className="flex-1 rounded-md border border-border bg-secondary py-2 text-center text-xs font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
          >
            View Details
          </Link>
          <a
            href={getWhatsAppLink(product.name, 1, product.price)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-md bg-foreground px-3 py-2 text-xs font-bold text-background transition-colors hover:bg-foreground/90"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            Buy
          </a>
        </div>

        {!product.inStock && (
          <span className="text-xs font-medium text-muted-foreground">Out of Stock</span>
        )}
      </div>
    </div>
  )
}
