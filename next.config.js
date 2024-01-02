// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
})

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'vapt-front.vercel.app',
        protocol: 'https',
      },
      {
        hostname: 'github.com',
      },
    ],
  },
})
