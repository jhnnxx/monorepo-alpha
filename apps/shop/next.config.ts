import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async rewrites() {
		return [
			{
				source: "/community/:path*",
				destination: "/:path*",
			},
			{
				source: "/webzine/:path*",
				destination: "/:path*",
			}
		];
	}
};

export default nextConfig;
