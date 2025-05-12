import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  trailingSlash: process.env.NODE_ENV === 'production',
  basePath: process.env.NODE_ENV === 'production' ? '/punto-reci' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/punto-reci/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
