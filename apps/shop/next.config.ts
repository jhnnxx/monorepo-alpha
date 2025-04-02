import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async rewrites() {
		return [
			{
				source: "/community/:path*",
				destination: "/community/:path*",
			},
			{
				source: "/webzine/:path*",
				destination: "/webzine/:path*",
			}
		];
	}
};

export default nextConfig;
