import styles from "./navbar.module.css"
import { Link as ScrollLink } from "react-scroll"

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<ul className={styles.navList}>
				<li className={styles.navItem}>
					<ScrollLink to={"about-us"}>О нас</ScrollLink>
				</li>
				<li className={styles.navItem}>
					<ScrollLink to={"tours"}>Туры</ScrollLink>
				</li>
				<li className={styles.navItem}>
					<ScrollLink to={"select-tour"}>Подбор тура</ScrollLink>
				</li>
				<li className={styles.navItem}>
					<ScrollLink to={"blogs"}>Блог</ScrollLink>
				</li>
				<li className={styles.navItem}>
					<ScrollLink to={"contacts"}>Контакты</ScrollLink>
				</li>
			</ul>
			<ul className={styles.navContacts}>
				<li className={styles.navItem}>8 (800) 777-33-25</li>
				<li className={styles.navItem}>
					<svg
						width="35"
						height="35"
						viewBox="0 0 35 35"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="17.5" cy="17.5" r="17.5" fill="#FCFCFC" fillOpacity="0.4" />
						<path
							d="M24 23.9999L20.8583 20.8583M22.5555 16.7778C22.5555 19.9687 19.9687 22.5555 16.7778 22.5555C13.5868 22.5555 11 19.9687 11 16.7778C11 13.5868 13.5868 11 16.7778 11C19.9687 11 22.5555 13.5868 22.5555 16.7778Z"
							stroke="#FCFCFC"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</li>
				<li className={styles.navItem}>
					<svg
						width="35"
						height="35"
						viewBox="0 0 35 35"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="17.5" cy="17.5" r="17.5" fill="#FCFCFC" fillOpacity="0.4" />
						<path
							d="M23 24V22.5556C23 21.7894 22.7103 21.0546 22.1945 20.5128C21.6788 19.971 20.9793 19.6667 20.25 19.6667H14.75C14.0207 19.6667 13.3212 19.971 12.8055 20.5128C12.2897 21.0546 12 21.7894 12 22.5556V24M20.25 13.8889C20.25 15.4844 19.0188 16.7778 17.5 16.7778C15.9812 16.7778 14.75 15.4844 14.75 13.8889C14.75 12.2934 15.9812 11 17.5 11C19.0188 11 20.25 12.2934 20.25 13.8889Z"
							stroke="#FCFCFC"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
