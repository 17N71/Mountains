import { useEffect, useState } from "react"

export default function useScroll(scrollHeight: number) {
	const [scroll, setScroll] = useState<number>(0)
	const [scrolled, setScrolled] = useState<boolean>(false)
	function scrollHandle(e: any): void {
		setScroll(window.pageYOffset)
	}
	useEffect(() => {
		window.addEventListener("scroll", scrollHandle)
		if (scrollHeight <= scroll) {
			setScrolled(true)
		} else {
			setScrolled(false)
		}
		return () => window.removeEventListener("scroll", scrollHandle)
	}, [scrolled, scroll])
	return {
		scrolled,
	}
}
