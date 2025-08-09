import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		domains: ["cdn.pixabay.com", "i.ytimg.com"],
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},

	compilerOptions: {
		allowSyntheticDefaultImports: true,
	},
};

export default nextConfig;
