/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.codepen.io",
      },
      {
        protocol: "https",
        hostname: "www.rug.nl",
      },
      {
        protocol: "https",
        hostname: "uxwing.com",
      },
    ],
  },
};

export default nextConfig;
