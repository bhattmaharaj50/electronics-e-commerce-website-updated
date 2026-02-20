import { notFound } from "next/navigation"
import { categories, getProductsByCategory } from "@/lib/data"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CategoryContent } from "@/components/category-content"

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)
  if (!category) return { title: "Category Not Found" }
  return {
    title: `${category.name} - 25FlowElectronics`,
    description: `Shop ${category.name} from top brands at the best prices in Kenya. ${category.brands.slice(0, 5).join(", ")} and more.`,
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)
  if (!category) notFound()

  const products = getProductsByCategory(slug)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <CategoryContent category={category} products={products} />
      </main>
      <SiteFooter />
    </div>
  )
}
