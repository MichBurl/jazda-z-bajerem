const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages requirements
  basePath: isProd ? '/jazda-z-bajerem' : '',
  assetPrefix: isProd ? '/jazda-z-bajerem/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
