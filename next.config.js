/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['mysticmarket.infura-ipfs.io'],
  },
};

module.exports = nextConfig;
