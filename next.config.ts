import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  /* config options here */
  eslint: {
    // 忽略构建时的 eslint 错误
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
