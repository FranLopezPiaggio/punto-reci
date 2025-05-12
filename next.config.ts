import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/punto-reci', 
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
