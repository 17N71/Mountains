/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	devIndicators: {
		buildActivity: true,
		buildActivityPosition: "top-right",
	},
};

module.exports = nextConfig;
