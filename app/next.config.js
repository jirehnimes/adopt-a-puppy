var path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process?.env?.API_URL,
    API_REVALIDATE: process?.env?.API_REVALIDATE,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
