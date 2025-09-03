import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Disable static optimization for problematic pages
  experimental: {
    optimizePackageImports: ['react-icons']
  }
};

export default nextConfig;
