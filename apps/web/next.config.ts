import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    optimizePackageImports: ['react-icons']
  },
  trailingSlash: false,
  generateBuildId: () => 'build-' + Date.now(),
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable static generation for error pages to avoid context issues
  exportPathMap: async function (defaultPathMap) {
    // Remove the 404 page from static generation
    const { '/404': _, ...pathMap } = defaultPathMap;
    return pathMap;
  },
};

export default nextConfig;
