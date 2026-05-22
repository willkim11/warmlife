import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/blog/2026-earned-income-credit-v2",
        destination: "/blog/earned-income-credit-may-apply-2026",
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
