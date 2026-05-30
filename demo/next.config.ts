import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/locuterra",
  images: { unoptimized: true },
};

export default nextConfig;
