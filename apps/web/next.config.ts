import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Disable static optimization for problematic pages
  experimental: {
    optimizePackageImports: ['react-icons']
  },
  // Force dynamic rendering to avoid SSR issues
  trailingSlash: false,
  generateBuildId: () => 'build-' + Date.now()
};

export default nextConfig;
