/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/jazda-z-bajerem',
  trailingSlash: true,
};

export default nextConfig;
