import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			"cdn.pixabay.com",
			"i.ytimg.com",
			"images.unsplash.com",
			"source.unsplash.com",
		],
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	eslint: {
		ignoreDuringBuilds: true, // Skip ESLint errors during Netlify build
	},
	typescript: {
		ignoreBuildErrors: true, // Skip TypeScript errors during Netlify build
	},
	// Enable React strict mode (recommended)
	reactStrictMode: true,
	// Add compiler options at the correct level
	compiler: {
		styledComponents: true, // If using styled-components
	},
};

export default nextConfig;
