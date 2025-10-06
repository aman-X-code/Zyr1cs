import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  transpilePackages: ['unicornstudio-react'],
  experimental: {
    optimizePackageImports: ['unicornstudio-react'],
  },
};

export default nextConfig;
