import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you are deploying to username.github.io/repo-name/, 
  // uncomment the line below and replace 'repo-name' with your actual repository name:
  // basePath: '/repo-name',
};

export default nextConfig;
