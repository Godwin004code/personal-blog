/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com",'localhost', "murmuring-dawn-44285.herokuapp.com"]
  }
}

module.exports = nextConfig


module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware.manifest.json$/]
  }
})
