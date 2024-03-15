/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['loremflickr.com', 'placehold.co', 'randomuser.me'],
    unoptimized: true,
  },
  output: 'export',

}

module.exports = nextConfig
