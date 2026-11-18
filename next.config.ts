import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // The app's invite message links to /download; /join opens the app if it's
  // installed and otherwise sends people to the store.
  async redirects() {
    return [{ source: "/download", destination: "/join", permanent: false }];
  },
};

export default nextConfig;
