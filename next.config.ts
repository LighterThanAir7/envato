import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'bytegrad.com',
				pathname: '/course-assets/react-nextjs/evento.png',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
		]
  }
};

export default nextConfig;
