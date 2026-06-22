import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    output: process.env.NODE_ENV === "production" ? "export" : undefined,
    trailingSlash: process.env.NODE_ENV === "production",
    /* config options here */
    reactStrictMode: false,
    images:{
        unoptimized: true,
        remotePatterns: [{hostname: "*"}]
    }
};

export default nextConfig;
