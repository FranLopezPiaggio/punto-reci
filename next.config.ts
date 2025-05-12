import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  basePath: process.env.NODE_ENV === 'production' ? '/punto-reci' : '', 
  images: {
    unoptimized: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
