import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Set the correct workspace root for monorepo
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
