import "../styles/globals.css"

import "@splidejs/react-splide/css/core"
import type { AppProps } from "next/app"
import { Oswald } from "@next/font/google"
import { Roboto } from "@next/font/google"
import Head from "next/head"
const roboto = Roboto({
	weight: ["400", "500"],
	adjustFontFallback: true,
	subsets: ["latin", "cyrillic", "cyrillic-ext", "latin-ext"],
	fallback: ["sans-serif"],
	display: "swap",
})
const oswald = Oswald({
	weight: "600",
	adjustFontFallback: true,
	subsets: ["latin", "cyrillic", "cyrillic-ext", "latin-ext"],
	fallback: ["sans-serif"],
	display: "swap",
})
export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>MOUNTAIN</title>
				<link rel="icon" href="/logo.svg" sizes="any" type="image/svg+xml" />
			</Head>
			<style jsx global>{`
				html,
				.robotoText {
					font-family: ${roboto.style.fontFamily};
				}
				h1,
				h2,
				h3,
				h4,
				h5,
				h6 {
					font-family: ${oswald.style.fontFamily};
				}
			`}</style>
			<Component {...pageProps} />
		</>
	)
}
