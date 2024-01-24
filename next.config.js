/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },

  images: {
    domains: [
      "ipfs.io",
      "coolmining.io",
      "vignette.wikia.nocookie.net",
      "gateway.pinata.cloud",
      "distant.mypinata.cloud",
      "ipfsfiles.distant.finance",
      "cdn.pixabay.com",
      "ipfs.kcc.network",
      "playkardia.mypinata.cloud",
      "static-nft.mojitoswap.finance",
      "cdn.kuswap.finance",
    ],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
