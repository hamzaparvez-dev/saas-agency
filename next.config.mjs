/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flowbite.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // { // Add this new block
      //   protocol: 'https',
      //   hostname: 'cdn.example.com',
      // },
    ],
  },
};

export default nextConfig;
