import Logo from "../Logo"
import styles from "./footer.module.css"
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.content}>
				<p>Maroon &copy; 2020 Все права защищены</p>
				<Logo />
				<p>Политика конфиденциальности</p>
			</div>
		</footer>
	)
}

export default Footer
