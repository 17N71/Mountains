import styles from "./everest.module.css"

const Everest = () => {
	return (
		<section className={styles.everest} id={"about-us"}>
			<div className={styles.context}>
				<h1 className={styles.title}>Эверест</h1>
				<button type="button" className={styles.btn}>
					Подробнее
				</button>
			</div>
		</section>
	)
}

export default Everest
