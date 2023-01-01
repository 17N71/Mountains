import HelpForm from "../HelpForm"
import styles from "./help.module.css"
const Help = () => {
	return (
		<section className={styles.help}>
			<HelpForm />
			<div className={styles.imageContainer} />
		</section>
	)
}

export default Help
