import Diagram from "../Diagram"
import styles from "./russia.module.css"
const Russia = () => {
	return (
		<section className={styles.russia}>
			<div className={styles.content}>
				<h2 className={styles.title}>Россия</h2>
				<div className={styles.label}>Более 15 туров для альпинистов всех уровней</div>
				<Diagram />
				<button type="button" className={styles.seeMoreButton}>
					Смотреть все
				</button>
			</div>
		</section>
	)
}

export default Russia
