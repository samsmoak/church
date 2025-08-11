import type { Config } from "tailwindcss";

const config = {
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			height: {
				small: "700px",
				small1: "600px",
				small2: "500px",
				small3: "400px",
				big: "800px",
				bigx: "950px",
				bigxx: "1200px",
				bigxxx: "1200px",
			},
			width: {
				small: "700px",
				small1: "600px",
				small2: "500px",
				small3: "400px",
				big: "800px",
				bigx: "950px",
				bigxx: "1200px",
				bigxxx: "1200px",
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			fontFamily: {
				sans: ["ui-sans-serif", "system-ui"],
				serif: ["ui-serif", "Georgia"],
				mono: ["ui-monospace", "SFMono-Regular"],
				display: ["Lobster", "cursive"],
				redressed: ["Redressed", "cursive"],
				shizuru: ["Shizuru", "cursive"],
				body: ['"Open Sans"'],
				ArchitectDaughter: ["Architects Daughter", "cursive"],
				Yanone_Kaffeesatz: ["Yanone Kaffeesatz", "sans-serif"],
				Roboto: ["Roboto", "sans-serif"],
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			backgroundImage: {
				beetle: "url('/assets/Coloredbg.svg')",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
