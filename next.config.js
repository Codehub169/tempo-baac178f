/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Uncomment if deploying to a Node.js environment with Docker for smaller image size
};

module.exports = nextConfig;
