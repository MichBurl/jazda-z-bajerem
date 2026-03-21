/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/jazda-z-bajerem',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
