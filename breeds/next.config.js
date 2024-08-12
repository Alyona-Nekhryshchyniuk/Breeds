/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn2.thecatapi.com",
      "cdn2.thedogapi.com",
    ],
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
