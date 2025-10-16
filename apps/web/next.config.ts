import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  skipTrailingSlashRedirect: true,
  serverExternalPackages: [],
  // Remove experimental.forceSwcTransforms for Turbopack compatibility
  // Remove invalid generateStaticParams property
};

export default nextConfig;
