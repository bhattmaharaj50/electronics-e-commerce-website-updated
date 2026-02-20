"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ShoppingBag, Package, Tag, BarChart3, Plus, Pencil, Trash2,
  Star, ArrowLeft, Search, Zap, LogIn,
} from "lucide-react"
import { products, categories, formatPrice } from "@/lib/data"
import type { Product } from "@/lib/types"

const ADMIN_PASSWORD = "admin123"

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [activeTab, setActiveTab] = useState<"overview" | "products" | "flash" | "categories">("overview")
  const [searchQuery, setSearchQuery] = useState("")
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true)
    }
  }

  if (!authenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="w-full max-w-sm">
          <Link href="/" className="mb-8 flex items-center justify-center gap-2">
            <ShoppingBag className="h-7 w-7 text-primary" />
            <span className="text-lg font-bold text-foreground">
              25Flow<span className="text-primary">Electronics</span>
            </span>
          </Link>
          <div className="rounded-lg border border-border bg-card p-6">
            <h1 className="mb-1 text-xl font-bold text-card-foreground">Admin Login</h1>
            <p className="mb-6 text-sm text-muted-foreground">Enter your password to access the dashboard</p>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="rounded-lg border border-input bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <LogIn className="h-4 w-4" />
                Sign In
              </button>
              <p className="text-center text-xs text-muted-foreground">Demo password: admin123</p>
            </form>
          </div>
        </div>
      </div>
    )
  }

  const filteredProducts = searchQuery
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products

  const totalProducts = products.length
  const flashSaleCount = products.filter((p) => p.flashSale).length
  const dealCount = products.filter((p) => p.dealOfDay).length
  const avgRating = (products.reduce((sum, p) => sum + p.rating, 0) / products.length).toFixed(1)

  const tabs = [
    { id: "overview" as const, label: "Overview", icon: BarChart3 },
    { id: "products" as const, label: "Products", icon: Package },
    { id: "flash" as const, label: "Flash Sales", icon: Zap },
    { id: "categories" as const, label: "Categories", icon: Tag },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Back to Store</span>
            </Link>
            <span className="hidden text-sm font-bold text-foreground sm:block">Admin Dashboard</span>
          </div>
          <button
            onClick={() => setAuthenticated(false)}
            className="rounded-lg border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-4 py-6">
        {/* Tabs */}
        <div className="flex gap-1 overflow-x-auto rounded-lg border border-border bg-card p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview */}
        {activeTab === "overview" && (
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              <StatCard icon={Package} label="Total Products" value={totalProducts.toString()} />
              <StatCard icon={Zap} label="Flash Sales" value={flashSaleCount.toString()} />
              <StatCard icon={Tag} label="Deals of Day" value={dealCount.toString()} />
              <StatCard icon={Star} label="Avg Rating" value={avgRating} />
            </div>

            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="mb-4 font-semibold text-card-foreground">Products by Category</h3>
              <div className="flex flex-col gap-3">
                {categories.map((cat) => {
                  const count = products.filter((p) => p.category === cat.slug).length
                  const pct = totalProducts > 0 ? (count / totalProducts) * 100 : 0
                  return (
                    <div key={cat.slug}>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{cat.name}</span>
                        <span className="font-medium text-foreground">{count}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-secondary">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* Products */}
        {activeTab === "products" && (
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="relative flex-1 sm:max-w-sm">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full rounded-lg border border-input bg-secondary py-2 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90">
                <Plus className="h-4 w-4" />
                Add Product
              </button>
            </div>

            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary">
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Product</th>
                    <th className="hidden px-4 py-3 text-left font-medium text-muted-foreground sm:table-cell">Category</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Price</th>
                    <th className="hidden px-4 py-3 text-left font-medium text-muted-foreground md:table-cell">Rating</th>
                    <th className="hidden px-4 py-3 text-left font-medium text-muted-foreground md:table-cell">Status</th>
                    <th className="px-4 py-3 text-right font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => (
                    <tr key={product.id} className="border-b border-border last:border-0">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <img src={product.image} alt="" className="h-10 w-10 rounded object-cover" />
                          <div>
                            <p className="max-w-[200px] truncate font-medium text-foreground">{product.name}</p>
                            <p className="text-xs text-muted-foreground">{product.brand}</p>
                          </div>
                        </div>
                      </td>
                      <td className="hidden px-4 py-3 text-muted-foreground capitalize sm:table-cell">
                        {product.category.replace(/-/g, " ")}
                      </td>
                      <td className="px-4 py-3 font-medium text-foreground">{formatPrice(product.price)}</td>
                      <td className="hidden px-4 py-3 md:table-cell">
                        <div className="flex items-center gap-1">
                          <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                          <span className="text-foreground">{product.rating}</span>
                        </div>
                      </td>
                      <td className="hidden px-4 py-3 md:table-cell">
                        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${product.inStock ? "bg-primary/10 text-primary" : "bg-sale/10 text-sale"}`}>
                          {product.inStock ? "In Stock" : "Out of Stock"}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => setEditingProduct(product)}
                            className="rounded p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                            aria-label="Edit product"
                          >
                            <Pencil className="h-4 w-4" />
                          </button>
                          <button
                            className="rounded p-1.5 text-muted-foreground transition-colors hover:bg-sale/10 hover:text-sale"
                            aria-label="Delete product"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Flash Sales */}
        {activeTab === "flash" && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-foreground">Flash Sales & Deals</h2>
              <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90">
                <Plus className="h-4 w-4" />
                Add Sale
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {products.filter((p) => p.flashSale || p.dealOfDay).map((product) => (
                <div key={product.id} className="flex items-start gap-4 rounded-lg border border-border bg-card p-4">
                  <img src={product.image} alt="" className="h-16 w-16 rounded object-cover" />
                  <div className="flex-1">
                    <p className="font-medium text-card-foreground">{product.name}</p>
                    <p className="text-sm text-muted-foreground">{formatPrice(product.price)}
                      {product.originalPrice && (
                        <span className="ml-2 line-through">{formatPrice(product.originalPrice)}</span>
                      )}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      {product.flashSale && (
                        <span className="rounded bg-sale/10 px-2 py-0.5 text-xs font-medium text-sale">Flash Sale</span>
                      )}
                      {product.dealOfDay && (
                        <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">Deal of Day</span>
                      )}
                    </div>
                  </div>
                  <button className="rounded p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground" aria-label="Edit sale">
                    <Pencil className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Categories */}
        {activeTab === "categories" && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-foreground">Categories</h2>
              <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90">
                <Plus className="h-4 w-4" />
                Add Category
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((cat) => {
                const count = products.filter((p) => p.category === cat.slug).length
                return (
                  <div key={cat.slug} className="rounded-lg border border-border bg-card p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-card-foreground">{cat.name}</h3>
                      <span className="text-sm text-muted-foreground">{count} products</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Brands: {cat.brands.slice(0, 4).join(", ")}{cat.brands.length > 4 && ` +${cat.brands.length - 4} more`}
                    </p>
                    <div className="mt-3 flex items-center gap-1">
                      <button className="rounded p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground" aria-label="Edit category">
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button className="rounded p-1.5 text-muted-foreground transition-colors hover:bg-sale/10 hover:text-sale" aria-label="Delete category">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {editingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="mx-4 w-full max-w-lg rounded-lg border border-border bg-card p-6">
            <h2 className="mb-4 text-lg font-bold text-card-foreground">Edit Product</h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Product Name</label>
                <input defaultValue={editingProduct.name} className="w-full rounded-lg border border-input bg-secondary px-4 py-2 text-sm text-foreground" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Price (KES)</label>
                  <input type="number" defaultValue={editingProduct.price} className="w-full rounded-lg border border-input bg-secondary px-4 py-2 text-sm text-foreground" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Original Price</label>
                  <input type="number" defaultValue={editingProduct.originalPrice || ""} className="w-full rounded-lg border border-input bg-secondary px-4 py-2 text-sm text-foreground" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Brand</label>
                  <input defaultValue={editingProduct.brand} className="w-full rounded-lg border border-input bg-secondary px-4 py-2 text-sm text-foreground" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Rating</label>
                  <input type="number" step="0.1" defaultValue={editingProduct.rating} className="w-full rounded-lg border border-input bg-secondary px-4 py-2 text-sm text-foreground" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Description</label>
                <textarea defaultValue={editingProduct.description} rows={3} className="w-full rounded-lg border border-input bg-secondary px-4 py-2 text-sm text-foreground" />
              </div>
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 text-sm text-foreground">
                  <input type="checkbox" defaultChecked={editingProduct.flashSale} className="accent-primary" />
                  Flash Sale
                </label>
                <label className="flex items-center gap-2 text-sm text-foreground">
                  <input type="checkbox" defaultChecked={editingProduct.dealOfDay} className="accent-primary" />
                  Deal of Day
                </label>
              </div>
              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setEditingProduct(null)}
                  className="rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setEditingProduct(null)}
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType
  label: string
  value: string
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <p className="text-2xl font-bold text-card-foreground">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  )
}
