/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // mine worked fine without this line
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "bytegrad.com",
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
      ],
    },
  };
  
  export default nextConfig;