/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images-na.ssl-images-amazon.com",
      "fakestoreapi.com",
      "imgur.com",
      "links.papareact.com",
    ],
    dangerouslyAllowSVG: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
