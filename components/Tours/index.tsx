import styles from "./tours.module.css"
import Image from "next/image"
const Tours = () => {
	return (
		<section className={styles.tours} id={"tours"}>
			<article className={styles.article}>
				<h2 className={styles.title}>Туры с восхождением на вершины мира</h2>
				<p className={styles.paragraph}>
					Мы являемся экспертами в организации альпинистских туров для опытных альпинистов
					и для новичков. Вы можете доверить нам полную организацию вашего приключения от
					А до Я и быть уверенными в качестве и безопасности восхождения. Наша компания
					предоставляет все необходимое: консультацию по выбору тура, перелет, визу,
					бронирование проживания, питание, оборудование, необходимое для восхождения,
					опытных гидов, полное сопровождение.
				</p>
			</article>
			<Image
				src={"/map.svg"}
				title={"Tours map"}
				alt={"Tours map"}
				width={815}
				height={375}
				className={styles.mapImage}
				priority
			/>
		</section>
	)
}

export default Tours
