import useScroll from "../../hooks/useScroll"
import Logo from "../Logo"
import styles from "./footer.module.css"
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"
import { Link as ScrollLink } from "react-scroll"
const Footer = () => {
	const { scrolled } = useScroll(150)

	return (
		<AnimatePresence>
			<footer className={styles.footer}>
				{scrolled && (
					<motion.span
						initial={{ opacity: 0, y: -150, width: 0, height: 0 }}
						animate={{ opacity: 1, y: 0, width: "32px", height: "32px" }}
						exit={{ opacity: 0, y: 150, width: 0, height: 0 }}
						className={styles.toTop}
					>
						<ScrollLink to={"about-us"}>
							<motion.svg
								initial={{ path: "" }}
								animate={{
									path: "M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z",
								}}
								exit={{ path: "" }}
								stroke="#FFFFFF"
								fill="#FFFFFF"
								strokeWidth="0"
								viewBox="0 0 1024 1024"
								height="2rem"
								width="2rem"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"></path>
							</motion.svg>
						</ScrollLink>
					</motion.span>
				)}
				<div className={styles.content}>
					<p>Maroon &copy; 2020 Все права защищены</p>
					<Logo />
					<p>Политика конфиденциальности</p>
				</div>
			</footer>
		</AnimatePresence>
	)
}

export default Footer
