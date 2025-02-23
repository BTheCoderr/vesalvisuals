/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // Disable server actions and API routes for static export
  experimental: {
    serverActions: false
  }
}

module.exports = nextConfig 