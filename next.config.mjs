/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    'https://*.replit.dev',
    'https://*.replit.app',
    'http://localhost:5000',
    'http://0.0.0.0:5000',
    'http://127.0.0.1:5000',
  ],
}

export default nextConfig
