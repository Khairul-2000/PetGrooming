/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn-icons-png.flaticon.com",
      },
      {
        hostname: "img.icons8.com",
      },
      {
        hostname: "cdn.prod.website-files.com",
      },
    ],
  },
};

export default nextConfig;
