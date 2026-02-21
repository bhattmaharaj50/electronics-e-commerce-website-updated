"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import {
  ShoppingBag, Package, Tag, BarChart3, Plus, Pencil, Trash2,
  Star, ArrowLeft, Search, Zap, LogIn, LogOut, Save, X, AlertCircle, CheckCircle2,
} from "lucide-react"
import { products as initialProducts, categories, formatPrice } from "@/lib/data"
import type { Product } from "@/lib/types"

const ADMIN_PASSWORD = "admin123"

type ToastType = { message: string; type: "success" | "error" }

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")
  const [activeTab, setActiveTab] = useState<"overview" | "products" | "flash" | "categories">("overview")
  const [searchQuery, setSearchQuery] = useState("")
  const [productList, setProductList] = useState<Product[]>([...initialProducts])
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [toast, setToast] = useState<ToastType | null>(null)

  // Edit form state
  const [editName, setEditName] = useState("")
  const [editPrice, setEditPrice] = useState("")
  const [editOriginalPrice, setEditOriginalPrice] = useState("")
  const [editBrand, setEditBrand] = useState("")
  const [editRating, setEditRating] = useState("")
  const [editDescription, setEditDescription] = useState("")
  const [editFlashSale, setEditFlashSale] = useState(false)
  const [editDealOfDay, setEditDealOfDay] = useState(false)
  const [editInStock, setEditInStock] = useState(true)

  const showToast = useCallback((message: string, type: "success" | "error") => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }, [])

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoginError("")
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true)
      setPassword("")
    } else {
      setLoginError("Incorrect password. Try again.")
    }
  }

  function handleLogout() {
    setAuthenticated(false)
    setPassword("")
    setActiveTab("overview")
    setEditingProduct(null)
  }

  function openEdit(product: Product) {
    setEditingProduct(product)
    setEditName(product.name)
    setEditPrice(product.price.toString())
    setEditOriginalPrice(product.originalPrice?.toString() || "")
    setEditBrand(product.brand)
    setEditRating(product.rating.toString())
    setEditDescription(product.description)
    setEditFlashSale(!!product.flashSale)
    setEditDealOfDay(!!product.dealOfDay)
    setEditInStock(product.inStock)
  }

  function handleSaveEdit() {
    if (!editingProduct) return
    if (!editName.trim()) {
      showToast("Product name is required.", "error")
      return
    }
    const price = parseFloat(editPrice)
    if (isNaN(price) || price <= 0) {
      showToast("Please enter a valid price.", "error")
      return
    }
    const rating = parseFloat(editRating)
    if (isNaN(rating) || rating < 0 || rating > 5) {
      showToast("Rating must be between 0 and 5.", "error")
      return
    }

    const originalPrice = editOriginalPrice ? parseFloat(editOriginalPrice) : undefined
    if (editOriginalPrice && (isNaN(originalPrice!) || originalPrice! <= 0)) {
      showToast("Please enter a valid original price.", "error")
      return
    }

    setProductList((prev) =>
      prev.map((p) =>
        p.id === editingProduct.id
          ? {
              ...p,
              name: editName.trim(),
              price,
              originalPrice,
              brand: editBrand.trim(),
              rating,
              description: editDescription.trim(),
              flashSale: editFlashSale,
              dealOfDay: editDealOfDay,
              inStock: editInStock,
            }
          : p
      )
    )
    setEditingProduct(null)
    showToast(`"${editName.trim()}" updated successfully.`, "success")
  }

  function handleDeleteProduct(id: string, name: string) {
    if (!confirm(`Are you sure you want to delete "${name}"? This cannot be undone.`)) return
    setProductList((prev) => prev.filter((p) => p.id !== id))
    showToast(`"${name}" has been deleted.`, "success")
  }

  function handleToggleFlashSale(id: string) {
    setProductList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, flashSale: !p.flashSale } : p))
    )
    const product = productList.find((p) => p.id === id)
    if (product) {
      showToast(
        product.flashSale ? `"${product.name}" removed from Flash Sales.` : `"${product.name}" added to Flash Sales.`,
        "success"
      )
    }
  }

  function handleToggleDeal(id: string) {
    setProductList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, dealOfDay: !p.dealOfDay } : p))
    )
    const product = productList.find((p) => p.id === id)
    if (product) {
      showToast(
        product.dealOfDay ? `"${product.name}" removed from Deals.` : `"${product.name}" added to Deals.`,
        "success"
      )
    }
  }

  // Login screen
  if (!authenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="w-full max-w-sm">
          <Link href="/" className="mb-8 flex items-center justify-center gap-2">
            <ShoppingBag className="h-7 w-7 text-foreground" />
            <span className="text-lg font-bold text-foreground">
              25Flow<span className="text-muted-foreground">Electronics</span>
            </span>
          </Link>
          <div className="rounded-lg border border-border bg-card p-6">
            <h1 className="mb-1 text-xl font-bold text-card-foreground">Admin Login</h1>
            <p className="mb-6 text-sm text-muted-foreground">Enter your password to access the dashboard</p>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setLoginError(""); }}
                  placeholder="Password"
                  className="w-full rounded-lg border border-input bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                />
                {loginError && (
                  <p className="mt-2 flex items-center gap-1 text-sm text-destructive">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {loginError}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-lg bg-foreground py-2.5 text-sm font-bold text-background transition-colors hover:bg-foreground/90"
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
    ? productList.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : productList

  const totalProducts = productList.length
  const flashSaleCount = productList.filter((p) => p.flashSale).length
  const dealCount = productList.filter((p) => p.dealOfDay).length
  const avgRating = totalProducts > 0 ? (productList.reduce((sum, p) => sum + p.rating, 0) / totalProducts).toFixed(1) : "0"

  const tabs = [
    { id: "overview" as const, label: "Overview", icon: BarChart3 },
    { id: "products" as const, label: "Products", icon: Package },
    { id: "flash" as const, label: "Flash Sales", icon: Zap },
    { id: "categories" as const, label: "Categories", icon: Tag },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Toast */}
      {toast && (
        <div className={`fixed right-4 top-4 z-[100] flex items-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium shadow-lg ${
          toast.type === "success" ? "border-border bg-card text-foreground" : "border-destructive/50 bg-destructive/10 text-destructive"
        }`}>
          {toast.type === "success" ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
          {toast.message}
        </div>
      )}

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
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <LogOut className="h-3.5 w-3.5" />
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
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
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
                  const count = productList.filter((p) => p.category === cat.slug).length
                  const pct = totalProducts > 0 ? (count / totalProducts) * 100 : 0
                  return (
                    <div key={cat.slug}>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{cat.name}</span>
                        <span className="font-medium text-foreground">{count}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-secondary">
                        <div className="h-full rounded-full bg-foreground transition-all" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* Products Tab */}
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
                  className="w-full rounded-lg border border-input bg-secondary py-2 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                />
              </div>
              <span className="text-sm text-muted-foreground">{filteredProducts.length} products</span>
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
                          <img src={product.image} alt="" className="h-10 w-10 rounded border border-border object-cover" />
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
                          <Star className="h-3.5 w-3.5 fill-foreground text-foreground" />
                          <span className="text-foreground">{product.rating}</span>
                        </div>
                      </td>
                      <td className="hidden px-4 py-3 md:table-cell">
                        <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${product.inStock ? "border-border text-foreground" : "border-destructive/30 text-destructive"}`}>
                          {product.inStock ? "In Stock" : "Out of Stock"}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => openEdit(product)}
                            className="rounded p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                            aria-label="Edit product"
                          >
                            <Pencil className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(product.id, product.name)}
                            className="rounded p-1.5 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
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

        {/* Flash Sales Tab */}
        {activeTab === "flash" && (
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold text-foreground">Flash Sales & Deals</h2>
            <p className="text-sm text-muted-foreground">Toggle flash sales and deal-of-the-day status for products.</p>

            <div className="grid gap-3 sm:grid-cols-2">
              {productList.map((product) => (
                <div key={product.id} className="flex items-start gap-4 rounded-lg border border-border bg-card p-4">
                  <img src={product.image} alt="" className="h-14 w-14 rounded border border-border object-cover" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-card-foreground">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{formatPrice(product.price)}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => handleToggleFlashSale(product.id)}
                        className={`rounded border px-2 py-0.5 text-xs font-medium transition-colors ${
                          product.flashSale
                            ? "border-foreground bg-foreground text-background"
                            : "border-border text-muted-foreground hover:border-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Flash Sale {product.flashSale ? "ON" : "OFF"}
                      </button>
                      <button
                        onClick={() => handleToggleDeal(product.id)}
                        className={`rounded border px-2 py-0.5 text-xs font-medium transition-colors ${
                          product.dealOfDay
                            ? "border-foreground bg-foreground text-background"
                            : "border-border text-muted-foreground hover:border-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Deal {product.dealOfDay ? "ON" : "OFF"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Categories Tab */}
        {activeTab === "categories" && (
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold text-foreground">Categories</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((cat) => {
                const count = productList.filter((p) => p.category === cat.slug).length
                return (
                  <div key={cat.slug} className="rounded-lg border border-border bg-card p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-card-foreground">{cat.name}</h3>
                      <span className="text-sm text-muted-foreground">{count} products</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Brands: {cat.brands.slice(0, 4).join(", ")}{cat.brands.length > 4 && ` +${cat.brands.length - 4} more`}
                    </p>
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
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-card-foreground">Edit Product</h2>
              <button
                onClick={() => setEditingProduct(null)}
                className="rounded p-1 text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Product Name</label>
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full rounded-lg border border-input bg-secondary px-4 py-2 text-sm text-foreground focus:border-foreground focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Price (KES)</label>
                  <input
                    type="number"
                    value={editPrice}
                    onChange={(e) => setEditPrice(e.target.value)}
                    className="w-full rounded-lg border border-input bg-secondary px-4 py-2 text-sm text-foreground focus:border-foreground focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Original Price</label>
                  <input
                    type="number"
                    value={editOriginalPrice}
                    onChange={(e) => setEditOriginalPrice(e.target.value)}
                    placeholder="Optional"
                    className="w-full rounded-lg border border-input bg-secondary px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Brand</label>
                  <input
                    value={editBrand}
                    onChange={(e) => setEditBrand(e.target.value)}
                    className="w-full rounded-lg border border-input bg-secondary px-4 py-2 text-sm text-foreground focus:border-foreground focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Rating (0-5)</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    value={editRating}
                    onChange={(e) => setEditRating(e.target.value)}
                    className="w-full rounded-lg border border-input bg-secondary px-4 py-2 text-sm text-foreground focus:border-foreground focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Description</label>
                <textarea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  rows={3}
                  className="w-full rounded-lg border border-input bg-secondary px-4 py-2 text-sm text-foreground focus:border-foreground focus:outline-none"
                />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <label className="flex items-center gap-2 text-sm text-foreground">
                  <input
                    type="checkbox"
                    checked={editFlashSale}
                    onChange={(e) => setEditFlashSale(e.target.checked)}
                    className="h-4 w-4 accent-foreground"
                  />
                  Flash Sale
                </label>
                <label className="flex items-center gap-2 text-sm text-foreground">
                  <input
                    type="checkbox"
                    checked={editDealOfDay}
                    onChange={(e) => setEditDealOfDay(e.target.checked)}
                    className="h-4 w-4 accent-foreground"
                  />
                  Deal of Day
                </label>
                <label className="flex items-center gap-2 text-sm text-foreground">
                  <input
                    type="checkbox"
                    checked={editInStock}
                    onChange={(e) => setEditInStock(e.target.checked)}
                    className="h-4 w-4 accent-foreground"
                  />
                  In Stock
                </label>
              </div>
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setEditingProduct(null)}
                  className="rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveEdit}
                  className="flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-bold text-background transition-colors hover:bg-foreground/90"
                >
                  <Save className="h-4 w-4" />
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
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
        <Icon className="h-5 w-5 text-foreground" />
      </div>
      <p className="text-2xl font-bold text-card-foreground">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  )
}
