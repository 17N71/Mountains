import styles from "./helpForm.module.css"
const HelpForm = () => {
	return (
		<div className={styles.helpForm}>
			<h2 className={styles.title}>
				Нужна помощь <br />с выбором тура?
			</h2>
			<p className={styles.rules}>
				Заполните форму, наш менеджер свяжется с вами в ближайшее время и подберет
				подходящий тур
			</p>
			<form className={styles.form}>
				<input type="text" placeholder="Имя" />
				<input type="tel" placeholder="Телефон" />
				<input type="email" placeholder="E-mail" />
				<button type="submit" className={styles.send}>
					Отправить
				</button>
			</form>
			<strong className={styles.aboutForm}>
				Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
			</strong>
		</div>
	)
}

export default HelpForm
