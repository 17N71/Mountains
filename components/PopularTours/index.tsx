import { useState } from "react"
import styles from "./popularTour.module.css"
import { Splide } from "@splidejs/react-splide"
import Tour from "../Tour"
import beluha from "./beluha.jpg"
import elbrus from "./elbrus.jpg"
import kilimandjaro from "./kilimandjaro.jpg"
const PopularTours = () => {
	const [tours] = useState<ITours[]>([
		{
			id: 1,
			country: "Россия",
			name: "Белуха",
			info: {
				height: "4506 м",
				days: "12 дней",
				price: "от 45000",
			},
			level: "Средний уровень",
			src: beluha,
		},
		{
			id: 2,
			country: "Россия",
			name: "Эльбрус",
			info: {
				height: "5642 м",
				days: "10 дней",
				price: "от 25 000",
			},
			level: "Средний уровень",
			src: elbrus,
		},
		{
			id: 3,
			country: "Танзания",
			name: "Килиманджаро",
			info: {
				height: "5895 м",
				days: "4 дня",
				price: "от 55000",
			},
			level: "Простой уровень",
			src: kilimandjaro,
		},
	])
	return (
		<section className={styles.popularTours} id={"select-tour"}>
			<h2 className={styles.title}>Популярные туры</h2>
			<Splide
				options={{
					perPage: 3,
					gap: "0rem",
					type: "loop",
					cover: true,
					width: 280 * 1 + 0,
					mediaQuery: "min",
					lazyLoad: "nearby",
					classes: {
						arrows: `splide__arrows ${styles.arrows}`,
						prev: `splide__arrow--prev ${styles.arrowPrev}`,
						next: `splide__arrow--next ${styles.arrowNext}`,
					},
					breakpoints: {
						1200: {
							width: 370 * 3 + 30,
							gap: "1rem",
						},
						906: {
							width: 370 * 2 + 0,
							gap: "1rem",
						},
						380: {
							width: 370 * 1 + 0,
						},
					},
				}}
				className={styles.tours}
			>
				{tours && tours.map((t) => <Tour key={t.id} data={t} />)}
			</Splide>
		</section>
	)
}

export default PopularTours
export interface ITours {
	id: number
	country: string
	name: string
	info: IInfo
	level: string
	src: any
}
interface IInfo {
	height: string
	days: string
	price: string
}
