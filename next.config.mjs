/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_URL: "http://localhost:3000",
  },
  images: {
    remotePatterns: [
      {
        hostname: "*",
      },
    ],
  },
}

export default nextConfig
