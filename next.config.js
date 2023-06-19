const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  // pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  images: {

      dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects(){
    return[
      {
        source: "/resume",
        destination: "https://drive.google.com/file/d/1uARDiv2rlOX4P4qSQhS4oRjWaC9O5NH1/view",
        permanent: true,
      }
    ]
  }
};

module.exports = withContentlayer(nextConfig);
