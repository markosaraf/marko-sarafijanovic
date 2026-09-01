import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Add external image hostnames here if you need to use next/image
    domains: [], 
    // Note: 'remotePatterns' is preferred in newer Next.js versions:
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'example.com',
    //   },
    // ],
  },
};

export default nextConfig;
