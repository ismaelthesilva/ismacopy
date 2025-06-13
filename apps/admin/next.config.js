/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Disable experimental features that might cause issues
    serverComponentsExternalPackages: [],
  },
};

module.exports = nextConfig;
