export interface Product {
  id: string
  name: string
  brand: string
  category: string
  slug: string
  description: string
  specifications: Record<string, string>
  variants: ProductVariant[]
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  inStock: boolean
  image: string
  images: string[]
  featured?: boolean
  flashSale?: boolean
  dealOfDay?: boolean
  flashSaleEnds?: string
}

export interface ProductVariant {
  label: string
  value: string
  priceModifier?: number
}

export interface Category {
  name: string
  slug: string
  icon: string
  brands: string[]
  variantType: string
  variantOptions: string[]
  productCount: number
}
