/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const prefixPath = !isProd ? '/Mosaic_app' : ''

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  }
}

module.exports = {
  assetPrefix: prefixPath,
  basePath: prefixPath,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/media/rectangles/**',
      },
    ],
  },
}
module.exports = nextConfig
