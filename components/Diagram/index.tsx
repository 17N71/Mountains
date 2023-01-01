import styles from "./diagram.module.css"
const Diagram = () => {
	return (
		<div className={styles.diagram}>
			<ul className={`${styles.list} ${styles.vertex}`}>
				<li className={styles.heading}>Вершина</li>
				<li className={styles.item}>Эльбрус</li>
				<li className={styles.item}>Казбек</li>
				<li className={styles.item}>Белуха</li>
				<li className={styles.item}>Дыхтау</li>
			</ul>
			<ul className={`${styles.list} ${styles.height}`}>
				<li className={styles.heading}>Высота</li>
				<li className={styles.item}>5642 м</li>
				<li className={styles.item}>5033 м</li>
				<li className={styles.item}>4506 м</li>
				<li className={styles.item}>5204 м</li>
			</ul>
			<ul className={`${styles.list} ${styles.level}`}>
				<li className={styles.heading}>Уровень</li>
				<li className={styles.item}>Средний</li>
				<li className={styles.item}>Сложный </li>
				<li className={styles.item}>Простой</li>
				<li className={styles.item}>Сложный</li>
			</ul>
			<ul className={`${styles.list} ${styles.pricing}`}>
				<li className={styles.heading}>Стоимость</li>
				<li className={styles.item}>от 25 000 {`\u20bd`}</li>
				<li className={styles.item}>от 30 000 {`\u20bd`}</li>
				<li className={styles.item}>от 20 000 {`\u20bd`}</li>
				<li className={styles.item}>от 40 000 {`\u20bd`}</li>
			</ul>
		</div>
	)
}

export default Diagram
