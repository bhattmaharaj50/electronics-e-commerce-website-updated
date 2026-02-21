"use client"

import { useState } from "react"
import Link from "next/link"
import { Star, ChevronRight, Check, Info, Truck, Shield, MessageCircle, Minus, Plus } from "lucide-react"
import type { Product } from "@/lib/types"
import { formatPrice, getWhatsAppLink, categories } from "@/lib/data"
import { ProductCard } from "./product-card"
import { WhatsAppIcon } from "./whatsapp-icon"

interface ProductDetailProps {
  product: Product
  relatedProducts: Product[]
}

export function ProductDetail({ product, relatedProducts }: ProductDetailProps) {
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const currentVariant = product.variants[selectedVariant]
  const unitPrice = product.price + (currentVariant?.priceModifier || 0)
  const totalPrice = unitPrice * quantity
  const unitOriginalPrice = product.originalPrice
    ? product.originalPrice + (currentVariant?.priceModifier || 0)
    : undefined

  const category = categories.find((c) => c.slug === product.category)

  function decrementQty() {
    setQuantity((q) => Math.max(1, q - 1))
  }

  function incrementQty() {
    setQuantity((q) => Math.min(999, q + 1))
  }

  function handleQtyChange(val: string) {
    const n = parseInt(val, 10)
    if (!isNaN(n) && n >= 1 && n <= 999) {
      setQuantity(n)
    } else if (val === "") {
      setQuantity(1)
    }
  }

  const variantLabel = currentVariant ? ` (${currentVariant.label})` : ""
  const whatsAppUrl = getWhatsAppLink(
    product.name + variantLabel,
    quantity,
    totalPrice
  )

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        {category && (
          <>
            <Link href={`/category/${category.slug}`} className="transition-colors hover:text-foreground">
              {category.name}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
          </>
        )}
        <span className="text-foreground">{product.brand}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Images */}
        <div className="flex flex-col gap-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border border-border bg-secondary">
            <img
              src={product.images[selectedImage] || product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
            {product.flashSale && (
              <span className="absolute left-3 top-3 rounded bg-foreground px-2.5 py-1 text-xs font-bold text-background">
                Flash Sale
              </span>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`h-16 w-16 overflow-hidden rounded-md border-2 transition-colors ${
                    selectedImage === i ? "border-foreground" : "border-border"
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">{product.brand}</p>
            <h1 className="mt-1 text-2xl font-bold text-foreground lg:text-3xl">{product.name}</h1>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-foreground text-foreground" : "fill-secondary text-secondary"}`}
                />
              ))}
            </div>
            <span className="text-sm text-foreground">{product.rating}</span>
            <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
          </div>

          <div className="flex flex-wrap items-end gap-3">
            <span className="text-3xl font-bold text-foreground">{formatPrice(unitPrice)}</span>
            {unitOriginalPrice && (
              <span className="text-lg text-muted-foreground line-through">{formatPrice(unitOriginalPrice)}</span>
            )}
            {unitOriginalPrice && (
              <span className="rounded border border-border bg-secondary px-2 py-0.5 text-sm font-semibold text-foreground">
                Save {formatPrice(unitOriginalPrice - unitPrice)}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {product.inStock ? (
              <>
                <Check className="h-4 w-4 text-foreground" />
                <span className="text-sm font-medium text-foreground">In Stock</span>
              </>
            ) : (
              <>
                <Info className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Out of Stock</span>
              </>
            )}
          </div>

          {/* Variants */}
          {product.variants.length > 1 && (
            <div>
              <h3 className="mb-2 text-sm font-semibold text-foreground">
                {category?.variantType || "Option"}: {currentVariant?.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant, i) => (
                  <button
                    key={variant.value}
                    onClick={() => setSelectedVariant(i)}
                    className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                      selectedVariant === i
                        ? "border-foreground bg-foreground/10 text-foreground"
                        : "border-border text-muted-foreground hover:border-muted-foreground"
                    }`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div>
            <h3 className="mb-2 text-sm font-semibold text-foreground">Quantity</h3>
            <div className="flex items-center gap-3">
              <div className="flex items-center rounded-lg border border-border">
                <button
                  onClick={decrementQty}
                  className="flex h-10 w-10 items-center justify-center rounded-l-lg text-foreground transition-colors hover:bg-secondary"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <input
                  type="number"
                  min="1"
                  max="999"
                  value={quantity}
                  onChange={(e) => handleQtyChange(e.target.value)}
                  className="h-10 w-16 border-x border-border bg-transparent text-center text-sm font-medium text-foreground focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
                <button
                  onClick={incrementQty}
                  className="flex h-10 w-10 items-center justify-center rounded-r-lg text-foreground transition-colors hover:bg-secondary"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              {quantity > 1 && (
                <span className="text-sm text-muted-foreground">
                  Total: <span className="font-bold text-foreground">{formatPrice(totalPrice)}</span>
                </span>
              )}
            </div>
          </div>

          {/* Buy Buttons */}
          <div className="flex flex-col gap-3">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-foreground py-3.5 text-base font-bold text-background transition-colors hover:bg-foreground/90"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {quantity > 1 ? `Buy ${quantity} on WhatsApp - ${formatPrice(totalPrice)}` : "Buy on WhatsApp"}
            </a>
            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-card-foreground">
                <MessageCircle className="h-4 w-4 text-foreground" />
                How to Buy
              </h4>
              <ol className="flex flex-col gap-1 text-sm text-muted-foreground">
                <li>{'1. Click "Buy on WhatsApp" to start your order'}</li>
                <li>2. Pay via M-Pesa to our Till Number</li>
                <li>3. Send payment screenshot via WhatsApp</li>
                <li>4. Provide your delivery details</li>
              </ol>
            </div>
          </div>

          {/* Quick Info */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Truck className="h-4 w-4 text-foreground" />
              Fast delivery across Kenya (2-5 days)
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-foreground" />
              {product.specifications["Warranty"] || "Manufacturer warranty included"}
            </div>
          </div>
        </div>
      </div>

      {/* Description & Specs */}
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-xl font-bold text-foreground">Description</h2>
          <p className="leading-relaxed text-muted-foreground">{product.description}</p>
        </div>
        <div>
          <h2 className="mb-4 text-xl font-bold text-foreground">Specifications</h2>
          <div className="overflow-hidden rounded-lg border border-border">
            {Object.entries(product.specifications).map(([key, value], i) => (
              <div
                key={key}
                className={`flex items-center justify-between px-4 py-3 text-sm ${
                  i % 2 === 0 ? "bg-card" : "bg-secondary"
                }`}
              >
                <span className="font-medium text-foreground">{key}</span>
                <span className="text-muted-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="mb-6 text-xl font-bold text-foreground">Related Products</h2>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
