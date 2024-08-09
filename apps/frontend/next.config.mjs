/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/graphql",
        destination: process.env.GRAPHQL_URL || "http://localhost:3001/graphql",
      },
    ];
  },
};

export default nextConfig;
