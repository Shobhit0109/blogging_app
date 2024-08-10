/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        // You can also specify a pathname if needed
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
