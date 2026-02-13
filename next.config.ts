import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Aggressive caching for static assets (fonts, images, JS/CSS chunks)
  headers: async () => [
    {
      source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    {
      source: "/_next/static/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
  ],

  // Enable experimental optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
    ],
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
