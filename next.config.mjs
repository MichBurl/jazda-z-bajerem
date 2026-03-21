const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/jazda-z-bajerem' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: isProd ? '/jazda-z-bajerem/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
