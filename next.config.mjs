/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  output: 'export',
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
