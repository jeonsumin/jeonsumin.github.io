import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: process.env.NODE_ENV === "production" ? "export" : undefined,
    basePath: process.env.NODE_ENV === "production" ? "/jeonsumin.github.io" : undefined,
  /* config options here */
};

export default nextConfig;
