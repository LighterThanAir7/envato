import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'bytegrad.com',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
		]
  },
	turbopack: {
		resolveAlias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
};

export default nextConfig;
