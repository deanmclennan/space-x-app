/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // allow url to be passed to next/image

  images: {
    domains: ["images.unsplash.com", "a.espncdn.com"],
  },

  formats: [
    "image/avif",
    "image/webp",
    "image/jpeg",
    "image/png",
    "image/svg+xml",
  ],
  experimental: {
    // Allows the use of new experimental features in Next.js
    appDir: true,
  },
};

module.exports = nextConfig;
