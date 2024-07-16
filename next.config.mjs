/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: true,
  },
  env: {
    NEXT_PRIVATE_GOOGLE_MAPS_API_KEY:
      process.env.NEXT_PRIVATE_GOOGLE_MAPS_API_KEY,
  },
};

export default nextConfig;
