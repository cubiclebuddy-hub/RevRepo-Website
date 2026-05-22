/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,

  poweredByHeader: false,

  compress: true,

  experimental: {
    optimizePackageImports: [
      "lucide-react",
    ],
  },

  images: {
    formats: [
      "image/avif",
      "image/webp",
    ],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production",
  },
}

export default nextConfig