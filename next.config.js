/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'delta-law.co.il', 'randomuser.me'],
  },
};

module.exports = nextConfig;