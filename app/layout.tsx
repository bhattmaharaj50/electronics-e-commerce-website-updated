import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: '25FlowElectronics - Best Electronics Deals in Kenya',
  description: 'Shop the latest electronics at the best prices in Kenya. TVs, smartphones, laptops, appliances & more. Pay via M-Pesa. Fast delivery across Kenya.',
  keywords: 'electronics, Kenya, online shopping, TVs, smartphones, appliances, M-Pesa',
}

export const viewport: Viewport = {
  themeColor: '#171717',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
