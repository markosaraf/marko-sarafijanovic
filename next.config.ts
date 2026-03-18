import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  async redirects() {
    return [
      // Redirect www to non-www (http)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.marko-sarafijanovic.com',
          },
        ],
        destination: 'https://marko-sarafijanovic.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
