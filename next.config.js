/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    domains: ['localhost'],
    unoptimized: process.env.NODE_ENV === 'development',
  },
}

module.exports = nextConfig 