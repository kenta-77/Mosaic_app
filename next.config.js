/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  }
}

module.exports = {
  assetPrefix: "/Mosaic_app",
  async rewrites() {
    return [
      {
        source: "/Mosaic_app/api/:path*",
        destination: "/api/:path*",
      },
      {
        source: "/Mosaic_app/images/:query*",
        destination: '/_next/image/:query*'
      },
      {
        source: "/Mosaic_app/_next/:path*",
        destination: "/_next/:path*",
      },
    ]
  },
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
