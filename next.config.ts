import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/jazda-z-bajerem',
  trailingSlash: true,
};

export default nextConfig;
