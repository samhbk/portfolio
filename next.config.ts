import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Hide the dev-only “N” indicator (bottom-left) — errors still surface in the overlay */
  devIndicators: false,
  /** Baseline security headers (applies on Vercel and any other host running `next start`) */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
