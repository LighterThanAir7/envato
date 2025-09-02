import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// output: 'export',
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
  }
};

export default nextConfig;
