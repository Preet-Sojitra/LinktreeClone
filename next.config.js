/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Used the following config to allow images from Twitter to be optimized by Next.js
  images: {
    domains: ["pbs.twimg.com"],
  },
}

module.exports = nextConfig
