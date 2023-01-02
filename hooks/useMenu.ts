import { useEffect, useState } from "react"

export default function useMenu() {
	const [menu, setMenu] = useState<boolean>(false)
	const menuHandle = () => setMenu(!menu)
	useEffect(() => {
		if (menu) {
			window.document.documentElement.style.overflow = "hidden"
			window.document.documentElement.style.paddingRight = "12px"
		} else {
			window.document.documentElement.style.overflow = "auto"
			window.document.documentElement.style.paddingRight = "0"
		}
	}, [menu])
	const closeMenu = (): void => setMenu(false)
	return {
		menu,
		menuHandle,
		closeMenu,
	}
}
