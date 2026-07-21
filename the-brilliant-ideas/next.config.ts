import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  experimental: {
    // Inline the (small, ~11 KiB) global stylesheet into the HTML instead of
    // shipping it as a render-blocking request — removes ~150-300 ms from the
    // critical path on first visits.
    inlineCss: true,
  },
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
