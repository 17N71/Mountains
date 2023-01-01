import styles from "./header.module.css"
import Logo from "./../Logo"
import Navbar from "./../Navbar"
import { MatchMediaHOC } from "react-match-media"
import ButtonMenu from "../ButtonMenu"
import MobileMenu from "../MobileMenu"
import useMenu from "../hooks/useMenu"
const NavMedia = MatchMediaHOC(Navbar, "(min-width: 1030px)")
const ButtonMediaMenu = MatchMediaHOC(ButtonMenu, "(max-width: 1030px)")
const MobileMenuMedia = MatchMediaHOC(MobileMenu, "(max-width: 1030px)")
const Header = () => {
	const { menu, menuHandle, closeMenu } = useMenu()
	return (
		<>
			<MobileMenuMedia closeMenu={closeMenu} isShow={menu} />
			<ButtonMediaMenu onClick={menuHandle} />
			<header className={styles.header}>
				<Logo />
				<NavMedia />
			</header>
		</>
	)
}

export default Header
