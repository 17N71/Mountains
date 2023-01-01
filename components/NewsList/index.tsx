import { useState } from "react"
import styles from "./newList.module.css"
const NewsList = () => {
	const [news] = useState<INews[]>([
		{
			id: 1,
			date: "15 января, 2020",
			title: "Как подготовиться к первому восхождению на вершину",
			active: true,
		},
		{
			id: 2,
			date: "10 января, 2020",
			title: `Фестиваль Alpika Freeski Аlpindustria Fest Красная Поляна 13-16 февраля`,
			active: false,
		},
		{
			id: 3,
			date: "10 января, 2020",
			title: `Особенности альпинизма на Камчатке. Все о Ключевой Сопке`,
			active: false,
		},
		{
			id: 4,
			date: "15 декабря, 2019",
			title: "Что происходит с человеком на высоте более 3000 метров?",
			active: false,
		},
		{
			id: 5,
			date: "15 декабря, 2019",
			title: "Что происходит с человеком на высоте более 3000 метров?",
			active: false,
		},
	])
	return (
		<div>
			<ul className={styles.list}>
				{news &&
					news.map((n) => (
						<li
							key={n.id}
							className={`${styles.item} ${n.active ? styles.activeItem : ""}`}
						>
							<span className={styles.date}>{n.date}</span>
							<p className={styles.title}>{n.title}</p>
						</li>
					))}
			</ul>
			<button type="button" className={styles.readAllBtn}>
				Читать все новости
			</button>
		</div>
	)
}

export default NewsList
interface INews {
	id: number
	date: string
	title: string
	active: boolean
}
